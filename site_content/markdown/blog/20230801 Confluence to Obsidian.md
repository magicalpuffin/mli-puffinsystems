---
post_id: 20230801
title: Confluence to Obsidian
description: How to convert Confluence HTML export into markdown for Obsidian.
date_created: 2023-08-01
date_updated: 2023-11-04
---
![confluence to obsidian](/static/content/images/blog/20230801_confluence_to_obsidian.png)
## Overview

I migrated my notes from Confluence to Obsidian using a few scripts. More generically, this converts Confluence to markdown. This blog post describes the general process so others who face this problem have a starting point.

Confluence doesn't directly support exporting a workspace to markdown. The result of my attempt was only a partial solution.

I prioritized the following:
1. Preserve any text written and convert it to markdown
2. Avoid excessive HTML. Try to keep everything plain markdown

The following weren't converted to markdown:
1. Folder structure
2. Images
3. Attachments
4. Internal links between notebooks

The result was a massive folder with each page as a markdown file which could be copied and searched.

### Links
- https://github.com/magicalpuffin/Confluence-to-Obsidian.

## How it works

1. Export a Confluence workspace to HTML. 
2. Convert the HTML to markdown using a Pandoc in a PowerShell script. 

Due to the the HTML format, not everything can get easily converted. Use a Lua filter to define how Pandoc should convert different HTML elements.

### PowerShell script

```powershell
# ConvetHTMLToMarkdown.ps1

# Set the path to the folder containing the HTML files
$sourceFolder = "./confluence_workspace"

# Set the path to the folder containing generated Markdown files
$destinationFolder = "./markdown"

# Set the path to the lua filter script
$luaFilterPath = "filter_html.lua"

# Get all HTML files in the folder
$htmlFiles = Get-ChildItem -Path $sourceFolder -Filter "*.html" -File

# Loop through each HTML file and convert to Markdown using Pandoc
# foreach ($htmlFile in $htmlFiles[0..10]) {
foreach ($htmlFile in $htmlFiles) {
    $htmlFilePath = $htmlFile.FullName
    $markdownFileName = Join-Path -Path $destinationFolder -ChildPath ([System.IO.Path]::ChangeExtension($htmlFile.Name, "md"))

    $command = "pandoc '$htmlFilePath' -f html -t gfm -L '$luaFilterPath' -s -o '$markdownFileName'"
    Invoke-Expression $command
}
```

- This is in PowerShell but should be similar in bash.
- The script sets all of the parameters and file paths
- It loops through all of the HTML files and runs the Pandoc command to convert the file to markdown
- Convert a few files first to check the results before converting the entire workspace.

### Pandoc

```powershell
pandoc '$htmlFilePath' -f html -t gfm -L '$luaFilterPath' -s -o '$markdownFileName'
```

- Install Pandoc. https://pandoc.org/installing.html
- The command converts from HTML to GitHub Flavored Markdown using the Lua filter.
- GitHub Flavored Markdown converted the most from Confluence HTML. It was the only format I found which could convert the Confluence HTML tables.

### Lua Filter

```powershell
-- filter_html.lua

function Span(el)
  return el.content
end

function Div(el)
  -- Removes footer
  if el.identifier == "footer" then
    return {}
  end
  -- Removes breadcrumb header
  if el.identifier == "breadcrumb-section" then
    return {}
  end
  -- Removes attachments plugin
  if el.classes:includes("plugin_attachments_container") then
    return {}
  end
  return el.content
end

function Para(el)
  if el.content then
    for _, item in ipairs(el.content) do
      -- Out of order execution, converted links should not be stringified
      if item.t == "RawInline" then
        return el
      end
    end
    return pandoc.utils.stringify(el.content)
  end
end

function Image(el)
  return {}
end

function Link(el)
  -- if el.classes:find("download-all-link", 0) then
  --   return {}
  -- end
  if el.classes:includes("external-link") then
    link_text = pandoc.utils.stringify(el.content)
    link_url = el.target
    markdown_link = string.format("[%s](%s)", link_text, link_url)

    return {pandoc.RawInline("gfm", markdown_link)}
  end
end

-- function Table(el)
--   if el.classes:find("attachments", 0) then
--     return {}
--   end
-- end
```

- I don't know Lua and I didn't really understand the Pandoc documentation. https://pandoc.org/lua-filters.html
- Only includes the contents within Span elements
- Removes the extra HTML Divs used by Confluence in the page layout
- Paragraphs are difficult to format because Confluence uses paragraph elements within lists. The filter tries to convert them to strings in order for the list to be formatted without extra indents.
  - Due to out of order execution, the link conversion filter executes first. To avoid breaking the link format, `RawInline` gets ignored
  - This is messy and I couldn't figure out a better way to do this. This results in inconsistent spacing for lists whenever there is a link.
- Images were removed because I didn't want to figure out how to fix them.
- Links are converted from HTML into the markdown format.

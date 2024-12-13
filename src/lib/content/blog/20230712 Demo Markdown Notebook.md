---
id: 20230712
slug: demo-markdown-notebook
title: Demo Markdown Notebook
description: Overview about creating a markdown editor using SvelteKit
createdDate: 2023-07-12
updatedDate: 2023-12-18 
---
![demo markdown notebook screenshot](/static/content/images/blog/20230712_markdown_notebook.png)
*Screenshot of writing markdown using Demo Markdown Notebook*

## Overview

This basic note taking app was my first SvelteKit project after completing the [Mozilla Svelte Tutorial](https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Svelte_getting_started). Over the course of about 2 weeks, I successfully mashed enough libraries together to create something half functional. 

**2023-12-18 UPDATE:** This blog was updated to be a more sensible. The project is now deployed on AWS using SST.

### Links
- https://demo.markdown.puffinsystems.com/
- https://github.com/magicalpuffin/Demo-Markdown-Notebook

## SvelteKit

Svelte and SvelteKit were extremely easy to pick up. Components can be dynamic and styled all from a single file. This was much better than Django and HTMX.

## Typescript

I can understand why Typescript would be a requirement for large and complex projects. When everything has a clear type, it is easier to understand how you should use different functions and objects. However, there is an annoying learning curve. I found many of the type errors provided by VSCode confusing.

### Tailwindcss

I took me a while to understand TailwindCSS, probably because I didn't understand CSS. Tailwind only provides styles while a library like Bootstrap provides complete components. After some usage, I think Tailwind is different approach and provides a lot of customization and flexibility.

The Tailwind class names are unwieldy, but using classes allowed for better uniformity between components without global styles.

Tailwind also has a great plugin for typography.

### Ace Editor

Ace is a web text/code editor with support for writing markdown. Although I could have used the an Svelte Ace component package, I decided to implement the component myself for practice. Svelte doesn't have a large package ecosystem, so it is important learn how to create custom components for existing JS package.

The documentation for Ace was frustratingly sparse. I should have just used a better  markdown editor.

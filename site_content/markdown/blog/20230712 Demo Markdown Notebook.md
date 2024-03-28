---
post_id: 20230712
title: Demo Markdown Notebook
description: Overview about creating a markdown editor using SvelteKit
date_created: 2023-07-12
date_updated: 2023-12-18
---
![demo markdown notebook screenshot](/static/content/images/blog/20230712_markdown_notebook.png)
*Screenshot of writing markdown using Demo Markdown Notebook*

## Overview

This basic note taking app was my first project after completing the [Mozilla Svelte Tutorial](https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Svelte_getting_started) and was used to explore how Svelte connects to other libraries. Over the course of about 2 weeks, I successfully mashed a bunch of things together. This is some of my experiences.

### Update 2023-12-18

This blog post was updated to be more sensible. I also deployed everything on AWS using SST instead of syncing to an S3 bucket like a neanderthal.

## Svelte

Svelte was extremely easy to pick up. Components can be dynamic component and styled all from a single file. Considering my experience so far at this point was with Django and HTMX, this probably isn't surprising.

## Typescript

I can understand why Typescript would be a requirement for large and complex projects. When everything has a clear type, it is easier to understand how you should use different functions and objects. However, there is an annoying learning curve. I found many of the type errors provided by VSCode confusing.

### Tailwindcss

I took me a while to understand Tailwind, probably because I didn't understand CSS.  I was also comparing it to Bootstrap which provided complete components with classes, not just styles. Now I think Tailwind is invaluable due to the customization and flexibility. I still don't understand CSS.

The HTML class names are unwieldy, but using classes allowed for better uniformity between components without  global styles.

Tailwind also has a great plugin for typography.

### Ace Editor

Ace is a web text/code editor with support for writing markdown. Although I could have used the an Svelte Ace component package, I decided to implement the component myself for practice. Svelte doesn't have a large package ecosystem, so it is important learn how to create custom components for existing JS package.

The documentation for Ace was frustratingly sparse. I should have just used a better  markdown editor.
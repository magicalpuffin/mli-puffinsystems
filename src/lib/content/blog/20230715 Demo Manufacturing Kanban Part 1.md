---
id: 20230715
slug: demo-manufacturing-kanban-1
title: Demo Manufacturing Kanban Part 1
description: Blog post about creating a manufacturing kanban using Django, HTMX, and Bootstrap.
createdDate: 2023-07-15
updatedDate: 2024-03-27
---
![demo mfg kanban screenshot](/static/content/images/blog/20230715_mfg_kanban.png)
*Screenshot of some cards in Demo Manufacturing Kanban*
## Overview

**2024-03-28 UPDATE:** This post describes the original Django version of this project. See [Demo Manufacturing Kanban Part 2](/blog/demo-manufacturing-kanban-2) 

I tried to create a "kanban" or "andon" board as quickly as possible. The end result was a Django and Htmx deployed to AWS Lambda using Zappa. The database was an sqlite database on AWS S3.

### Links
- https://github.com/magicalpuffin/Demo-Manufacturing-Kanban/tree/0.1.1-django

## Key Libraries and Packages

### Django

Django is an easy to use, batteries included python web framework. For CRUD apps with an ORM, Django is probably the fastest option. However, anything complicated on the frontend will quickly become unmaintainable.

Django isn't designed for interacting with JavaScript. Instead, it is clunky JavaScript in HTML using Jinja templates and  Htmx.

However, everything on the backend is handled fairly well by Django. This is likely why so many people recommend Django Rest Framework over just Django.

### Bootstrap

Bootstrap is a CSS component library which defines what all the components look like and how they should behave.

This makes it fast for development but inflexible. Everything always looks like a Bootstrap component. This is still probably the fastest way to get good looking CSS on a Django app.

### Htmx

Htmx basically lets you do JS things such as HTTP requests in html. This is great for Django because you are able to request different endpoints and swap out sections of html using `hx-swap` and `hx-target`.

This allowed me to make it feel like this was a single page app without a lot of JS. Although, every request still required the server to do the rendering.

### SortableJS

SortableJS was the JS framework used to allow drag, drop and reordering of cards. I am actually kind of surprised this worked as well as it did.

Due to how Django works, this required some weird JS on the base template. After placing each card down, it Htmx is used to save the order of items to the database.

### Zappa

Zappa makes it possible to deploying Django apps serverless on AWS. It does still seem a bit clunky with most tutorials being incomplete. 

The best tutorial I found was:
- https://romandc.com/zappa-django-guide/

Zappa also does not fit in well within a stack. Other resources (ex. RDS and CloudFront) will need to be configured separately. Ideally you would be able to deploy the Django Lambda using AWS CDK.

### Django S3 Sqlite

Django automatically uses an sqlite database, however, when deployed on AWS Lambda, sqlite can't be used due to the dependency missing in the Lambda environment.

An interesting work around is the package `django-s3-sqlite`. This allows you to access an sqlite databae on S3. For a database which will rarely be used, this is a much better alternative than spinning up an RDS instance. I guess this counts as a serverless database.

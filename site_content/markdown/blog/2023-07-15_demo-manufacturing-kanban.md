---
date_created: 2023-07-15
date_updated: 2023-11-04
---
![demo mfg kanban screenshot](/static/content/images/blog/20230715_mfg_kanban.png)

## Overview

This post will describe the original Django version of this project. I plan on remaking this project using Svelte and Django Rest Framework.

The very first draft of this project was created in a few hours as quickly as possible. The idea was to create a custom kanban system similar to what is available with Jira and Smartsheets.

Frontend and backend was created using Django and Htmx. This was deployed to AWS Lambda using Zappa. The database is an sqlite database on AWS S3.

## Objective

This project was created to test out how quickly Django could be used to create a basic web app.

Looking back at my commits, this project was started on 2023-04-19 and completed on 2023-04-22. This project was rushed.

## Key Libraries and Packages

### Django

Django is an extremely fast batteries included python web framework. If you are building a CRUD app and want a ORM, Django is probably the fastest option. However, if you plan building anything complicated for the frontend Django will become unmaintainable very quickly.

Most other web frameworks (ex. Svelte) use JS and a component based system for the frontend. This allows them to be interactive and flexible. For Django and its Jinja templates to be comparable, janky JS or Htmx is required.

However, everything on the backend is handled fairly well by Django. Perhaps that's why people care more about Django Rest Framework than Django.

### Bootstrap

Bootstrap is a CSS component library. Instead of having the user define all of the details and configure their own components such as with Tailwind, Bootstrap, just defines what all the components look like.

This makes it fast but inflexible. Everything always looks like a Bootstrap component. This is still probably the fastest way to get good looking CSS on a Django app, which was why I used it here.

### Htmx

Htmx basically lets you do JS things such as HTTP requests in html. This is great for Django because you are able to request different endpoints and swap out sections of html using `hx-swap` and `hx-target`.

This allowed me to make it feel like this was a single page app without a lot of JS. Although, every requrest still required the server to do the rendering.

### Sortable JS

Sortable was the JS framework used to allow drag, drop and reordering of cards. I am actually kind of surprised this worked as well as it did.

Due to how Django works, this required some weird JS on the base template. After placing each card down, it Htmx is used to save the order of items to the database.

### Zappa

Zappa makes it possible to deploying Django apps serverless on AWS. It does still seem a bit janky with most tutorials being incomplete. The best tutorial I found was:

https://romandc.com/zappa-django-guide/

Zappa also does not fit in well within a stack. Other resources (ex. RDS and CloudFront) will need to be configured separately. Ideally you would be able to deploy the Django Lambda using AWS CDK.

### Django S3 Sqlite

Django automatically uses an sqlite database, however, when deployed on AWS Lambda, sqlite can't be used due to the dependency missing in the Lambda environment.

An interesting work around is the package `django-s3-sqlite`. This allows you to access an sqlite databae on S3. For a database which will rarely be used, this is a much better alternative than spinning up an RDS instance. I guess this counts as a serverless database.

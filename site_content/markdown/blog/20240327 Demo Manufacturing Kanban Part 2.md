---
post_id: 20240327
title: Demo Manufacturing Kanban Part 2
description: Remaking my manufacturing kanban using SvelteKit, Drizzle, and SST
date_created: 2024-03-27
date_updated: 2024-03-27
---
![screenshot of manufacturing kanban](/static/content/images/blog/20240327_mfg_kanban.png)
*Screenshot of some cards in SvelteKit Demo Manufacturing Kanban*

## Overview

The redevelopment actually was in multiple stages. There was an unreleased SvelteKit Django Rest Framework version which was never actually deployed

This isn't really comparable considering how much more advanced this site is compared to the Django version.

Although, considering how fast I was able to create the Django site, it is pretty impressive how fast you can make stuff.

There is a system for creating pop up notifications which is pretty nice

Continuing to use modals even though it probably makes more sense to just use new pages

You can visit the site but the database is probably auto paused so you would need to referesh a few times

## SvelteKit

SvelteKit continues to be a great experience. 

The greatest discovery while using Svelte were Stores. It is possible to create custom stores, allowing you to directly include business logic. You could keep on
## DaisyUI

DaisyUI is a component framework based on TailwindCSS. This made it faster to create components while still giving customizability. Everything is still just CSS which keeps things simple.

## SortableJS

SortableJS was still the best JavaScript library I could find for creating the sorting effect. I was also already familiar with it.

## tRPC

During development, I found it annoying how type safety was missing for HTTP fetch requests. SvelteKit provides some basic type safety with data from page loads, however, I couldn't find anything for clientside requests or requests to a backend. 

Fortunately, tRPC exists. provides a TypeScript framework for RPC.

tRPC makes things so much easier, however, it does make it more difficult to expose a REST API. However, the tradeoff is worth it, expecially if you are the only one accessing the API
## DrizzleORM

DrizzleORM was a great experience. Missing proper error handling. It was disappointing that there it wasn't possible to have standard error types for basic issues such as duplicate items or delete cascades 
## SST

SST is used for serverless deployments to AWS. Provides a better interface than AWS CDK. After spending way too much time messing with intergrating with other AWS CDK resources, it ended up being much easier to just use resources as intended.

The main custom resource was a bastion host to connect to the AWS RDS instance locally

Many of the issues faced when using SST were likely AWS CDK related. Deployments were slow, there seems to be slightly different behavior when using Live Lambda compared to using deployed Lambdas

## AWS

The database used was a Auora Serverless v1 instance deployed using SST. The auto pause feature allows the database to was extremely useful considering this is demo project. 

It is quite annoying going from auto pause to actually running. The time it takes is enough to exceed 10 sec which is was the lambda time out. Also whenever people visit, they get an error because the server is off.


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

I recreated my Demo Manufacturing Kanban project using all the knowledge I have gained since my original attempt in [Demo Manufacturing Kanban Part 1](/blog/20230715/). It is still a basic "kanban" or "andon" board, however, the entire stack has been improved. 

The site is now a SvelteKit frontend styled with DaisyUI, a tRPC backend querying the database with DrizzleORM and deployed on AWS using SST. Within this post, I'll describe my experience with the different libraries and packages used.

Overall, I recommend the stack I used for this project.

### Links
- https://demo.kanban.puffinsystems.com/
	- Due to AWS Aurora Serverless v1 auto pause, it will take a few minutes and multiple refreshes before the site loads. It would be a waste of money to keep this database always active. 
- https://github.com/magicalpuffin/Demo-Manufacturing-Kanban

## SvelteKit

SvelteKit continues to be a great experience, everything just worked. I was most impressed by the `svelte/store` module. Using custom stores, it is possible to include business logic in the store. This allows you to share state and methods across components.

Here is a snippet of the `locationStore`:
```ts
// packages/frontend/src/lib/stores/locationStore.ts
// ...

export const locationStore = createLocationStore();

function createLocationStore() {
	const { subscribe, set, update } = writable<locationSelectType[]>([]);

	async function addLocation(newLocation: locationInsertType) {
		try {
			const data = await trpc.createLocation.mutate(newLocation);
			update((n) => [...n, data[0]]);
			toast.push(`Created location ${data[0].name}`);
		} catch (error) {
			if (isTRPCClientError(error)) {
				toast.push(`${error.message}`);
			} else {
				toast.push('Failed to create location');
			}
		}
	}
	
	// Additional methods here ...

	return {
		subscribe,
		set,
		reset: () => set([]),
		add: addLocation,
		update: updateLocation,
		reorder,
		remove
	};
}

```

In this example, I extended the standard `writeable` store to include a method called `addLocation`. This method creates the object in the database, adds the object to the store, and creates a toast notification. Instead of managing methods across different components and syncing database updates with state changes, it can all happen through a store.

- https://kit.svelte.dev/docs/introduction
- https://svelte.dev/docs/svelte-store

## DaisyUI

DaisyUI is a component framework based on TailwindCSS classes and was much faster than styling components from scratch. I wasn't trying to create anything stylistically unique or innovative so the existing components from DaisyUI were more than enough. Not to mention that most custom components I created looked worse than components from DaisyUI. DaisyUI is based on TailwindCSS, which is just CSS, keeping things simple.

- https://daisyui.com/

## SortableJS

SortableJS was still the best JavaScript library I could find for creating the sorting effect. Svelte integrated nicely with SortableJS. It is possible to initialize SortableJS during `onMount` and update stores during the provided sorting events.

- https://github.com/SortableJS/Sortable

## tRPC

During development, I found the type safety provided by TypeScript extremely useful. Simply knowing what type something is goes a long way towards figuring out what is going on. Unfortunately, the moment an HTTP requests is involved, you revert back to throwing objects around blindly. 

It is worth noting that SvelteKit provides basic type safety when passing data using page load. However, this isn't available for client side requests or if your backend is separate. 

tRPC was the perfect solution for this problem and made creating backend API requests much easier. tRPC provides a TypeScript framework for RPC (Remote Procedure Call) and allows you to make HTTP requests like you are calling a function. I was using an API Gateway backend which was supported with a tRPC adapter. 

However, there were a few minor downsides, primarily because tRPC isn't the same as an REST API. It was more difficult to interact with and debug in browser, for example, it isn't possible to just send a GET request with query parameters.

- https://trpc.io/

## DrizzleORM

DrizzleORM felt like the best and most fully featured TypeScript ORM available.

When using DrizzleORM, the database schema is directly written in TypeScript and can be imported to other files like any other object in TypeScript. This is a much better development experience than PrismaORM (another popular TypeScript ORM), which uses its own custom syntax for database schema. 

My main disappointment with DrizzleORM was the lackluster error handling. The database error is returned, however, there isn't much support available for classifying common errors such as duplicate item or delete cascade error.

- https://orm.drizzle.team/docs/overview
- https://github.com/drizzle-team/drizzle-orm/issues/376

## SST

SST provides a framework for deploying serverless applications using AWS CDK in a much more user friendly library. For this project, it provided easy to use constructs for creating the Lambda, API Gateway, and RDS instances. The provided `SvelteKitSite` construct also made it easy to package the SvelteKit frontend as an AWS Lambda. 

Important AWS Resources:
- Lambda
	- For tRPC backend
	- For SvelteKit site
- API Gateway
	- For tRPC backend
- RDS Aurora Serverless v1
	- PostgreSQL database
- EC2
	- For bastion host
- CloudFront

A nice feature of SST is how AWS CDK resources can be created within a stack. I used this to create a bastion host for connecting to the AWS RDS instance locally.

There were a few downsides with using SST, however, I think many of them are AWS CDK related. Deployments are surprisingly slow and can't seem to be parallelized. There was slightly different behavior between using Live Lambda, developing locally and deployed instances. For example, queries were much slower in Live Lambda than when deployed, while auto pause felt slower when deployed than in Live Lambda. 

- https://sst.dev/

## AWS

AWS isn't very user friendly but it is what it is I guess.

The database used was an Aurora Serverless v1 instance deployed using SST. The database is configured to auto pause after 5 minutes, making it much cheaper considering  nobody uses my site. Unfortunately, it takes almost a minute to resume from auto pause, exceeding the 10 sec Lambda time out limit. Annoyingly, this means whenever people visit the site, they get an error until the database finishes resuming.
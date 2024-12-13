---
id: 20240327
slug: demo-manufacturing-kanban-2
title: Demo Manufacturing Kanban Part 2
description: How I created a manufacturing kanban site. This time using SvelteKit, DrizzleORM, and SST.
createdDate: 2024-03-27
updatedDate: 2024-03-30
---
![screenshot of manufacturing kanban](/static/content/images/blog/20240327/20240327_mfg_kanban.png)
*Screenshot of some cards in SvelteKit Demo Manufacturing Kanban*

## Overview

Previously, I created a basic kanban board using Django and Htmx in [Demo Manufacturing Kanban Part 1](/blog/demo-manufacturing-kanban-1). Since then, I have learned a lot about web development and cloud infrastructure, so I decided to recreate everything using a better stack.

- [**SvelteKit:**](https://kit.svelte.dev/) JavaScript web framework for rendering Svelte components. Used as frontend.
- [**DaisyUI:**](https://daisyui.com/) Component framework based on TailwindCSS. Used to style components.
- [**SortableJS**:](https://github.com/SortableJS/Sortable) JavaScript library for creating the drag and drop effect for cards.
- [**tRPC**:](https://trpc.io/) TypeScript implementation of RPC. Allows making backend requests through type safe functions.
- [**DrizzleORM:**](https://orm.drizzle.team/) TypeScript ORM used for creating queries, schema, and running database migrations. 
- [**SST:** ](https://sst.dev/)Framework for deploying and developing serverless infrastructure using AWS CDK.
- **AWS:** Cloud infrastructure provider. Website is deployed to AWS.

Overall, I recommend the stack I used for this project. The rest of this post will describe my experience with each library or technology I used in more detail.

### Links
- **Deployed Site:** https://demo.kanban.puffinsystems.com/
	- Due to AWS Aurora Serverless v1 auto pause, it will take a few minutes and multiple refreshes before the site loads. I'm not going to pay to keep the database always active.
- **GitHub Repository:** https://github.com/magicalpuffin/Demo-Manufacturing-Kanban

## SvelteKit

SvelteKit continues to be a great experience, everything just worked. During development, I was most impressed by the `svelte/store` module. This module allows you to manage client side state across different components. By creating custom stores, you can also include client side methods for business logic such as API requests.

As an example, here is a snippet of the `locationStore` I created:
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

I extended the standard `writeable` store to include a method called `addLocation`. When this method is called, it creates a new location object in the database, updates the state in all components, and creates a toast popup. This provided a single reusable method that is directly part of the state, instead of having methods and state spread across components.

- https://svelte.dev/docs/svelte-store

## DaisyUI

Customizing DaisyUI components was much faster than styling components from scratch, even with TailwindCSS. In this project, I wasn't trying to create anything stylistically unique or innovative so the existing components from DaisyUI were more than enough. Not to mention that most custom components I created looked worse. DaisyUI is based on TailwindCSS, which is just CSS, keeping things simple.

## SortableJS

![example of drag and drop](/static/content/images/blog/20240327/20240327_sortablejs_example.gif)
*Example of drag and dropping cards with SortableJS*

SortableJS was still the best JavaScript library I could find for creating the drag and drop effect. Svelte integrated nicely with SortableJS, allowing you to initialize SortableJS during `onMount` and include whatever JavaScript you need the provided sorting events.

## tRPC

During development, I found the type safety provided by TypeScript extremely useful. Simply knowing what type something is goes a long way towards figuring out what is going on. Unfortunately, the moment an HTTP requests is involved, you revert back to throwing objects around blindly. 

![trpc auto complete](/static/content/images/blog/20240327/20240327_trpc_autocomplete.png)
*tRPC autocomplete of API requests available*

tRPC was the perfect solution for this problem and made creating backend API requests much easier. tRPC provides a TypeScript framework for RPC (Remote Procedure Call) and allows you to make HTTP requests like you are calling a function. I was using an API Gateway backend which was supported with a tRPC adapter. 

The tRPC makes the most sense when when you control the entire stack. tRPC uses HTTP requests differently than an REST API which can be annoying. For example, it isn't possible to send a GET request with query parameters just using the URL. To properly debug, you would need to import the tRPC router types and make the request from your frontend.

## DrizzleORM

DrizzleORM feels like the only truly TypeScript ORM available at the moment. Some smaller ORMs such as Kysely are missing proper migration and introspection generation support. A more popular ORM such PrismaORM uses its own syntax in a `.prisma` file for database schema.

When using DrizzleORM, the database schema is directly written in TypeScript, providing type safety and allowing for straight forward importing into other files. DrizzleORM also provided automatic migration generation from schema.

```ts
// packages/core/src/schema.ts
// ...
export const location = pgTable("location", {
  id: smallserial("id").primaryKey(),
  name: varchar("name", { length: 256 }).notNull(),
  sequence: smallint("sequence").default(0).notNull(),
});

//...
```

The only thing I found missing was the lack of error handling. Database errors are returned, however, there isn't much support available for classifying common errors. It would be great if you could catch duplicate item or delete cascade errors.

- https://github.com/drizzle-team/drizzle-orm/issues/376

## SST

SST allows deploying serverless applications through AWS CDK in a much more user friendly way. The SST constructs for Lambda and API Gateway were much easier to interact with than their AWS CDK variants. SST also provided a `SvelteKitSite` construct which took care of packaging the SvelteKit frontend as an AWS Lambda. 

![drawing of aws resources](/static/content/images/blog/20240327/20240327_aws_resource_drawing.png)
*AWS resources used. I forgot to draw the bastion host.*

- **SvelteKit Frontend:** Lambda, CloudFront
- **tRPC Backend:** Lambda, API Gateway
- **Database:** RDS, PostgreSQL, Aurora Serverless v1
- **Bastion Host:** EC2, t4g.nano


A nice feature of SST is how AWS CDK resources can be created within a stack. I used this to create a bastion host for connecting to the AWS RDS instance locally.

Most of the issues with SST are likely AWS CDK related. Deployments are surprisingly slow and can't seem to be parallelized. There was different behavior when running locally, using Live Lambda, and when fully deployed. For example, queries were much slower in Live Lambda than when deployed, while auto pause felt slower when deployed than in Live Lambda. 

## AWS

AWS has many annoyances which are basically features. For this project, I was using an AWS RDS Aurora Serverless v1 instance. The database is configured to auto pause after 5 minutes, making it much cheaper because nobody actually uses my site. Unfortunately, it takes almost a minute to resume from auto pause, exceeding the 10 sec Lambda time out limit. Annoyingly, this means whenever people visit the site, they get an error until the database finishes resuming. I couldn't find much information about how long resuming from auto pause is supposed to take and what affects it (ex. I don't think increasing ACU matters). Also auto pause seems to be missing from Aurora Serverless v2. 

Also, you can't create Aurora Serverless v1 instances in console even though you can in AWS CDK, the docs don't say anything about this. Also, in AWS CDK, `rds.ServerlessCluster` seems to only create serverless v1 instances, but the docs don't say anything about serverless v1 or v2. Also, Data API was added to Aurora Serverless v2 but not in all regions. Many of these are minor or have reasonable explanations but AWS has a lot of these annoyances.

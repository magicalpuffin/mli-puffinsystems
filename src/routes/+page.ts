import type { CardContent } from "$lib/types/card";
import type { PageLoad } from "./$types.js";

export const load = (async ({ fetch }) => {
	//const URL_CARDCONTENT = "/static/content/data/cardContentList.json";
	//
	//const cardContentList: CardContent[] = await (
	//  await fetch(URL_CARDCONTENT)
	//).json();

	const cardContentList = [];

	const demoCardList: CardContent[] = cardContentList.filter((card) => {
		return card.category === "demo";
	});
	const notebookCardList: CardContent[] = cardContentList.filter((card) => {
		return card.category === "notebook";
	});

	return { demoCardList, notebookCardList };
}) satisfies PageLoad;
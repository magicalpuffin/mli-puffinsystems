import type { PageLoad } from "./$types";
import type { CardContent } from "$lib/types/card";

export const load = (async ({ fetch }) => {
  let URL_cardContentList = "/data/cardContentList.json";
  let cardContentList: CardContent[] = await (
    await fetch(URL_cardContentList)
  ).json();

  let demoCardList: CardContent[] = cardContentList.filter((card) => {
    return card.category === "demo";
  });
  let notebookCardList: CardContent[] = cardContentList.filter((card) => {
    return card.category === "notebook";
  });

  return { demoCardList, notebookCardList };
}) satisfies PageLoad;

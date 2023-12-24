import type { PageLoad } from "./$types";
import type { CardContent } from "$lib/types/card";

export const load = (async ({ fetch }) => {
  const URL_CARDCONTENT = "/data/cardContentList.json";

  const cardContentList: CardContent[] = await (
    await fetch(URL_CARDCONTENT)
  ).json();

  const demoCardList: CardContent[] = cardContentList.filter((card) => {
    return card.category === "demo";
  });
  const notebookCardList: CardContent[] = cardContentList.filter((card) => {
    return card.category === "notebook";
  });

  return { demoCardList, notebookCardList };
}) satisfies PageLoad;

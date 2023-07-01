import type { PageLoad } from "./$types";
import type { CardType } from "$lib/types/card";

import { fetchMarkdown } from "$lib/utils/fetchMarkdown";
import { demoCards } from "$lib/data/cardData";

export const load = (async ({ fetch }) => {
  let cards: CardType[] = await Promise.all(
    demoCards.map(async (card) => {
      return {
        title: card.title,
        body_html: await fetchMarkdown(card.body_url, fetch),
        img_src: card.img_src,
        github_link: card.github_link,
        detail_link: card.detail_link,
      };
    })
  );

  return { cards };
}) satisfies PageLoad;

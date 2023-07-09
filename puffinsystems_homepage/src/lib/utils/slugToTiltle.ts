export function slugToTitle(slug: string) {
  let words = slug.split("-");

  let titleWords = words.map(function (word) {
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
  });

  return titleWords.join(" ");
}

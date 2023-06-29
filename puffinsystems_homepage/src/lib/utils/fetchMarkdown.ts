export async function fetchMarkdown(url: string) {
  let response_text = "";

  try {
    const response = await fetch(url);

    if (response.ok) {
      response_text = await response.text();
    }
  } catch (error) {
    console.log(error);
  }

  return response_text;
}

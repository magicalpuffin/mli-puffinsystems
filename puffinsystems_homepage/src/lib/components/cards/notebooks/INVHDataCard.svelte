<script lang="ts">
  import CardTemplate from "$lib/components/cardTemplates/ProjectCard.svelte";

  let title = "INVH Data";
  let detail_link = "";
  let github_link =
    "https://github.com/magicalpuffin/Py-Notebooks/tree/main/invh_house_rental_data";
  let img_src = "/images/card_image/invh_data.png";
  let img_alt = "";
</script>

<CardTemplate {title} {detail_link} {github_link} {img_src} {img_alt}>
  <p>
    Developed a model using machine learning to predict market_rent given
    factors such as beds, bath, sqrft and location. Data was collected from a
    webscrapper.
  </p>
  <p>jupyter, pandas, plotly, sklearn</p>
  <a href="/notebooks/market_rent_prediciton_preliminary.html"
    >Market Rent Prediction Preliminary</a
  >
</CardTemplate>

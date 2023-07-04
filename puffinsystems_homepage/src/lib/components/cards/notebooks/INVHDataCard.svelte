<script lang="ts">
  import CardTemplate from "$lib/components/CardTemplate.svelte";

  let title = "INVH Data";
  let detail_link = "";
  let github_link =
    "https://github.com/magicalpuffin/Py-Notebooks/tree/main/invh_house_rental_data";
</script>

<CardTemplate {title} {detail_link} {github_link}>
  <div class="flex h-full flex-col overflow-hidden md:flex-row">
    <img
      class="aspect-square h-full max-h-48 object-cover md:h-full md:max-h-none"
      src={"/images/card_image/invh_data.png"}
      alt=""
    />
    <article class="prose mx-2 my-2">
      <p>
        Developed a model using machine learning to predict market_rent given
        factors such as beds, bath, sqrft and location. Data was collected from
        a webscrapper.
      </p>
      <p>jupyter, pandas, plotly, sklearn</p>
      <a href="/notebooks/market_rent_prediciton_preliminary.html"
        >Market Rent Prediction Preliminary</a
      >
    </article>
  </div>
</CardTemplate>

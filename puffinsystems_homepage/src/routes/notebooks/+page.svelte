<script>
    import Card from "$lib/Card.svelte";
</script>

<h1>Notebooks</h1>
<p>Here are some random jupyter notebook projects.</p>
<a href="https://github.com/magicalpuffin/Py-Notebooks">https://github.com/magicalpuffin/Py-Notebooks</a>

<hr>

<Card
img_src= "/card_images/invh_house_rental_data.png"
card_title= "INVH Housing Data Analysis ">
    <p>Invitation Homes (INVH) rents out single family homes. Data was webscraped. ML model with sklearn to predict market_rent</p>
    <p>jupyter, pandas, plotly, sklearn</p>
    <ul style="list-style-type: none;">                
        <li><a href="/notebooks/market_rent_prediciton_preliminary.html">Market Rent Prediction Preliminary</a></li>
    </ul>
</Card>

<Card
img_src= "/card_images/tinywars_ranked_statistics.png"
card_title= "Tiny Wars Ranked Statistics">
    <p>Tiny Wars is a small online game with a ranked ladder. Cleaned the data to create various data visualizations about ranked matches.</p>
    <p>jupyter, pandas, plotly</p>
    <ul style="list-style-type: none;">                
        <li><a href="/notebooks/co_matchup_matrix.html">Matchup Matrix</a></li>
        <li><a href="/notebooks/co_stats_all.html">CO Statistics</a></li>
        <li><a href="/notebooks/map_winrates.html">Map Winrates</a></li>
        <li><a href="/notebooks/user_elo.html">User ELO</a></li>
    </ul>
</Card>

<Card
img_src= "/card_images/lp_tube_cutting.png"
card_title= "Linear Programming Tube Cutting">
    <p>Solves a basic tube cutting linear programming problem. Optimizes the parts cut on stock material to minimize waste.</p>
    <p>jupyter, pulp, pandas</p>
    <ul style="list-style-type: none;">                
        <li><a href="https://github.com/magicalpuffin/Py-Notebooks/blob/main/lp_tube_cutting/lp_tube_cutting.ipynb">Linear Programming Tube Cutting</a></li>
    </ul>
</Card>
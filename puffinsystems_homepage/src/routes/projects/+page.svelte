<script>
    import Card from "$lib/Card.svelte";
</script>

<h1>Projects</h1>
<p>Various projects, usually cleaner and more </p>

<Card
img_src= "/card_images/spending_tracker.png"
card_title= "Spending Tracker">
    <p>Basic spending tracker. Allows users to create and categorize transactions. Displays a basic figure of transactions over time.</p>
    <p>django, postgres, plotly, lambda</p>
    <ul style="list-style-type: none;">
        <li><a href="https://spendingtracker.puffinsystems.com">https://spendingtracker.puffinsystems.com</a></li>
        <li><a href="https://github.com/magicalpuffin/Spending-Tracker">https://github.com/magicalpuffin/Spending-Tracker</a></li>
    </ul>
</Card>
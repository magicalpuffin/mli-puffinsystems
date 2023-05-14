<script>
  import Card from "$lib/Card.svelte";
</script>

<h1>Demos</h1>
<p>
  Various projects used to demonstrate a concept. Sometimes making a demo faster
  and more effective than writing the idea down
</p>

<hr />

<Card
  img_src="/card_images/demo_manufacturing_kanban.png"
  card_title="Demo Manufacturing Kanban"
  github_link="https://github.com/magicalpuffin/Demo-Manufacturing-Kanban"
>
  <p>
    Basic manufacturing kanban board in a single page app. Create parts,
    locations and workorders. Drag and drop to move workorders around.
  </p>
  <p>django, sqlite3, sortable, lambda</p>
  <ul style="list-style-type: none;">
    <li>
      <a href="https://demo.puffinsystems.com/manufacturingkanban/"
        >https://demo.puffinsystems.com/manufacturingkanban/</a
      >
    </li>
  </ul>
</Card>

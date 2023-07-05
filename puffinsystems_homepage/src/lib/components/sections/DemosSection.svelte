<script lang="ts">
  import MDNotebookCard from "$lib/components/cards/demos/MDNotebookCard.svelte";
  import MfgKanbanCard from "$lib/components/cards/demos/MFGKanbanCard.svelte";
</script>

<h2 class="mx-2 my-2 text-3xl font-bold tracking-widest" id="demos">Demos</h2>
<div class="flex snap-x snap-mandatory flex-row gap-16 overflow-x-scroll">
  <div class="w-full shrink-0 snap-center">
    <MDNotebookCard />
  </div>
  <div class="w-full shrink-0 snap-center">
    <MfgKanbanCard />
  </div>
</div>

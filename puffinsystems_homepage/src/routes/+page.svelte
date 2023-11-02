<script lang="ts">
  import { onMount } from "svelte";
  import { fade } from "svelte/transition";

  import AboutMe from "$lib/components/cards/AboutMe.svelte";

  import DemosSection from "$lib/components/sections/DemosSection.svelte";
  import NotebooksSection from "$lib/components/sections/NotebooksSection.svelte";

  // let mountComplete = false;
  // onMount(() => {
  //   mountComplete = true;
  // });
</script>

<div in:fade class="flex snap-y flex-col gap-4">
  <div class="">
    <h2 class="mx-2 my-2 text-3xl font-bold tracking-widest" id="aboutme">
      About Me
    </h2>
    <AboutMe />
  </div>
  <div class="">
    <DemosSection />
  </div>
  <div class="">
    <NotebooksSection />
  </div>
</div>

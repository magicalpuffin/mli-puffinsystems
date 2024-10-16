<script lang="ts">
  import AboutMe from "$lib/components/AboutMe.svelte";
  import CardCarousel from "$lib/components/cardCarousel/CardCarousel.svelte";
	import ProjectCard from "$lib/components/cardCarousel/ProjectCard.svelte";
  import Header from "$lib/components/Header.svelte";


</script>

<svelte:head
  ><title>Michael Li</title><meta
    name="description"
    content="Michael Li. Personal website showcasing project and blog. "
  /></svelte:head
>

<div class="flex flex-col gap-2">
  <div>
    <Header text="About Me" id="aboutme" />
    <AboutMe />
  </div>
  <div>
    <Header text="Demos" id="demos" />
    <CardCarousel>
      <div id="demo-carousel-1" class="carousel-item w-full">
        <ProjectCard title="a" imgSrc="">
        This is the first item

        </ProjectCard>

      </div>

    </CardCarousel>
  </div>
  <!--
  <div>
    <Header text="Notebooks" id="notebooks" />
    <CardCarousel cardContentList={notebookCardList} carouselName="notebook" />
  </div>
  -->
</div>

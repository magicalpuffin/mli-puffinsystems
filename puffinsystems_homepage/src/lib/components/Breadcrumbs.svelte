<script lang="ts">
  import { page } from "$app/stores";

  // Page store from: https://www.reddit.com/r/sveltejs/comments/qx95ge/

  type Breadcrumb = {
    text: string;
    href: string;
  };

  function capitalizeFirstLetter(string: string) {
    // Function from: https://stackoverflow.com/questions/1026069/
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  function getBreadcrumbsPath(pathname: string): Breadcrumb[] {
    let pathSegments = pathname.split("/").filter(Boolean);
    let Breadcrumb = pathSegments.map((segment, index) => ({
      text: capitalizeFirstLetter(segment),
      href: "/" + pathSegments.slice(0, index + 1).join("/"),
    }));

    return Breadcrumb;
  }

  let Breadcrumbs: Breadcrumb[] = getBreadcrumbsPath($page.url.pathname);
  // console.log(Breadcrumbs);
</script>

<div class="breadcrumbs text-sm">
  <ul>
    <li><a href="/">Home</a></li>
    {#each Breadcrumbs as Breadcrumb (Breadcrumb.href)}
      <li><a href={Breadcrumb.href}>{Breadcrumb.text}</a></li>
    {/each}
  </ul>
</div>

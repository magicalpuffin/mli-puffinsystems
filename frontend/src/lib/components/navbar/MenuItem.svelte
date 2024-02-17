<script lang="ts">
  export let href: string;
</script>

<li><a class="hover:text-secondary" {href}><slot /></a></li>

<script>
  import { AppBar } from "@skeletonlabs/skeleton";
  import { onMount } from "svelte";
  onMount(() => {
    const domain = window.location.hostname;
    const $ = (selector) => document.querySelector(selector);
    const aHome = $("#aHome");
    aHome.href = `http://${domain}/`;
  });
</script>

<AppBar class="rounded-3xl">
  <svelte:fragment slot="lead">
    <a id="aHome" class="flex items-center" href="/"
      ><img
        loading="lazy"
        src="/logo.png"
        alt="PerformSquad Logo"
        class="aspect-auto h-10 m-2"
      />
      <strong class="text-xl uppercase">PerformSquad</strong></a
    >
  </svelte:fragment>
  <svelte:fragment slot="trail">
    <a class="btn btn-sm variant-ghost-surface" href="/afiliacion">
      Afiliarse
    </a>
    <a class="btn btn-sm variant-ghost-surface" href="/login"> Login </a>
  </svelte:fragment>
</AppBar>

<script>
  import { AppBar } from "@skeletonlabs/skeleton";
  import { Drawer, drawerStore } from "@skeletonlabs/skeleton";
</script>

<AppBar class="rounded-3xl">
  <svelte:fragment slot="lead">
    <a href="/" class="flex items-center"
      ><img
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

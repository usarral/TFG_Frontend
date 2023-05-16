<script>
  import { onMount } from "svelte";
  import { Toast, toastStore } from "@skeletonlabs/skeleton";
  // get the last param from the
  const domain = window.location.hostname;
  const id = window.location.href.split("/").pop();
  async function queryDelete(id) {
    // query the delete
    const options = { method: "DELETE" };
    // fetch the delete and save the response in a variable
    const response = await fetch(`http://${domain}/arbitro/${id}`, options);
    return response;
  }
</script>

<Toast />

<div class="flex flex-col gap-8">
  <h1 class="text-4xl text-center py-8">Borrar Arbitros</h1>
  <h2 class="text-2xl text-center py-8">¿Seguro que quieres borrarlo?</h2>
  <div class="flex justify-center">
    <button class="btn btn-primary" on:click={queryDelete(id)}>Borrar</button>
    <button class="btn btn-primary" on:click={toastStore.add}>Cancelar</button>
  </div>
</div>

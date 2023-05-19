<script>
  import { onMount } from "svelte";
  import { Toast } from "@skeletonlabs/skeleton";
  onMount(async () => {
    const $ = (selector) => document.querySelector(selector);
    const deleteButton = $("#delete");
    deleteButton.addEventListener("click", async () => {
      const domain = window.location.hostname;
      const id = window.location.pathname.split("/").pop();
      try {
        const response = await fetch(`http://${domain}:3000/club/${id}`, {
          method: "DELETE",
        });
        if (response.ok) {
          alert("Club borrado correctamente");
          setTimeout(() => {
            window.location.href = "/federacion/clubs";
          }, 1000);
        } else {
          console.error(
            "Error al obtener los datos de la API:",
            response.status
          );
          console.log(response.body);
        }
      } catch (error) {
        console.error("Error al obtener los datos de la API:", error);
      }
    });
  });
</script>

<Toast />

<div class="flex flex-col gap-8">
  <h1 class="text-4xl text-center py-8">Borrar clubs</h1>
  <h2 class="text-2xl text-center py-8">¿Seguro que quieres borrarlo?</h2>
  <div class="flex justify-center">
    <button class="btn btn-primary" id="delete">Borrar</button>
    <button
      class="btn btn-primary"
      onclick="window.location.href = '/federacion/categorias'">Cancelar</button
    >
  </div>
</div>

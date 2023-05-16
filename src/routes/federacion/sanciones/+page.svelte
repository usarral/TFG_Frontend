<script>
  //Virutas eh eh
  import { Table, tableMapperValues } from "@skeletonlabs/skeleton";
  import { onMount } from "svelte";

  let data = []; // Variable para almacenar los datos de la API

  onMount(async () => {
    // vecomo
    // get domain from url
    const domain = window.location.hostname;
    try {
      const response = await fetch(`http://${domain}:3000/sancion`); // Reemplaza "URL_DE_LA_API" con la URL real de tu API
      if (response.ok) {
        data = await response.json(); // Almacenar los datos recuperados en la variable data
        //mostrar en la tabla con clase table los datos de la variable data

        const $ = (selector) => document.querySelector(selector);
        const table = $(".table");
        data.forEach((sancion) => {
          table.innerHTML += `<tr>
                    <td>${
                      sancion.apellido2 != null
                        ? sancion.apellido +
                          " " +
                          sancion.apellido2 +
                          ", " +
                          sancion.nombre
                        : sancion.apellido1 + ", " + sancion.nombre
                    }</td>
                    <td>${
                      //calcular edad
                      new Date().getFullYear() -
                      new Date(sancion.fechaNacimiento).getFullYear()
                    }</td>
                    <td>${sancion.fec_sancion}</td>
                    <td>${sancion.destinatario}</td>
                    <td>${sancion.tipo_sancion}</td> 
                    <td>${sancion.pabellon}</td>  
                    <td style="display: flex;flex-direction: column;">
                        <a href="/federacion/categorias/editar/${
                          sancion.id
                        }" class="btn btn-sm variant-primary">Editar</a>
                        <a href="/federacion/categorias/borrar/${
                          sancion.id
                        }" class="btn btn-sm variant-danger">Borrar</a>
                        </td>`;
        });
      } else {
        console.error("Error al obtener los datos de la API:", response.status);
      }
    } catch (error) {
      console.error("Error al obtener los datos de la API:", error);
    }
  });
  const tableSimple = {
    head: ["Fecha de la sanción", "Destinatario", "Tipo de sanción"], //Pasar datos a la tabla aqui
    body: tableMapperValues(data),
  };
</script>

<svelte:head>
  <title>Gestión de sancions - PerformSquad</title>
</svelte:head>

<div class="flex flex-col gap-8">
  <h1 class="text-4xl text-center py-8">Gestión de sancions</h1>
  <Table source={tableSimple} />
  <div class="text-center">
    <a
      href="/federacion/sancions/crear"
      class="
            btn
            variant-filled-primary
            m-4
            p-4
            w-80
            "
    >
      Nuevo sancion
    </a>
  </div>
</div>

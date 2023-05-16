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
      const response = await fetch(`http://${domain}:3000/equipo`); // Reemplaza "URL_DE_LA_API" con la URL real de tu API
      if (response.ok) {
        data = await response.json(); // Almacenar los datos recuperados en la variable data
        //mostrar en la tabla con clase table los datos de la variable data

        const $ = (selector) => document.querySelector(selector);
        const table = $(".table");
        data.forEach((equipo) => {
          table.innerHTML += `<tr>
                <td>${
                  equipo.apellido2 != null //Ni idea tu sabras que pones aqui tbh
                    ? equipo.apellido +
                      " " +
                      equipo.apellido2 +
                      ", " +
                      equipo.nombre
                    : equipo.apellido1 + ", " + equipo.nombre
                }</td>
                <td>${
                  //calcular edad
                  new Date().getFullYear() -
                  new Date(equipo.fechaNacimiento).getFullYear()
                }</td>
                <td>${equipo.nombre}</td>
                <td>${equipo.email}</td> 
                <td>${equipo.telefono}</td>  
                <td style="display: flex;flex-direction: column;">
                    <a href="/federacion/categorias/editar/${
                      equipo.id
                    }" class="btn btn-sm variant-primary">Editar</a>
                    <a href="/federacion/categorias/borrar/${
                      equipo.id
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
    head: ["Nombre", "Email", "Teléfono", "Acciones"], //Pasar datos a la tabla aqui
    body: tableMapperValues(data, ["name", "symbol", "weight"]),
  };
</script>

<svelte:head>
  <title>Gestión de equipos - PerformSquad</title>
</svelte:head>

<div class="flex flex-col gap-8">
  <h1 class="text-4xl text-center py-8">Gestión de equipos</h1>
  <Table source={tableSimple} />
  <div class="text-center">
    <a
      href="/federacion/equipos/crear"
      class="
        btn
        variant-filled-primary
        m-4
        p-4
        w-80
        "
    >
      Nuevo equipo
    </a>
  </div>
</div>

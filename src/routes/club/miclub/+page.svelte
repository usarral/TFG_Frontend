<script>
  import { Table, tableMapperValues } from "@skeletonlabs/skeleton";
  import { onMount } from "svelte";
  import { checkAuth } from "$functions/checkAuth";
  checkAuth();

  let data = [];

  onMount(async () => {
    const domain = window.location.hostname;
    try {
      const response = await fetch(`http://${domain}:3000/clubs`);
      if (response.ok) {
        data = await response.json();
        const $ = (selector) => document.querySelector(selector);
        const table = $(".table");
        data.forEach((club) => {
          table.innerHTML += `<tr>
                <td>${
                  club.apellido2 != null
                    ? club.apellido + " " + club.apellido2 + ", " + club.nombre
                    : club.apellido1 + ", " + club.nombre
                }</td>
                <td>${
                  new Date().getFullYear() -
                  new Date(club.fechaNacimiento).getFullYear()
                }</td>
                <td>${club.nombre}</td>
                <td>${club.cif}</td> 
                <td style="display: flex;flex-direction: column;">
                    <a href="/federacion/categorias/editar/${
                      club.id
                    }" class="btn btn-sm variant-primary">Editar</a>
                    <a href="/federacion/categorias/borrar/${
                      club.id
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
    head: ["Nombre", "CIF", "Email", "Teléfono", "Acciones"],
    body: tableMapperValues(data),
  };
</script>

<svelte:head>
  <title>Mi Club - PerformSquad</title>
</svelte:head>

<div class="flex flex-col gap-8">
  <h1 class="text-4xl text-center py-8">Mi Club</h1>
  <form action="">
    <div class="flex flex-row gap-8 w-full">
      <label class="label text-left py-4 w-full">
        <span>Nombre *</span>
        <input
          class="input"
          type="text"
          name="nombre"
          placeholder="Nombre"
          id="nombre"
          required
          readonly
        />
      </label>
      <label class="label text-left py-4 w-full">
        <span>NIF *</span>
        <input
          class="input"
          type="text"
          name="NIF"
          placeholder="NIF"
          id="NIF"
          required
          readonly
        />
      </label>
    </div>
    <div class="flex flex-row gap-8 w-full">
      <label class="label text-left py-4 w-full">
        <span>Dirección *</span>
        <input
          class="input"
          type="text"
          name="direccion"
          placeholder="Direccion"
          id="direccion"
          required
          readonly
        />
      </label>
      <label class="label text-left py-4 w-full">
        <span>Ciudad *</span>
        <input
          class="input"
          type="text"
          name="ciudad"
          placeholder="Ciudad"
          id="ciudad"
          required
          readonly
        />
      </label>
    </div>
    <div class="flex flex-row gap-8 w-full">
      <label class="label text-left py-4 w-full">
        <span>Provincia *</span>
        <input
          class="input"
          type="text"
          name="provincia"
          placeholder="Provincia"
          id="provincia"
          required
          readonly
        />
      </label>
      <label class="label text-left py-4 w-full">
        <span>Código Postal *</span>
        <input
          class="input"
          type="text"
          name="codigoPostal"
          placeholder="Código Postal"
          id="codigoPostal"
          required
          readonly
        />
      </label>
    </div>
    <div class="flex flex-row gap-8 w-full">
      <label class="label text-left py-4 w-full">
        <span>Teléfono *</span>
        <input
          class="input"
          type="text"
          name="telefono"
          placeholder="Teléfono"
          id="telefono"
          required
          readonly
        />
      </label>
      <label class="label text-left py-4 w-full">
        <span>Email *</span>
        <input
          class="input"
          type="text"
          name="email"
          placeholder="Email"
          id="email"
          required
          readonly
        />
      </label>
    </div>
    <div class="flex flex-row gap-8 w-full" />
    <label class="label text-left py-4 w-full">
      <span>Web </span>
      <input
        class="input"
        type="text"
        name="web"
        placeholder="Web"
        id="web"
        readonly
      />
    </label>
  </form>
</div>

<script>
  import { onMount } from "svelte";
  onMount(async () => {
    // get domain from url
    const domain = window.location.hostname;
    try {
      const response = await fetch(`http://${domain}:3000/arbitro/all`); // Reemplaza "URL_DE_LA_API" con la URL real de tu API
      if (response.ok) {
        data = await response.json();
        const $ = (selector) => document.querySelector(selector);
        const inpNombre = $("#inpNombre");
        const inpApellido = $("#inpApellido");
        const inpApellido2 = $("#inpApellido2");
        const inpDNI = $("#inpDNI");
        const inpFechaNacimiento = $("#inpFechaNacimiento");
        const inpTelefono = $("#inpTelefono");
        const inpEmail = $("#inpEmail");
        const inpDireccion = $("#inpDireccion");
        const inpCiudad = $("#inpCiudad");
        const inpProvincia = $("#inpProvincia");
        const inpCP = $("#inpCP");
      } else {
        console.error("Error al obtener los datos de la API:", response.status);
      }
    } catch (error) {
      console.error("Error al obtener los datos de la API:", error);
    }
  });
</script>

<svelte:head>
  <title>Editar Arbitro - PerformSquad</title>
</svelte:head>

<form action="">
  <h1 class="text-4xl text-center py-8">Editar Arbitro</h1>

  <div class="flex flex-row gap-8 w-full">
    <label class="label text-left py-4 w-full">
      <span>Nombre *</span>
      <input
        class="input"
        type="text"
        placeholder="Nombre"
        id="inpNombre"
        required
      />
    </label>
    <label class="label text-left py-4 w-full">
      <span>Apellido *</span>
      <input
        class="input"
        type="text"
        placeholder="Apellido"
        id="inpApellido"
        required
      />
    </label>
    <label class="label text-left py-4 w-full">
      <span>Segundo Apellido</span>
      <input
        class="input"
        type="text"
        placeholder="Segundo Apellido"
        id="inpApellido2"
      />
    </label>
  </div>
  <div class="flex flex-row gap-8 w-full">
    <label class="label text-left py-4 w-full">
      <span>DNI *</span>
      <input class="input" type="text" placeholder="DNI" id="inpDNI" required />
    </label>
    <label class="label text-left py-4 w-full">
      <span>Teléfono *</span>
      <input
        class="input"
        type="tel"
        placeholder="Teléfono"
        id="inpTelefono"
        required
      />
    </label>
    <label class="label text-left py-4 w-full">
      <span>Email *</span>
      <input
        class="input"
        type="email"
        placeholder="Email"
        id="inpEmail"
        required
      />
    </label>
  </div>
  <div class="flex flex-row gap-8 w-full">
    <label class="label text-left py-4 w-full">
      <span>Fecha Nacimiento *</span>
      <input class="input" type="date" id="inpFechaNacimiento" required />
    </label>
    <label class="label text-left py-4 w-full">
      <span>Dirección *</span>
      <input
        class="input"
        type="text"
        placeholder="Ej: Calle Mayor 27"
        id="inpDireccion"
        required
      />
    </label>
  </div>
  <div class="flex flex-row gap-8 w-full">
    <label class="label text-left py-4 w-full">
      <span>Ciudad *</span>
      <input
        class="input"
        type="text"
        placeholder="Ciudad"
        id="inpCiudad"
        required
      />
    </label>
    <label class="label text-left py-4 w-full">
      <span>Provincia *</span>
      <input
        class="input"
        type="text"
        placeholder="Apellido"
        id="inpProvincia"
        required
      />
    </label>
    <label class="label text-left py-4 w-full">
      <span>Código Postal *</span>
      <input
        class="input"
        type="number"
        placeholder="Ej: 50001"
        id="inpCP"
        required
      />
    </label>
  </div>
  <div class="text-center">
    <input
      type="submit"
      class="btn variant-filled-primary m-4 p-4 w-80"
      value="Guardar"
    />
  </div>
</form>

<svelte:head>
  <title>Crear Arbitro - PerformSquad</title>
</svelte:head>

<form action="">
  <h1 class="text-4xl text-center py-8">Nuevo Arbitro</h1>

  <div class="flex flex-row gap-8 w-full">
    <label class="label text-left py-4 w-full">
      <span>Nombre *</span>
      <input class="input" type="text" placeholder="Nombre" required />
    </label>
    <label class="label text-left py-4 w-full">
      <span>Apellido *</span>
      <input class="input" type="text" placeholder="Apellido" required />
    </label>
    <label class="label text-left py-4 w-full">
      <span>Segundo Apellido</span>
      <input class="input" type="text" placeholder="Segundo Apellido" />
    </label>
  </div>
  <div class="flex flex-row gap-8 w-full">
    <label class="label text-left py-4 w-full">
      <span>DNI *</span>
      <input class="input" type="text" placeholder="DNI" required />
    </label>
    <label class="label text-left py-4 w-full">
      <span>Teléfono *</span>
      <input class="input" type="text" placeholder="Teléfono" required />
    </label>
    <label class="label text-left py-4 w-full">
      <span>Email *</span>
      <input class="input" type="email" placeholder="Email" required />
    </label>
  </div>
  <div class="flex flex-row gap-8 w-full">
    <label class="label text-left py-4 w-full">
      <span>Fecha Nacimiento *</span>
      <input class="input" type="date" required />
    </label>
    <label class="label text-left py-4 w-full">
      <span>Dirección *</span>
      <input
        class="input"
        type="text"
        placeholder="Ej: Calle Mayor 27"
        required
      />
    </label>
  </div>
  <div class="flex flex-row gap-8 w-full">
    <label class="label text-left py-4 w-full">
      <span>Ciudad *</span>
      <input class="input" type="text" placeholder="Ciudad" required />
    </label>
    <label class="label text-left py-4 w-full">
      <span>Provincia *</span>
      <input class="input" type="text" placeholder="Apellido" required />
    </label>
    <label class="label text-left py-4 w-full">
      <span>Código Postal *</span>
      <input class="input" type="number" placeholder="Ej: 50001" />
    </label>
  </div>
  <div class="text-center">
    <button
      type="submit"
      class="
    btn
    variant-filled-primary
    m-4
    p-4
    w-80
    "
    >
      Guardar
    </button>
  </div>
</form>

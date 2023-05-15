<svelte:head>
  <title>Login de Arbitros</title>
</svelte:head>
<form class="text-center">
  <h1 class="text-6xl text-center p-10">Login de Árbitros</h1>
  <label class="label text-left py-4">
    <span>Email</span>
    <input class="input" type="text" placeholder="Email" />
  </label>
  <label class="label text-left py-4">
    <span>Contraseña</span>
    <input class="input" type="password" placeholder="Contraseña..." />
  </label>
  <div class="p-6"><a href="recoverpassword">¿Contraseña olvidada?</a></div>
  <input
    type="submit"
    class="btn variant-filled-surface m-2 w-1/5 self-center"
    value="Iniciar Sesión"
  />
</form>

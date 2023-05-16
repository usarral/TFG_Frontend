<svelte:head>
  <title>Login Federación</title>
</svelte:head>
<div class="text-center">
  <h1 class="text-6xl text-center p-10">Login de Federación</h1>
  <label class="label text-left py-4">
    <span>Email</span>
    <input class="input" type="text" placeholder="Email" />
  </label>
  <label class="label text-left py-4">
    <span>Contraseña</span>
    <input class="input" type="password" placeholder="Contraseña..." />
  </label>
  <div class="p-6"><a href="recoverpassword">¿Contraseña olvidada?</a></div>
  <a href="/federacion">Federación dashboard</a>
  <button class="button is-primary">Login</button>
</div>

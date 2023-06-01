<script>
  import { onMount } from "svelte";
  const handleOnSubmit = (e) => {
    const formData = new FormData(e.target);
    const data = [];
    for (let field of formData) {
      const [key, value] = field;
      data.push({ key, value });
    }
    const dataObject = data.reduce((acc, { key, value }) => {
      acc[key] = value;
      return acc;
    }, {});
    sendForm(dataObject).then((res) =>
      res.message === "Arbitro actualizado"
        ? (window.location.href = "/federacion/arbitros")
        : alert("Error al actualizar arbitro")
    );
  };

  const sendForm = async (data) => {
    const id = window.location.href.split("/").pop();
    const response = await fetch(
      `http://${window.location.hostname}:3000/login/`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );
    const res = await response.json();
    return res;
  };
  onMount(async () => {});
</script>

<svelte:head>
  <title>Login de Arbitros</title>
</svelte:head>
<form class="text-center">
  <h1 class="text-6xl text-center p-10">Login de Árbitros</h1>
  <label class="label text-left py-4">
    <span>DNI</span>
    <input class="input" type="text" placeholder="DNI" />
  </label>
  <label class="label text-left py-4">
    <span>Contraseña</span>
    <input class="input" type="password" placeholder="Contraseña..." />
  </label>
  <input type="hidden" name="fingerprint" />
  <div class="p-6"><a href="recoverpassword">¿Contraseña olvidada?</a></div>
  <button
    class="btn
    variant-filled-primary
    m-4
    p-4
    w-80">Login</button
  >
</form>

<script>
  import { onMount } from "svelte";

  onMount(async () => {
    const getPartidos = async () => {
      const domain = window.location.hostname;
      try {
        const response = await fetch(`http://${domain}:3000/partido`);
        if (response.ok) {
          const data = await response.json();
          return data.data;
        } else {
          console.error(
            "Error al obtener los datos de la API:",
            response.status
          );
        }
      } catch (error) {
        console.error("Error al obtener los datos de la API:", error);
      }
    };
    const getEquipos = async () => {
      const domain = window.location.hostname;
      try {
        const response = await fetch(`http://${domain}:3000/equipo`);
        if (response.ok) {
          const data = await response.json();
          return data.data;
        } else {
          console.error(
            "Error al obtener los datos de la API:",
            response.status
          );
        }
      } catch (error) {
        console.error("Error al obtener los datos de la API:", error);
      }
    };

    const partidos = await getPartidos();
    const equipos = await getEquipos();

    const $ = (selector) => document.querySelector(selector);
    const local = $("#local");
    const visitante = $("#visitante");
    const pendiente = $("#pendiente");
    const jugados = $("#jugados");

    let proximosPartidos = partidos.filter((partido) => {
      const fecha = new Date(partido.fecha);
      return fecha > new Date();
    });

    let partidosJugados = partidos.filter((partido) => {
      const fecha = new Date(partido.fecha);
      return fecha < new Date();
    });

    pendiente.textContent = proximosPartidos.length;
    jugados.textContent = partidosJugados.length;

    // sort proximos partidos by date
    proximosPartidos.sort((a, b) => {
      const fechaA = new Date(a.fecha);
      const fechaB = new Date(b.fecha);
      return fechaA - fechaB;
    });

    const proximoPartido = proximosPartidos[0];
    const localEquipo = equipos.find(
      (equipo) => equipo.id === proximoPartido.equipoLocal
    );
    const visitanteEquipo = equipos.find(
      (equipo) => equipo.id === proximoPartido.equipoVisitante
    );

    local.textContent = localEquipo.nombre;
    visitante.textContent = visitanteEquipo.nombre;
  });
</script>

<svelte:head>
  <title>Inicio</title>
</svelte:head>

<h1 class="text-4xl text-center py-4">Inicio</h1>
<div class="flex place-content-around">
  <div class="card p-4 w-96 flex flex-col">
    <h2 class="text-2xl">Partidos</h2>
    <p>Partidos pendientes: <span id="pendiente" /></p>
    <p>Partidos jugados: <span id="jugados" /></p>
  </div>
  <div class="card p-4 w-96">
    <h2 class="text-2xl">Proximo Partido</h2>
    <p>
      Local: <span class="font-extrabold" id="local" />
    </p>
    <p>Visitante: <span class="font-extrabold" id="visitante" /></p>
  </div>
</div>

<div class="card mt-8 p-8">
  <h2 class="text-2xl text-center py-2">Formulario de Contacto</h2>
  <form action="/sendmail" method="POST" class=" w-full">
    <label for="name">
      <span>Nombre</span>
      <input type="text" name="name" class="input" />
    </label>
    <label for="email">
      <span>Email</span>
      <input type="email" name="email" class="input" />
    </label>
    <label for="message">
      <span>Mensaje</span>
      <textarea name="message" class="input" />
    </label>
    <div class="w-full text-center py-0">
      <button type="submit" class="btn variant-filled-primary text-center w-36">
        Enviar
      </button>
    </div>
  </form>
</div>

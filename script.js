window.addEventListener("load", () => {
  const loader = document.getElementById("loader-screen");
  
  // Define el tiempo que quieres que dure en milisegundos (ejemplo: 2000ms = 2 segundos)
  const tiempoDeEspera = 2000;

  setTimeout(() => {
    // Añade la clase para ocultar suavemente
    loader.classList.add("loader-hidden");

    // Elimina el elemento del HTML cuando termina la animación CSS
    loader.addEventListener("transitionend", () => {
      loader.remove();
    });
  }, tiempoDeEspera);
});

// Musica de fondo
const audio = document.getElementById('bg-audio');

    // Intentar reproducir inmediatamente (por si el navegador lo permite)
    if (audio) {
        audio.volume = 0.5; // Ajusta el volumen si lo deseas (0.0 a 1.0)
        
        const promise = audio.play();
        if (promise !== undefined) {
            promise.catch(() => {
                // Si el navegador bloqueó la reproducción automática sin interacción,
                // reproducimos el audio al primer clic o toque que dé el usuario en la página.
                const startAudio = () => {
                    audio.play();
                    document.removeEventListener('click', startAudio);
                    document.removeEventListener('touchstart', startAudio);
                    document.removeEventListener('keydown', startAudio);
                };

                document.addEventListener('click', startAudio);
                document.addEventListener('touchstart', startAudio);
                document.addEventListener('keydown', startAudio);
            });
        }
    }
;

document.addEventListener("DOMContentLoaded", () => {
    const puntajeDisplay = document.getElementById("puntaje");
    const ancho = 28;
    let puntaje = 0;
    const cuadricula = document.querySelector(".cuadricula");

    const disposicion = [
        1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
        1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
        1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1,
        1, 3, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 3, 1,
        1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1,
        1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
        1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1,
        1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1,
        1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
        1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1,
        1, 1, 1, 1, 1, 1, 0, 1, 1, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 1, 1, 0, 1, 1, 1, 1, 1, 1,
        1, 1, 1, 1, 1, 1, 0, 1, 1, 4, 1, 1, 1, 2, 2, 1, 1, 1, 4, 1, 1, 0, 1, 1, 1, 1, 1, 1,
        1, 1, 1, 1, 1, 1, 0, 1, 1, 4, 1, 2, 2, 2, 2, 2, 2, 1, 4, 1, 1, 0, 1, 1, 1, 1, 1, 1,
        4, 4, 4, 4, 4, 4, 0, 0, 0, 4, 1, 2, 2, 2, 2, 2, 2, 1, 4, 0, 0, 0, 4, 4, 4, 4, 4, 4,
        1, 1, 1, 1, 1, 1, 0, 1, 1, 4, 1, 2, 2, 2, 2, 2, 2, 1, 4, 1, 1, 0, 1, 1, 1, 1, 1, 1,
        1, 1, 1, 1, 1, 1, 0, 1, 1, 4, 1, 1, 1, 1, 1, 1, 1, 1, 4, 1, 1, 0, 1, 1, 1, 1, 1, 1,
        1, 1, 1, 1, 1, 1, 0, 1, 1, 4, 1, 1, 1, 1, 1, 1, 1, 1, 4, 1, 1, 0, 1, 1, 1, 1, 1, 1,
        1, 0, 0, 0, 0, 0, 0, 0, 0, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 0, 0, 0, 0, 0, 0, 0, 0, 1,
        1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1,
        1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1,
        1, 3, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 3, 1,
        1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1,
        1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1,
        1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1,
        1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1,
        1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1,
        1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
        1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1
    ];

    /**
     * 0 - Pac-dots
     * 1 - Muro - Wall
     * 2 - Guarida Fantasma - Ghost Lair
     * 3 - Bolita de Poder - Power Pellet
     * 4 - Vacio - Empty
    */

    const cuadrados = [];

    // Creamos el Tablero - Create Your Board
    function crearTablero() {
        for (let i = 0; i < disposicion.length; i++) {
            const cuadrado = document.createElement("div");
            cuadrado.id = i;
            cuadricula.appendChild(cuadrado)
            cuadrados.push(cuadrado);

            // Agregar Disposicion al Tablero - Add Layout To The Board
            if (disposicion[i] === 0) {
                cuadrados[i].classList.add("pac-dot");
            }

            if (disposicion[i] === 1) {
                cuadrados[i].classList.add("muro");
            }

            if (disposicion[i] === 2) {
                cuadrados[i].classList.add("guarida-fantasma");
            }

            if (disposicion[i] === 3) {
                cuadrados[i].classList.add("poder-bolita");
            }
        }
    }
    
    crearTablero();

    // Crear Personajes - Create Characters
    // Dibujar Pac-Man en el Tablero - Draw Pac-man on the Board
    let indiceActualPacman = 490;
    cuadrados[indiceActualPacman].classList.add("pac-man");

    // Mover Pac-Man - Move Pac-man
    function moverPacman(e) {
        cuadrados[indiceActualPacman].classList.remove("pac-man");
        switch (e.key) {
            case "ArrowLeft":
                if (
                    indiceActualPacman % ancho !== 0 &&
                    !cuadrados[indiceActualPacman - 1].classList.contains("muro") &&
                    !cuadrados[indiceActualPacman - 1].classList.contains("guarida-fantasma")
                ) {
                    indiceActualPacman -= 1;
                }

                if ((indiceActualPacman - 1) === 363) {
                    indiceActualPacman = 391;
                }
                break;
            case "ArrowUp":
                if (
                    indiceActualPacman - ancho >= 0 &&
                    !cuadrados[indiceActualPacman - ancho].classList.contains("muro") &&
                    !cuadrados[indiceActualPacman - ancho].classList.contains("guarida-fantasma")
                ) {
                    indiceActualPacman -= ancho;
                }
                break;
            case "ArrowRight":
                if (
                    indiceActualPacman % ancho < ancho - 1 &&
                    !cuadrados[indiceActualPacman + 1].classList.contains("muro") &&
                    !cuadrados[indiceActualPacman + 1].classList.contains("guarida-fantasma")
                ) {
                    indiceActualPacman += 1;
                }

                if ((indiceActualPacman + 1) === 392) {
                    indiceActualPacman = 364;
                }
                break;
            case "ArrowDown":
                if (
                    indiceActualPacman + ancho < ancho * ancho &&
                    !cuadrados[indiceActualPacman + ancho].classList.contains("muro") &&
                    !cuadrados[indiceActualPacman + ancho].classList.contains("guarida-fantasma")
                ) {
                    indiceActualPacman += ancho;
                }
                break;
        }
        cuadrados[indiceActualPacman].classList.add("pac-man");
        puntoComidoPac();
        bolitaDePoderComido();
        comprobarJuegoTerminado();
        comprobarVictoria();
    }

    document.addEventListener("keyup", moverPacman);

    // ¿Qué Sucede Cuando Comes un Pac-Dot? - What Happens When You Eat a Pac-Dot
    function puntoComidoPac() {
        if (cuadrados[indiceActualPacman].classList.contains("pac-dot")) {
            puntaje++;
            puntajeDisplay.innerHTML = puntaje;
            cuadrados[indiceActualPacman].classList.remove("pac-dot");
        }
    }

    // ¿Qué Sucede Cuando Comes una Bolita de Poder? - What Happens When You Eat A Power-Pellet
    function bolitaDePoderComido() {
        if (cuadrados[indiceActualPacman].classList.contains("poder-bolita")) {
            puntaje += 10;
            puntajeDisplay.innerHTML = puntaje;
            fantasmas.forEach(fantasma => fantasma.estaAsustado = true);
            setTimeout(fantasmasSinMiedo, 10000);
            cuadrados[indiceActualPacman].classList.remove("poder-bolita");
        }
    }

    // Hacemos Que Los Fantasmas Dejen de Parpadear - Make The Ghosts Stop Flashing
    function fantasmasSinMiedo() {
        fantasmas.forEach(fantasma => fantasma.estaAsustado = false);
    }

    // Crear Fantasmas Usando Constuctor - Create Ghosts Using Constructor
    class Fantasma {
        constructor(nombreClase, indiceInicio, velocidad) {
            this.nombreClase = nombreClase;
            this.indiceInicio = indiceInicio;
            this.velocidad = velocidad;
            this.indiceActual = indiceInicio;
            this.estaAsustado = false;
            this.temporizadorID = NaN; 
        }
    }

    // Todos los Fantasmas - All My Ghosts
    const fantasmas = [
        new Fantasma("parpadeante", 348, 250),
        new Fantasma("menique", 376, 400),
        new Fantasma("tinta", 351, 300),
        new Fantasma("clyde", 379, 500),
    ];

    // Dibujar Fantasmas en la Cuadricula - Draw My Ghosts onto The Grid
    fantasmas.forEach(fantasma => cuadrados[fantasma.indiceActual].classList.add(fantasma.nombreClase, "fantasma"));
    
    // Mover Fantasmas Aleatoriamente
    fantasmas.forEach(fantasma => moverFantasma(fantasma));

    function moverFantasma(fantasma) {
        const direcciones = [-1, 1, ancho, -ancho];
        let direccion = direcciones[Math.floor(Math.floor(Math.random() * direcciones.length))];

        fantasma.temporizadorID = setInterval(function () {
            /**
             * Si en el Siguiente Cuadrado al que va el Fantasma y no tiene un Fantasma y no tiene un muro 
             * If Next Square Your Ghost is Going To Go To Does Not Have a Ghost And Does Not Have a Wall 
            */
            if (
                !cuadrados[fantasma.indiceActual + direccion].classList.contains("fantasma") &&
                !cuadrados[fantasma.indiceActual + direccion].classList.contains("muro")
            ) {
                cuadrados[fantasma.indiceActual].classList.remove(fantasma.nombreClase, "fantasma", "fantasma-asustado");
                fantasma.indiceActual += direccion;
                cuadrados[fantasma.indiceActual].classList.add(fantasma.nombreClase, "fantasma");
            // Busca una Nueva Dirección Aleatoria
            } else direccion = direcciones[Math.floor(Math.random() * direcciones.length)];

            // El Fantasma Está Asustado en Este Momento - If The Ghost is Currently Scared
            if (fantasma.estaAsustado) {
                cuadrados[fantasma.indiceActual].classList.add("fantasma-asustado");
            }

            // Si El Fantasma Está Asustado y Pac-Man Esta Encima - If The Ghost is Currently Scared and Pacman is on it
            if (fantasma.estaAsustado && cuadrados[fantasma.indiceActual].classList.contains("pac-man")) {
                fantasma.estaAsustado = false;
                cuadrados[fantasma.indiceActual].classList.remove(fantasma.nombreClase, "fantasma", "fantasma-asustado");
                fantasma.indiceActual = fantasma.indiceInicio;
                puntaje += 100;
                puntajeDisplay.innerHTML = puntaje;
                cuadrados[fantasma.indiceActual].classList.add(fantasma.nombreClase, "fantasma");
            }
            comprobarJuegoTerminado();
        }, fantasma.velocidad);
    }

    // Comprobar Si El Juego Ha Terminado - Check For A Game Over
    function comprobarJuegoTerminado() {
        if (
            cuadrados[indiceActualPacman].classList.contains("fantasma") &&
            !cuadrados[indiceActualPacman].classList.contains("fantasma-asustado")
        ) {
            fantasmas.forEach(fantasma => clearInterval(fantasma.temporizadorID));
            document.removeEventListener("keyup", moverPacman);
            setTimeout(function () {
                alert("Fin del Juego");
            }, 500)
        }
    }

    // Comprueba Si Has Ganado, Cambia el Marcador Ganador al Que Desees - Check For a Win, Change The Winning Score To Whatever You Wish
    function comprobarVictoria() {
        if (puntaje >= 274) {
            fantasmas.forEach(fantasma => clearInterval(fantasma.temporizadorID));
            document.removeEventListener("keyup", moverPacman);
            setTimeout(function () {
                alert("Has Ganado!");
            }, 500)
        }
    }
    
});

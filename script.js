// Mostrar la historia al presionar el botón

function mostrarHistoria() {

    const historia = document.getElementById("historia");

    historia.classList.remove("oculto");

    window.scrollTo({
        top: historia.offsetTop,
        behavior: "smooth"
    });

}



// Carrusel de fotos

const fotos = [
    "foto1.jpg.jpg",
    "foto2.jpg.jpg",
    "foto3.jpg.jpg",
    "foto4.jpg.jpg",
    "foto5.jpg.jpg"
];


let indice = 0;


setInterval(() => {

    const imagen = document.getElementById("fotoActual");


    imagen.style.opacity = 0;


    setTimeout(() => {

        indice++;

        if (indice >= fotos.length) {
            indice = 0;
        }


        imagen.src = fotos[indice];

        imagen.style.opacity = 1;


    }, 800);


}, 3000);

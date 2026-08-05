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
    "foto1.jpg",
    "foto2.jpg",
    "foto3.jpg",
    "foto4.jpg",
    "foto5.jpg"
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

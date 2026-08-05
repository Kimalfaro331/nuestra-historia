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
    "fotos/foto1.jpg",
    "fotos/foto2.jpg",
    "fotos/foto3.jpg",
    "fotos/foto4.jpg",
    "fotos/foto5.jpg"
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

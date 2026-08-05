// Mostrar la historia al presionar el botón

function mostrarHistoria() {

    const historia = document.getElementById("historia");

    historia.classList.remove("oculto");

    window.scrollTo({
        top: historia.offsetTop,
        behavior: "smooth"
    });
escribirTexto();
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
// Efecto escritura en la carta

const textos = document.querySelectorAll(".texto-carta");


function escribirTexto() {

    textos.forEach((texto, index) => {

        const contenido = texto.innerHTML;

        texto.innerHTML = "";

        let i = 0;


        setTimeout(() => {

            const intervalo = setInterval(() => {

                texto.innerHTML += contenido.charAt(i);

                i++;


                if (i >= contenido.length) {
                    clearInterval(intervalo);
                }

            }, 25);


        }, index * 2500);

    });

}

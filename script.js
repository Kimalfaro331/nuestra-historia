// Mostrar la historia al presionar el botón

function mostrarHistoria() {
    const historia = document.getElementById("historia");

    historia.classList.remove("oculto");

    window.scrollTo({
        top: historia.offsetTop,
        behavior: "smooth"
    });
escribirTexto();
document.getElementById("musica").play();
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

    const textos = document.querySelectorAll(".texto-carta");


    textos.forEach((texto, index) => {

        const contenido = texto.textContent;

        texto.textContent = "";


        let i = 0;


        setTimeout(() => {

            let intervalo = setInterval(() => {

                texto.textContent += contenido[i];

                i++;


                if (i >= contenido.length) {
                    clearInterval(intervalo);
                }

            }, 40);


        }, index * 3000);

    });

}

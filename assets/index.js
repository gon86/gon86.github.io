
const cargarImagenes = (imagenes, callback) => {
    const imagenesCargadas = [];
    let cantidadImagenesCargadas = 0;

    for(let i=0; i<imagenes.length; i++){
        const imagen = new Image();
        imagen.src = "assets/images/" + imagenes[i];
        imagenesCargadas.push(imagen);

        imagenesCargadas[i].addEventListener("load", function(e){
            cantidadImagenesCargadas++;
            if(cantidadImagenesCargadas === imagenes.length){
                callback();
            }
        });
    }
}

const imagenes = [
    'detector-sp.png',
    'tiempos-agonia.png',
    'vinculos-pasado.png',
    'ayudante-heroes.png',
    'truco.png',
    'liga7.png',
    'agenda-mascotera.svg',
    'description.svg',
    'medal.svg',
    'person.svg',
    'play.svg',
    'send.svg',
    'star.svg',
    'work.svg'
];

cargarImagenes(imagenes, () => {
    const cargando = document.getElementById('cargando');
    const contenedor = document.getElementById('contenedor-principal');
    cargando.classList.remove('cargando-flex');
    cargando.classList.add('oculto');
    contenedor.classList.remove('oculto');
    contenedor.classList.add('contenedor');
});
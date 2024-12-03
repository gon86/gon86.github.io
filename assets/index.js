import { datosFichas } from './fichas.js';

const trabajos = document.getElementById('trabajos');
const modal = document.getElementById('modal');
const botonCerrar = modal.querySelector('button.cerrar');

const ficha = {
    titulo: document.getElementById('titulo-ficha'),
    tipo: document.getElementById('tipo-ficha'),
    tareas: document.getElementById('tareas-ficha'),
    caracteristicas: document.getElementById('caracteristicas-ficha'),
    tecnologias: document.getElementById('tecnologias-ficha')
};

const imagenes = [
    'detector-sp.png',
    'tiempos-agonia.png',
    'vinculos-pasado.png',
    'ayudante-heroes.png',
    'liga7.png',
    'agenda-mascotera.svg',
    'description.svg',
    'medal.svg',
    'person.svg',
    'play.svg',
    'send.svg',
    'star.svg',
    'star-li.svg',
    'close.svg',
    'work.svg'
];

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
};

const crearLista = (nodo, datos) => {
    datos.forEach(texto => {
        const li = document.createElement('li');
        li.textContent = texto;
        nodo.appendChild(li);
    });
};

const borrarLista = (nodo) => {
    while(nodo.hasChildNodes()){
        nodo.removeChild(nodo.firstChild);
    }
};

const abrirModal = (idFicha) => {
    ficha.titulo.textContent = datosFichas[idFicha].titulo;
    ficha.tipo.textContent = datosFichas[idFicha].tipo;
    ficha.tareas.textContent = datosFichas[idFicha].tareas;

    borrarLista(ficha.caracteristicas);
    borrarLista(ficha.tecnologias);
    crearLista(ficha.caracteristicas, datosFichas[idFicha].caracteristicas);    
    crearLista(ficha.tecnologias, datosFichas[idFicha].tecnologias);
    
    modal.showModal();
};

cargarImagenes(imagenes, () => {
    const cargando = document.getElementById('cargando');
    const contenedor = document.getElementById('contenedor-principal');
    cargando.classList.remove('cargando-flex');
    cargando.classList.add('oculto');
    contenedor.classList.remove('oculto');
    contenedor.classList.add('contenedor');
});

trabajos.addEventListener('click', e => {
    if(e.target.classList.contains('info')){
        abrirModal(e.target.dataset.ficha);
    }
});

botonCerrar.addEventListener('click', e => {
    modal.close();
});
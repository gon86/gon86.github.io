
export const GestorRecursos = iniciarRecursos();

function iniciarRecursos(){
    const imagenes = ["email.png", "estudios.png", "experiencia.png", "informacion.png", "trabajos.png", "ubicacion.png"];
    const imagenesCargadas = [];
    let cantidadImagenesCargadas = 0;

    return {
        cargar: function(callback){
            for(let i=0; i<imagenes.length; i++){
                const imagen = new Image();
                imagen.src = "imagenes/" + imagenes[i];
                imagenesCargadas.push(imagen);
        
                imagenesCargadas[i].addEventListener("load", function(e){
                    cantidadImagenesCargadas++;
                    if(cantidadImagenesCargadas === imagenes.length){
                        callback();
                    }
                });
            }  
        }
    }
}

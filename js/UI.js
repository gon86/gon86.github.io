export const UI = iniciarUI();

function iniciarUI(){
    return {
        cargando: document.getElementById("cargando"),
        principal: document.getElementById("principal"),
        botonGirar: document.getElementById("b-girar"),
        flecha: document.getElementById("flecha"), 
        informacion: document.getElementById("informacion"),
        experiencia: document.getElementById("experiencia"),
        estudios: document.getElementById("estudios"),
        trabajos: document.getElementById("trabajos"),
        edad: document.getElementById("edad"),
        botonCerrarInformacion: document.querySelector("#popup-informacion .b-cerrar"),
        popupVisible: false,
        
        obtenerLineasVisibles: function(){
            return document.querySelectorAll(".popup.visible .linea-visible");
        },

        obtenerLineas: function(idPopup){
            return document.querySelectorAll(`#${idPopup} .contenido .linea`);
        },

        cerrarPopup: function(){
            document.querySelector(".popup.visible").classList.remove("visible");
            document.getElementById("fondo-popups").classList.remove("visible");
            this.popupVisible = false;
        },

        abrirPopup: function(id){
            document.getElementById(id).classList.add("visible");
            document.getElementById("fondo-popups").classList.add("visible");
            this.popupVisible = true;
        },

        obtenerEdad: function() {
            const fechaActual = new Date().getTime(),
                  fechaNacimiento = new Date("1986-03-13 08:00:00").getTime(),
                  edadCalculada = parseInt((fechaActual - fechaNacimiento) / (1000*60*60*24*365));
        
            return edadCalculada;
        },

        obtenerTarjetas: function(){
            const tarjetas = document.getElementsByClassName("tarjeta");
            const elementos = [];

            for(let i=0; i<tarjetas.length; i++){
                elementos.push(tarjetas[i]);
            }

            return elementos;
        },

        activarTarjeta: function(tarjetaPrincipal){
            tarjetaPrincipal.classList.add("activa");
        },

        desactivarTarjeta: function(tarjetaPrincipal){
            tarjetaPrincipal.classList.remove("activa");
        }
    }
}

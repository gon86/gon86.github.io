import { UI } from "./UI.js";
import { GestorRecursos } from "./GestorRecursos.js";

window.addEventListener("load", function(e){ GestorRecursos.cargar(iniciar) });

function iniciar(){
    let giroActual = 0;
    let UIHabilitada = false;
    const tarjetasOrdenadas = UI.obtenerTarjetas();

    UI.cargando.style.display = "none";
    UI.principal.style.display = "block";
    UI.edad.textContent = UI.obtenerEdad() + " años";

    iniciarGiro();

    document.body.addEventListener("click", function(e){
        if(UIHabilitada && UI.popupVisible){
            if(e.target.classList.contains("b-cerrar")){
                const lineas = UI.obtenerLineasVisibles();

                for(let i=0; i<lineas.length; i++){
                    lineas[i].classList.remove("linea-visible");
                    lineas[i].classList.add("linea");
                }

                UI.cerrarPopup();
                UIHabilitada = true;
            } else if(e.target.classList.contains("b-solapa")){
                const boton = e.target;
                const contenidoSolapa = e.target.nextElementSibling;
                const simboloBoton = e.target.children[0];

                if(contenidoSolapa.classList.contains("visible")){
                    contenidoSolapa.classList.remove("visible");
                    boton.classList.remove("activo");
                    simboloBoton.textContent = "+";
                } else {
                    simboloBoton.textContent = "-";
                    contenidoSolapa.classList.add("visible");
                    boton.classList.add("activo");
                }
            }
        }
    });

    UI.informacion.addEventListener("click", function(e){
        if(UIHabilitada && !UI.popupVisible && UI.informacion.classList.contains("activa")){
            UI.abrirPopup("popup-informacion");
            animarLineas("popup-informacion");
        }
    });

    UI.experiencia.addEventListener("click", function(e){
        if(UIHabilitada && !UI.popupVisible && UI.experiencia.classList.contains("activa")){
            UI.abrirPopup("popup-experiencia");
            animarLineas("popup-experiencia");
        }
    });

    UI.estudios.addEventListener("click", function(e){
        if(UIHabilitada && !UI.popupVisible && UI.estudios.classList.contains("activa")){
            UI.abrirPopup("popup-estudios");
            animarLineas("popup-estudios");
        }
    });

    UI.trabajos.addEventListener("click", function(e){
        if(UIHabilitada && !UI.popupVisible && UI.trabajos.classList.contains("activa")){
            UI.abrirPopup("popup-trabajos");
            animarLineas("popup-trabajos");
        }
    });

    UI.botonGirar.addEventListener("click", function(e){
        if(UIHabilitada && !UI.popupVisible){
            iniciarGiro();
        }
    });

    function animarLineas(idPopup){
        UIHabilitada = false;
        const lineas = UI.obtenerLineas(idPopup);
        let lineaActual = 0;
        let idIntervalo = setInterval(function(){ 
            if(lineaActual >= (lineas.length + 1)){
                clearInterval(idIntervalo);
                for(let i=0; i<lineas.length; i++){
                    lineas[i].classList.remove("animar-linea");
                    lineas[i].classList.remove("linea");
                    lineas[i].classList.add("linea-visible");
                }
                UIHabilitada = true;
            } else if(lineaActual < lineas.length){
                lineas[lineaActual].classList.add("animar-linea");
            }

            lineaActual++;
        }, 150); 
    }

    function iniciarGiro(){
        UIHabilitada = false;
        UI.botonGirar.setAttribute("disabled", "");
        UI.flecha.style.display = "none";
        UI.desactivarTarjeta(obtenerTarjetaPrincipal());
        agregarClaseGiro();
        rotarTarjetas();
        incrementarGiro();
        setTimeout(function(){ 
            UIHabilitada = true; 
            UI.botonGirar.removeAttribute("disabled");
            UI.flecha.style.display = "block";
            UI.activarTarjeta(obtenerTarjetaPrincipal());
        }, 2000);
    }

    function obtenerTarjetaPrincipal(){
        return tarjetasOrdenadas[0].children[0];
    }

    function incrementarGiro(){
        if(giroActual >= tarjetasOrdenadas.length){
            giroActual = 1;
        } else {
            giroActual++;
        }
    }

    function rotarTarjetas(){
        const primerTarjeta = tarjetasOrdenadas.shift();
        tarjetasOrdenadas.push(primerTarjeta);
    }

    function quitarClaseGiro(tarjetas){
        for(let i=0; i<tarjetas.length; i++){
            for(let j=0; j<tarjetas.length; j++){
                const clase = "giro-tarjeta-" + (j+1);
                if(tarjetas[i].classList.contains(clase)){
                    tarjetas[i].classList.remove(clase);
                    break;
                }
            }
        }
    }

    function agregarClaseGiro(){
        quitarClaseGiro(tarjetasOrdenadas);

        for(let i=0; i<tarjetasOrdenadas.length; i++){
            tarjetasOrdenadas[i].classList.add("giro-tarjeta-" + (i+1));

            if(tarjetasOrdenadas[i].classList.contains("detras")){
                tarjetasOrdenadas[i].classList.remove("detras");
            }
        }

        tarjetasOrdenadas[2].classList.add("detras");
        tarjetasOrdenadas[3].classList.add("detras");
    }
}
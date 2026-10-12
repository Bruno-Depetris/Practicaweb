
import { Configuracion } from "../config/Configuracion.js";

export class Aplicacion {
    constructor(domService){
        this.domService = domService;
    }
  //`static` → se accede mediante la clase; 
  // sin `static` → normalmente se accede mediante una instancia 

    iniciar() {

        this.domService.establecerTexto(this.domService.obtenerElemento("#app"), Configuracion.NOMBRE_APLICACION)
        this.domService.establecerTituloDocumento(Configuracion.NOMBRE_APLICACION);
        this.domService.establecerIconoDocumento(Configuracion.URL_ICONO);

        console.log("Aplicacion iniciada " + Configuracion.NOMBRE_APLICACION);

    }

}

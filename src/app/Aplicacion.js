
import { Configuracion } from "../config/Configuracion.js";

export class Aplicacion {
    constructor(domService){
        this.domService = domService;
    }
  //`static` → se accede mediante la clase; 
  // sin `static` → normalmente se accede mediante una instancia 

    iniciar() {
        this.domService.establecerTituloDocumento(Configuracion.NOMBRE_APLICACION);
        this.domService.establecerIconoDocumento(Configuracion.URL_ICONO);
        this.domService.establecerHtml('titulo', "<b>Hola</b>" + Configuracion.NOMBRE_APLICACION)
        console.log("Aplicacion iniciada " + Configuracion.NOMBRE_APLICACION);

    }

}

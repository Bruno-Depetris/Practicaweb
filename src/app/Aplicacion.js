
import { Configuracion } from "../config/Configuracion.js";
import { DomService } from "../core/DomService.js";

export class Aplicacion {

  //`static` → se accede mediante la clase; 
  // sin `static` → normalmente se accede mediante una instancia 

    iniciar() {
        const dom = new DomService()
        dom.establecerTituloDocumento(Configuracion.NOMBRE_APLICACION);
        dom.establecerIconoDocumento(Configuracion.URL_ICONO);
        console.log("Aplicacion iniciada " + Configuracion.NOMBRE_APLICACION);

    }

}

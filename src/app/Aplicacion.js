
import { Configuracion } from "../config/Configuracion.js";


export class Aplicacion {

    
    //Como solo accedo a propiedades puedo acceder sin instanciar
    iniciar() {
        console.log("Aplicacion iniciada " + Configuracion._nombreAplicacion);

    }

}
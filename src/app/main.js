import { DomService } from "../core/DomService.js";
import { Aplicacion } from "./Aplicacion.js";

//El import dene realizarce llamando a el archivo
//pero ademas colocarle el .js porque sino no funciona
//si quiero acceder a los metodos de aplicacion 
//necesito declararla y guardar la variable en const

try {
    const dom = new DomService();

    const app = new Aplicacion(dom);
    
    app.iniciar();          

} catch (error) {
    console.error("Error al inicar la aplicacion:\n Main.js \n Detalles ", error);

}

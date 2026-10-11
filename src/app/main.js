import { Aplicacion } from "./Aplicacion.js";
//El import dene realizarce llamando a el archivo
//pero ademas colocarle el .js porque sino no funciona
//si quiero acceder a los metodos de aplicacion 
//necesito declararla y guardar la variable en const

try {

    // esto esta bien : Aplicacion.iniciar(); 
    const app = new Aplicacion();
    app.iniciar();

} catch (error) {
    console.error("Error al inicar la aplicacion:\n Main.js \n Detalles" + error);

}

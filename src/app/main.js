import { Aplicacion } from "./Aplicacion.js";
//El import dene realizarce llamando a el archivo
//pero ademas colocarle el .js porque sino no funciona

const app = new Aplicacion()

//si quiero acceder a los metodos de aplicacion 
//necesito declararla y guardar la variable en const
try{
    app.iniciar()

}catch{
    console.log("Error al inicar la aplicacion.")
}
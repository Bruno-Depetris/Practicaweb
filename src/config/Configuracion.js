
export class Configuracion {

    static get NOMBRE_APLICACION() {
        return "Practica SPA";
    }

    static get URL_API() {
        return "https://dummyjson.com";
    }

    // Tiempo máximo de espera de una petición antes de considerarla agotada.
    static get TIMEOUT_PETICIONES_MS() {
        return 5000;
    }

    static get URL_ICONO() {
        return "assets/img/icono.png";
    }

}

export class DomService {

    obtenerElemento(selector) {
        
        const elemento = document.querySelector(selector);
        
        if (!elemento) {
            throw new Error(`Elemento no encontrado: ${selector}`);
        }

        return elemento;
    }   

    obtenerElementos(selector) {
    
        const elementos = document.querySelectorAll(selector);
       
        if (elementos.length === 0) {
            throw new Error(`Ningun elemento coincide con: ${selector}`);
        }
       
        return Array.from(elementos);
  
    }

    establecerTexto(elemento, texto) {
        if (document.getElementById(elemento) === null){
            throw new Error(`Elemento no encontrado: ${elemento}`);
        }
        
        document.getElementById(elemento).textContent = texto
        
    }

    /** 
     * Establece el contenido HTML de un elemento identificado
     * ADVERTENCIA: Es peligroso si el contenido viene de 
     * un usuario o de una API. Es la puerta del ataque XSS, 
     * que te mencioné al principio y vamos a resolver en el TemplateEngine.
     * 
     * @param {string} elemento - ID del elemento HTML.
     * @param {string} html - Código HTML que se desea insertar.
     * @throws {Error} Si no se encuentra el elemento.
     * 
     * 
    */
    establecerHtml(elemento, html){
        if (document.getElementById(elemento) === null) {
            throw new Error(`Elemento no encontrado: ${elemento}`);
        }

        document.getElementById(elemento).innerHTML = html
    }

    establecerTituloDocumento(titulo){
        // use el by tag name porque solamente hay un tittle y el primer elemento
        // de la coleccion [0]
        document.getElementsByTagName("title")[0].textContent = titulo;
    }


    /**
     * Establece el favicon del documento.
     * @param {string} direccionIcono - Ruta de la imagen del icono.
     * @throws {Error} Si la ruta está vacía o no es válida.
     */
    establecerIconoDocumento(direccionIcono) {

        if (direccionIcono == null || direccionIcono.trim() === "") {
            throw new Error("La ruta del icono no puede estar vacía.");
        }

        /** @type {HTMLLinkElement | null} */
        let icono = document.querySelector('link[rel="icon"]');

        if (icono === null) {
            icono = document.createElement("link");
            icono.rel = "icon";
            icono.type = "image/png";

            document.head.appendChild(icono);
        }

        icono.href = direccionIcono;
    }



}   
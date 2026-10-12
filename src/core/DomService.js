export class DomService {

    obtenerElemento(slector) {
        
        const element = document.querySelector(slector);
        
        if (!element) {
            throw new Error(`Elemento no encontrado: ${slector}`);
        }

        return element;
    }   

    obtenerElementos(slector) {
    
        const element = document.querySelectorAll(slector);
        
        return Array.from(element);
  
    }

    establecerTexto(elemento, texto) {
        if (elemento === null){
            throw new Error(`Elemento no encontrado: ${elemento}`);
        }
        
        elemento.textContent = texto;       
        
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
        if (elemento === null) {
            throw new Error(`Elemento no encontrado: ${elemento}`);
        }
        
        elemento.innerHTML = html;
    }

    establecerTituloDocumento(titulo){
       
        document.title = titulo;
    }

    /**
 * Establece el favicon del documento.
 * @param {string} direccionIcono - Ruta de la imagen del icono.
 * @throws {Error} Si la ruta está vacía o no es válida.
 */
    establecerIconoDocumento(direccionIcono) {

        if (direccionIcono === null || direccionIcono.trim() === "") {
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
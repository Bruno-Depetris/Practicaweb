## 1. ¿Qué es el DOM? Usa tu analogía de WinForms.
El dom vendria a ser el .designer de windows forms. Es la representación de el HTML que el navegador construye en memoria cuando carga la página.
El navegador interpreta ese código y construye una estructura de objetos que representa sus elementos.

## 2. ¿Qué devuelve `querySelector` si no encuentra nada y por qué decidimos lanzar un error? Explícalo con lo que viste en el experimento 

**Si no lo encuentra, `querySelector` devuelve `null` y no lanza error.** El fallo aparece después, lejos de su causa, con un críptico _“Cannot read properties of null”_
Como nombramos anteriormente al no lanzar un error , nosotros decidimos emitir un mensaje de error (throw new ) el cual se encargue de darnos la información de lo que esta pasando.
En el experimento me decía que el elemento no fue encontrado 

## 3. `textContent` vs `innerHTML`: qué viste en el experimento 2 y cuál es el riesgo.

En el esperimento pude comprobar que el establecer texto incerta el texto y si le paso un html simplemente muestra el bloque ejemplo <b>Hola</b>.
El de riesgo es el INNERHTML porque me permite ingresar bloques enteros de puro html creando una vulnerabilidad para una puerta de ataque XSS.

## 4. ¿Por qué `Aplicacion` recibe el `DomService` por constructor en lugar de hacer `new DomService()` adentro? Tienes que responder con **un ejemplo concreto**, no con “es mejor práctica”.

Esta no la tengo claro pero creo que es porque como se ejecuta el codigo en el lugar donde hago el import, si ejecuto en el main.js , el cual esta en el index.html entiendo que eso me da acceso a todos los elementos de ese archivo o del lugar donde insancie. 
Fuera de eso abstraigo las dependencias.

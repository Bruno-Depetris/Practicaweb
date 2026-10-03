## 1. ¿Qué es una SPA y en qué se diferencia de una web "tradicional"?

Un spa , es una sola pagina que es utilizada como padre, mientras tanto las demas paginas hijas se van mostrando dentro de esa pagina.

correcciones post leer: 
En una web tradicional el navegador le pide al servidor a que pagina deveria redireccionar, es decir, que deberia mostrar ahora.
En una SPA el HTML se descarga una sola ves despues JS se encarga de cambiar el contenido de los datos sin recargar constantemente el servidor (ahh creo que por eso existe el history api y el hash router, porque si se recarga la pagina que pasa?)

## 2. ¿Qué diferencia hay entre el servidor que entrega el frontend y la API?

Si bien ambos son servidores, el servidor frontend tiene su principal actividad que es entregar los archivos de la aplicacion web.
mientras tanto la api no entrega una interfaz visual, entrega, modifica y lee los datos.

## 3. ¿Por qué el History API necesita configurar un fallback en el servidor y el hash router no?

Vamos paso a paso, tenemos una web llamada predits.com.ar/productos.
En una spa si nosotros estamos parados sobre esa URL y queremos recargar entonces nos va a tirar un 404 "not found", pero porque? porque el navegador le esta pidiendo al servidor que busque productos, pero no existe.
Porque no existe? porque en las SPA no manejamos directamente HTML completos especificamente para "productos" lo redireccionamos con rutas. por eso si el usuario recarga le aparece un 404.
Si configuramos el fallback entonces cada ves que el usuario recargue la pagina lo redirecciona siempre al index.html, le permite cargar la pagina de forma correcta y el JavaScript que muestra lo correspondiente.



## 4. ¿Qué es CORS y por qué nos afecta? Esta tienes que investigarla.

CORS significa Cross-Origin Resource Sharing en español, intercambio de recursos de origen cruzado.
Primero hay que entender qué es un origin , un origin esta determinado por protocolo + host + puerto.
por ejemplo  http://localhost:5180
protocolo: http
host: localhost
puerto: 5180

si la url de el front y la url de la api son diferentes entonces CORS bloquea completamente el acceso a la api. 

El origen es el conjunto es decir la URL en si, es de donde sale la peticion. como nombramos anteriormente si son distintas el BACKEND bloquea.

## 5. DummyJSON simula POST, PUT y DELETE. ¿Qué significa eso y qué problema crees que nos va a traer?

DummyJSON sirve para practicar contra una API falsa. Pero sus operaciones de escritura no persisten realmente los cambios en el servidor.

PUT /products/1
DELETE /products/1
POST /products/ "no lleva id porque lo estoy creando ID AUTOINCREMENT"

y el problema que podemos llegar a tener es que no vamos a ver los cambios completamente efectuados, porque sus operaciones no persisten. es decir si nos devuelve un 200 OK nosotros hacemos el detele del producto desde el front pero no se va a ver afectado en la web porque cuando hagamos el GET de nuevo va a volver a aparecer.


## 6. ¿cómo hace la SPA para que el usuario vea el producto borrado? 

Bueno como la api responde 200 OK falso si borramos un producto, el SPA si recibe un 200 OK lo borra y como no se recarga el HTML siempre parece que esta borrado pero no.


## 7. Prueba práctica: /products/1 vs /products/99999: qué devuelve cada una y su código de estado (F12 → Network).

https://dummyjson.com/products/1 devuelve un JSON completo de un solo producto, tiene titulo, descripcion, precio, imagenes.
el network devuelve un documento con 202 y un favicon

https://dummyjson.com/products/99999 devuelve un mensaje que no fue encontrado. "{"message":"Product with id '99999' not found"}" 
El network devuelve un favicon, y un documento con el 404
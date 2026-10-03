##¿Qué es una SPA y en qué se diferencia de una web "tradicional"?

Un spa , es una sola pagina que es utilizada como padre, mientras tanto las demas paginas hijas se van mostrando dentro de esa pagina.

correcciones post leer: 
En una web tradicional el navegador le pide al servidor a que pagina deveria redireccionar, es decir, que deberia mostrar ahora.
En una SPA el HTML se descarga una sola ves despues JS se encarga de cambiar el contenido de los datos sin recargar constantemente el servidor (ahh creo que por eso existe el history api y el hash router, porque si se recarga la pagina que pasa?)

##¿Qué diferencia hay entre el servidor que entrega el frontend y la API?

Si bien ambos son servidores, el servidor frontend tiene su principal actividad que es entregar los archivos de la aplicacion web.
mientras tanto la api no entrega una interfaz visual, entrega, modifica y lee los datos.

##¿Por qué el History API necesita configurar un fallback en el servidor y el hash router no?

Como nombramos anteriormente el navegador en una SPA se comporta de forma distinto, digamos la SPA carga el HTML una sola ves , por ende el FALLBACK se encarga de que, si un usuario se encuentra en una vista distina y el navegador pide ver esa vista de nuevo ( porque el usuario recargo ) se vea correctamente -

Con hash, la URL es misitio.com/#/productos/5. Todo lo que va después del # el navegador nunca lo envía al servidor. El servidor solo recibe /, devuelve index.html y listo: no hay nada que configurar.

Esta ultima la copie de mi agente , me gusta mas fallback HISTORY API. Creo que es mas completa


##¿Qué es CORS y por qué nos afecta? Esta tienes que investigarla.

CORS significa Cross-Origin Resource Sharing en español, intercambio de recursos de origen cruzado.
Primero hay que entender qué es un origin , un origin esta determinado por protocolo + host + puerto.
por ejemplo  http://localhost:5180
protocolo: http
host: localhost
puerto: 5180

si la url de el front y la url de la api son diferentes entonces CORS bloquea completamente el acceso a la api. 


##DummyJSON simula POST, PUT y DELETE. ¿Qué significa eso y qué problema crees que nos va a traer?

DummyJSON sirve para practicar contra una API falsa. Pero sus operaciones de escritura no persisten realmente los cambios en el servidor.

PUT /products/1
DELETE /products/1
POST /products/1

y el problema que podemos llegar a tener es que no vamos a ver los cambios completamente efectuados, porque sus operaciones no persisten. es decir si nos devuelve un 200 OK nosotros hacemos el detele del producto desde el front pero no se va a ver afectado en la web porque cuando hagamos el GET de nuevo va a volver a aparecer.


##¿cómo hace la SPA para que el usuario vea el producto borrado? Bueno como la api responde 200 OK falso si borramos un producto, el SPA si recibe un 200 OK lo borra y como no se recarga el HTML siempre parece que esta borrado pero no.
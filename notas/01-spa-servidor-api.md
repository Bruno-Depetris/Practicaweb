¿Qué es una SPA y en qué se diferencia de una web "tradicional"?

Un spa , es una sola pagina que es utilizada como padre, mientras tanto las demas paginas hijas se van mostrando dentro de esa pagina.
---
¿Qué diferencia hay entre el servidor que entrega el frontend y la API?

Si bien ambos son servidores, el servidor frontend tiene su principal actividad que es entregar los archivos de la aplicacion web.
mientras tanto la api no entrega una interfaz visual, entrega, modifica y lee los datos.
---
¿Por qué el History API necesita configurar un fallback en el servidor y el hash router no?

Bien aca creo que hay un tema , una es aquella que se usa para las redirecciones de la api, ejemplo tengo una api que tiene su host + protocolo + puerto y sus endpoints, una se encarga de que si el endpoint no existe sepa redirigir de forma correcta y el hash (#) se encarga de redirigir las paginas en la pagina sin necesiad de que sepa toda la url completa.


---
¿Qué es CORS y por qué nos afecta? Esta tienes que investigarla.

CORS significa Cross-Origin Resource Sharing en español, intercambio de recursos de origen cruzado.
Primero hay que entender qué es un origin , un origin esta determinado por protocolo + host + puerto.
por ejemplo  http://localhost:5180
protocolo: http
host: localhost
puerto: 5180

si el puerto de el front y el puerto de la api son diferentes entonces CORS bloquea completamente el acceso a la api. 

---
DummyJSON simula POST, PUT y DELETE. ¿Qué significa eso y qué problema crees que nos va a traer?

DummyJSON sirve para practicar contra una API falsa. Pero sus operaciones de escritura no persisten realmente los cambios en el servidor.

PUT /products/1
DELETE /products/1
POST /products/1

y el problema que podemos llegar a tener es que no vamos a ver los cambios completamente efectuados, porque sus operaciones no persisten. es decir si nos devuelve un 200 OK nosotros hacemos el detele del producto desde el front pero no se va a ver afectado en la web porque cuando hagamos el GET de nuevo va a volver a aparecer.
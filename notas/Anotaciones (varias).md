
INTERFACES
JavaScript no tiene interfaces, entonces lo que se hace es crear una clase base cuyos metodos lanzan un error si nadie los sobre escribribe. Es un "contrato"
```
src/domain/repositories/ProductoRepositorio.js es la clase base , es decir donde esta el contrato.
src/data/repositories/productoRepositorioApi.js es una estenxion de la clase base y utiliza la implementacion "fetch" para consultar con la BD.
```


NOTACION DE PUNTOS
Esto es raro, si creo una clase hay varias formas de acceder a sus atributos y metodos, sigo investigando.
Si creo una clase para acceder a sus propiedades simplemente con el nombre del import y el punto ya puedo. Pero si alguna clase quiero acceder a sus metodos necesito isntanciarla. Porque para las propiedades no pero para los metodos si, es raro.

CODIGO DE NIVEL SUPERIOR
Puedo , apenas creo un archivo, ejecutar el codigo sin necesidad de crear un metodo o una clase, es decir, puedo si quisiera escribir un console.log en un archivo .js vacio y funcionaria. En CSHARP estoy acostumbrado a trabajar en una estructura.


CLASES
si a las propiedades de una calse se les coloca el _ _(guion bajo)_ quiere decir que ese valor es privado y no se puede modificar de afuera, es decir son PRIVADOS. Como yo los necesito usar desde afuera no vale la pena usarlos.
Las CONSTANTES (CONST) en JS se escriben en mayusculas.
Tenia duda sobre unos miembros estaticos dentro de una clase, tenia la clase Configuracion.js

```
export class Configuracion {

	static NOMBRE_APLICACION = "PracticaSPA";

	static URL_API = "https://dummyjson.com";

	static TIMEOUT_PETICIONES_MS = 5000;

}

```

Lo que por instinto hubiera echo en C# lo hice en JS , Instancie en otra clase la clase configuración de esta forma 


```
Const config = new Configuracion();

```

Pero no me dejaba acceder a sus propiedades a traves de  la notacion de puntos. Investigando resultan que las variables de tipo static pertenecen a la case, no a la instancia por ende lo que debo hacer es Configuracion.NOMBRE_APLICACION . 

"una instancia no convierte las propiedades estáticas en propiedades de esa instancia. No hace falta instanciar `Configuracion` para usar esos valores."

Luego recorde todas las veces que use funciones static void en C#, las mismas las podia usar incluso sin necesidad de instanciar la clase. ahora entiendo. 

En resumen: **`static` → se accede mediante la clase; sin `static` → normalmente se accede mediante una instancia**.





IMPORTS 
si hago un import agregar el .js
#### Conceptos

##### Modulos ES
Habla de la individualidad de cada archivo , con lo que esto conlleva, que cada uno pueda tener una variable completamente igual pero no emitir ningun error. Incluso permite exportar e importar lo que necesite.
Un detalle interesante es que corre en modo estricto , es decir que convierte errores silenciosos en errores visibles.


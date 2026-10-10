
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


IMPORTS 
si hago un import agregar el .js
#### Conceptos

##### Modulos ES
Habla de la individualidad de cada archivo , con lo que esto conlleva, que cada uno pueda tener una variable completamente igual pero no emitir ningun error. Incluso permite exportar e importar lo que necesite.
Un detalle interesante es que corre en modo estricto , es decir que convierte errores silenciosos en errores visibles.


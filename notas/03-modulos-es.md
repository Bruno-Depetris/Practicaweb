## 1. ¿Qué es un módulo ES? Compáralo con `namespace`/`using` de C#. ¿En qué se parece y en qué **no**?

Habla de la individualidad de cada archivo , con lo que esto conlleva, que cada uno pueda tener una variable completamente igual pero no emitir ningun error. Incluso permite exportar e importar lo que necesite.
Un detalle interesante es que corre en modo estricto , es decir que convierte errores silenciosos en errores visibles.

## 2. El error del experimento con `file://`: ¿qué dice y por qué pasa? Pista: ¿cuál es el **origen** de una página abierta desde `file://`? Relaciónalo con lo que sabes de orígenes.
```

Access to script at 'file:///home/depe/proyectos/PracticaWEB/src/app/main.js' from origin 'null' has been blocked by CORS policy: Cross origin requests are only supported for protocol schemes: brave, chrome, chrome-experimental-site-token-provider, chrome-extension, chrome-untrusted, data, http, https, isolated-app.
```
Ese mensaje dice que fue bloqueado por la politica de cors. Solamente soporta protocolos de esquemas HTTP, HTTPS . En este caso estoy abriendo un  'file:///home/depe/proyectos/PracticaWEB/src/app/main.js'

## 3. ¿Por qué `export class X` y no `export default`? Investiga la diferencia y elige un argumento.

La diferencia principal radica en la naturaleza de la exportación: **`export class X`** es una **exportación con nombre** (named export), mientras que **`export default`** es una **exportación predeterminada**.
**`export class X`** ofrece mayor escalabilidad, claridad semántica y compatibilidad con herramientas de análisis estático, siendo la práctica estándar en aplicaciones JavaScript

## 4. 1. ¿Para qué separar `main.js` de `Aplicacion.js` si podría ir todo junto?

Podrian ir todo junto, pero es una mejor practica de desarrollo separarlos, ya que prioriza la mantenibilidad , la organizacion y la escalabilidad. Ademas el main es el arranque, un unico archivo que dice que debe iniciar como el program() 
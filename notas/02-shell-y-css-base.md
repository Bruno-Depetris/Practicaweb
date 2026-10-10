## 1.  ¿Qué es el shell y por qué está casi vacío?
El shell es un cascaron vacio, sirve para posteriormente y con javascript ir mostrando los distintos templates. 
Es como el abrirFormHijo que hacia en C#

```        
private void AbrirFormNuevo(Form FormHijo) {
                // Cerrar el formulario activo anterior
            if (FormActivo != null) {
                FormActivo.Close();
            }

            // Configurar el nuevo formulario
            FormActivo = FormHijo;
            FormHijo.TopLevel = false;
            FormHijo.FormBorderStyle = FormBorderStyle.None;
            FormHijo.Dock = DockStyle.Fill;
            panel_Contenedor.Controls.Add(FormHijo);
            panel_Contenedor.Tag = FormHijo;
            FormHijo.Show();
        }
```

## 2. ¿Para qué sirve el viewport?
El viewport es lo que le dice al navegador el escalado y tamaño que tiene la pantalla y como debe ajustar la pagina a la misma.


## 3. ¿Por qué importa el orden de los 3 CSS? Pista: busca "cascada CSS".
El orden importa ya que uno depende del otro.
1ro reset, se encarga de dejar formateada la pagina web , no necesita de ningun tipo de variable.

2do variable, declaramos las variables que vamos a estar utilizando, esto lo hago porque si despues necesito modificar algun estilo puedo hacerlo de un solo lugar.

3ro global, le da el estilo a la pagina principal , el mismo utiliza directamente las variables creadas en el variables.css

mejoras: 
El orden importa por la cascada CSS, cuando dos reglas compiten por el mismo elemento con la misma especificidad, gana la última declarada.  El reset va primero para que los estilos de global.css lo sobrescriban; las variables van en el medio porque :root no compite con ningún selector; y global.css va último para que sus reglas tengan prioridad sobre el reset.


## 4. ¿Qué ganas con las variables CSS? Compáralo con algo de C#.
Como nombre anteriormente en el apartado nr 3, las variables me sirven y ahorran el trabajo de estar modificando constantemente en todos lados si necesito cambiar un color. asignandole  color = var(--variable) a un elemento ya  directamente puedo cambiar esa --variable donde la declare y de esta forma mofico todo. 

En c# windows forms pasa algo similar cuando configuramos el form principal , el font , color y todas las propiedades del form principal se replican en los demas controles.

mejoras:
Las variables CSS originan en :root, que es el selector del elemento <html> (la raíz del documento). Al declararse ahí, heredan su valor hacia todos los descendientes, por lo que están disponibles en cualquier punto del DOM sin necesidad de redeclararlas.



## 5. El origen de Live Server.
Averigue un poco y el http://127.0.0.1:5500/ se utiliza porque 127.0.0.1 es la direccion de bucle invertido o localhost que apunta al propio ordenador y el puerto 5500 es el predeterminado configurado desde la extencion.
el origen es http://127.0.0.1:550/








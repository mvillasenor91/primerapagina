04/11/2018
**Bookmarklets, Array methods, String methods y Funciones**
- Un Bookmarklet es un marcador que hace referencia a una pequeña porcion de codigo JS para ejecutar ciertas tareas, por ejemplo cambiar el diseño de una pagina, mostrar informacion de enlaces o formularios, abrir una consulta directamente, etc.
- El metodo toString() convierte un arrar a un string (separado por comas) los valores del array.
- Hay metodos para unir todos los elementos del array a un string, para sacar o meter elementos al array, para remover elementos (al final), para agregar nuevos elementos (al final), para cambiar o sustituir elementos en el array por su numero index, etc.
- Una funcion consiste en la palabra funcion seguida del nombre de la funcion,  la lista de los parametros encerrados en un parentesis y separados por comas y los statements que definen la funcion encerrados en llaves.
Ejemplo:
function overwachu (Mei){
    return Mei*Mei;
}


28/10/2018
**Expresiones y operadores**
- En javascript se utilizan distintos tipos de operadores, por ejemplo de comparacion, aritmeticos, logicos, condicionales, comas, etc.
- Los operadores de asignacion asignan un valor a un operand, por ejemplo x=y.
- Destructuring, hace posible extrar datos de arrays u objetos.
- Operadores de comparacion, compara los operands y regresa un valor logico basado en donde la comparacion sea verdadera, los operands pueden ser numericos, strings, logicos o valores de objetos.
- Operadores aritmeticos, toman valores numericos como sus operands y regresan un sencillo valor numerico, los operadores aritmeticos son adicion, sustraccion, multiplicacion y division.
- Operadores logicos, son tipicamente usados con valores booleanos, los operadores son AND (&&), OR (||) y NOT(!).
- Operadores string, pueden ser usados en valores string, el operador (+) concatena 2 valores string juntos, regresa otro string como la union de los 2 strings anteriores.
- Operador condicional, es el unico operador en javascript que usa 3 operands, el operador puede tener uno o dos valores basados en una condicion, ejemplo : condicion ? val1 : val2.
- Operador coma, simplemente evalua ambos de sus operadores y regresa el valor del ultimo operand, este operador es principalmente usado dentro de un ciclo for, para permitir multiples variables ser actualizadas cada vez que entra en el ciclo.
- El operador delete borra un objeto, una propiedad del objeto o un elemento en un especificado index en un array.
- El operador typeof regresa un string indicando el tipo de un operando no evaluado, operand es un string, variable, letra o un objeto.
- El operador void especifica una expresion a ser evaluada sin tener que regresar un valor.
- El operador in regresa verdadero si la propiedad especificada esta en el objeto especificado.
- El operador instance of regresa true si el objeto especificado esta en el tipo  de objeto especificado.
- Se utiliza la palabra this para referirse a un objeto actual, en general this se refiere al llamado de un objeto en un metodo.
- El operador de agrupar () controla la precedencia de evaluacion en expresiones.
- El operador new se utiliza para crear una instancia de un tipo de objeto definido por el usuario o para agrupar tipos de objeto.
- La palabra super es usada para llamar funciones o al padre de un objeto, es utili con clases para llamar al padre constructor.

21/10/2018
**Control flow, loops e iteraciones.**
- Las sentencias de bloque se ponen entre dos llaves {} y son regularmente usadas con flujos de control como lo son el if, for, while, etc.
- La sentencia if ejecuta una condicion si es verdadera, si no, se puede usar la sentencia opcional else en caso de que la condicion sea falsa.
- Se pueden realizar else if anidados para tener multiples condiciones.
- Los valores falsy son: false, undefined, null, 0, Nan o un string vacio ("").
 - La sentencia switch evalua una expresion y la junta con el caso correspondiente.
 - Puedes atrapar excepciones o errores usando las sentencias de throw o try-catch.
 - Se puede usar catch para manejar todas las excepciones generadas en el bloque try.
- El bloque finally contiene sentencias que se ejecutan despues del bloque try-catch pero antes de que las sentencias sigan el try-tach.
- Dependiendo del tipo de error puedes usar las propiedades de nombre y mensaje para obtener un mejor mensaje, el nombre provee la clase generar del error mientra que el mensaje provee un mensaje mas completo.
- La sentencia for se repite hasta que una determinada condicion sea evaluada falsa, esta conformada por una expresion inicial, una condicion (la que es evaluada) y una expresion de incremento.
- La sentencia do-while se repite hasta que una determinada condicion sea evaluada como falsa.
- La sentencia while ejecuta la sentencia tan larga como lo sea la condicion especificada a evaluar como verdadera.
- La sentencia label provee una sentencia con un identificador que te ayuda a referirte a donde sea en el programa.
- La sentencia break se usa para terminar un loop, un switch o en conjunto con una sentencia label.
- La sentencia continue puede ser usada para reiniciar un while, do-while, for o una sentencia label.
- La sentencia for-in se refiere a una variable especifica sobre todas las propiedades ennumerables en un objeto.
- La sentencia for-of crea un loop sobre objetos iterables, incluyendo array,map,set o argumentos.
-  Se puede decir que la diferencia es que for-in itera sobre nombres de propiedades y for-of sobre el valor de las propiedades.


14/10/2018
**Expresiones regulares**
- Es un objeto que describe un patron de caracteres.
- Son usadas para realizar patrones de busqueda, reemplazo y validaciones.
- Su sintaxis es /patron/modificadores.
- Los modificadores se usan para realizar busquedas globales o casos insensitivos.
- Tambien manejan brackets que definen un rango de caracteres, por ejemplo [abc].



30/09/2018
**URI,URL y URN**
- URI significa Uniform Resource Identifier, es un identificador de recursos.
- Identifica una pagina de texto, un video, un clip de sonido, una imagen fija o un programa, es decir identifica un nombre o recurso en internet.
- URI tiene dos especializaciones (URL y URN).
- URL identifica un recurso y proporciona los medios para "localizar" el recurso mediante la descripcion de la forma de acceder a el.
- URN solo define un nombre, no proporciona detalles de como obtener el recurso en una red.    

09/09/2018
**Foundation**
- Inmensa cantidad de opciones de configuracion.
- Fuerte grid system.
- Provee un rapido desarrollo de codigo.
- Es facil utilizar templates descargables.
- Es ligero
- Es mas complejo cuando se intenta customizar.
- No es bueno para principiantes.

**Bootstrap**
- Un soporte de una comunidad inmensa.
- Mayor variedad de temas.
- Mayor rango de navegadores.
- Mas herramientas de desarrollo.
- No es tan ligero comprado con otros.
- Los sitios web son faciles de reconocer.
- Utiliza jquery

Ambos utilizan sass.

02/09/2018
**Tipos de display**
- Inline: Ocupa solo el espacio necesario para mostrar su contenido.
- Block: Empieza en una nueva linea, ocupa todo el espacio disponible hasta el final de su linea.
- None: El elemento no genera ninguna caja, desaparece de la pagina y no ocupa sitio.
- Inline-Block: Se comporta como si fuera de bloque, pero respecto a los elementos que la rodea es una caja en linea.
- Run-in: Genera un elemento de linea o de bloque dependiendo de sus elementos adyacentes.
- List-item: Cualquier elemento se muestra como si fuera un elemento de lista.
- Table: Hace que los elementos se muestren como parte de una tabla, fila, columna o celda.

**Box-model**
- Es el tamaño de la caja pero tomando en cuenta modificaciones del borde y el padding, lo que estiran mas el elemento.

**Box-sizing**
- Al ajustar un elemento con box-sizing: border-box, el borde y el padding no incrementan su ancho.
- Esta propiedad asegura que el tamaño del elemento siempre sera modificado de la manera mas intuitiva.

**Overflow**
- Visible: El contenido se sale del elemento y es completamente visible.
- Hidden: Oculta todos los contenidos que salen de la caja del elemento.
- Scroll: Se muestra un scroll sobre el elemento cuando su contenido no cabe en la caja.
- Auto: El navegador toma la decision de mostrar o no las barras de scroll.

**Posicion**
- Static: Es un valor predeterminado y el posicionamiento normal de los elementos en la pagina, es decir, los elementos se colocan segun el flujo normal de html.
- Relative: Su posicion depende del lugar donde se encuentre en el codigo y el flujo de html, admite los valores top, left, etc para definir la distancia a la que se coloca con respecto al punto donde este en ese momento en el flujo de html.
- Fixed: Lo posiciona en un espacio absoluto, es decir su posicion siempre sera fija aunque se desplace el documento con las barras de desplazamiento.
- Absolute: Posiciona elementos de manera absoluta, se define por los valores top, left, bottom, right, queda aparte del flujo normal de html (no se afectan por el lugar donde aparezcan en el codigo ni afectan a otros elementos que formen parte del flujo).


19/08/2018

**Material design (branded 2014 google)**
- Diseno unificado para aplicaciones moviles.
- Se basa en objetos materiales, agrupados a traves de diferentes capas para conseguir una apariencia de relieve con sombras y colores planos.
- Usa animaciones y transiciones logicas (siguiendo las leyes de la fisica).

**Flat design (2001 apple)**
- Diseno plano, estilo minimalista enfocado a la funcionalidad.
- Se basa en priorizar la comunicacion evitando adornos que puedan distraer.
- Deja atras los degradados, texturas, sombras, da prioridad a la iconografia, los colores, tipografica y la fotografia.


**Diferencias:**
- Flat design es ideal para usuarios que estan en sintonia con la interaccion digital, mientras que material design tiene una respuesta mas reactiva a la accion del usuario.
- Material design puede parecer esteticamente plano (colores), pero es multidimensional, toma en consideracion el eje Z.
- Ambos tienen enfoques minimalistas, pero material design intenta juntar el mundo real y el digital.
- Flat design no tiene esqueumorfismos mientras que material design lo utiliza sutilmente.
- Flat design es mejor para las necesidades simplistas, mientras que material design es para necesidades mas complejas.
- Flat design es mas facil de desarrollar y mas rapido de cargar.
- Material design es mas robusto que flat design, es un ecosistema no solo un estilo.
- Material design es interactivo y tiene un sentido de la fisica.
- Material design es una evolucion de flat design.




Esqueumorfismo: tecnica de diseno en que un objeto derivado tiene ornamentos que eran necesarios en los objetos originales.

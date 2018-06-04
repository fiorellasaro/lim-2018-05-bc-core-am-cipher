# Cifrado César

## Preámbulo

Está próxima la fecha del cumpleaños de tu flacx (novix) y estás organizando una
fiesta sorpresa. Para organizar la fiesta has creado un grupo de Whatsapp junto
con amigos y familiares.

Un gran problema es que pones tu alarma para levantarte temprano, sin embargo
(como supondrás) eso nunca sucede y tu flacx es quien termina apagando la alarma
y "de casualidad" revisando tus mensajes. Debido a que es algo sorpresa, decides
crear una aplicación que te permita enviar mensajes cifrados y que las demás
personas (partícipes de la fiesta) puedan tener una interfaz para
descifrarlo. Así que ahora te toca aplicar tus superpoderes 😎

## Introducción

El [cifrado César](https://en.wikipedia.org/wiki/Caesar_cipher) es uno de los
primeros métodos de cifrado conocidos históricamente. Es un tipo de cifrado por
sustitución en el que una letra en el texto original es reemplazada por otra
letra que se encuentra un número fijo de posiciones más adelante en el alfabeto.

![caeser-cipher](https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Caesar3.svg/2000px-Caesar3.svg.png)

El emperador Julio César lo usaba para enviar órdenes a sus generales en los
campos de batalla, es una de las técnicas más simples y más usadas para cifrar
un mensaje.

Por ejemplo si usáramos un desplazamiento de 3:

* Alfabeto sin cifrar: A B C D E F G H I J K L M N O P Q R S T U V W X Y Z
* Alfabeto cifrado: D E F G H I J K L M N O P Q R S T U V W X Y Z A B C

Actualmente todos los cifrados de sustitución alfabética simple, se descifran
con facilidad y en la práctica no ofrece mucha seguridad en la comunicación,
pero el cifrado César muchas veces puede formar parte de sistemas más complejos
de codificación, como el cifrado Vigenère, e incluso tiene aplicación en el
sistema ROT13.

## Objetivos

El objetivo principal de aprendizaje de este proyecto es tener tu primera
experiencia construyendo una aplicación web usando tus conocimientos de **User
Experience Design** y de **JavaScript**. Esto incluye diseñar un producto
pensando en los usuarios, construir una interfaz, escuchar eventos básicos del
DOM, escribir lógica para llevar a cabo el cifado/descifrado, tests unitarios
básicos para comprobar (y documentar) dicha lógica, y finalmente manipulación
del DOM para mostrar (escribir) los resultados.

Para completar el proyecto tendrás que familiarizarte con conceptos como
[valores, tipos, variables](https://github.com/Laboratoria/curricula-js/tree/v2.x/topics/javascript/01-basics),
[control de flujo](https://github.com/Laboratoria/curricula-js/tree/v2.x/topics/javascript/02-flow-control)
y [tests unitarios](https://github.com/Laboratoria/curricula-js/tree/v2.x/topics/testing).

Esperamos que en este proyecto puedas pensar en el usuario, entendiendo quién es
y su necesidad. La idea es que logres entender qué necesita el usuario para el
que crearás el producto y le ayudes a resolver esa necesidad de la mejor manera
posible.

Además, que puedas organizarte teniendo en cuenta el tiempo y los recursos
disponibles. Es la primera vez que evaluaremos tus habilidades blandas, pero debes
considerar que son habilidades que probablemente ya has utilizado en distintas
experiencias de tu vida. Lo importante es que realices el proyecto de manera
integral.


##¿Quiénes son los principales usuarios de producto?

Los principales usuarios del producto, en este caso, son los amigos y familiares de la cumpleañera.
Consideraciones a tener en cuenta sobre los usuarios:

###Son de edades diversas, por lo tanto, generaciones distintas:
 Este punto es importante ya que la interfaz del usuario debe ser fácil de comprender para todos. Habrán casos donde los usuarios entrarán a la aplicación web y sabrán intuitivamente qué hacer y otros casos donde no necesariamente pasará eso por lo que se decidió que la interfaz contenga instrucciones para aquellas personas que tengan dificultad y así sepan exactamente qué hacer. Es importante destacar que la visualización de las instrucciones será opcional para que la aplicación web no contenga tantos textos explicativos.

###Todos son cercanos a la cumpleañera, por lo que saben lo minimo de sus gustos:
Este punto se consideró para determinar la paleta de colores. La aplicación web fue creada para que entre amigos y familiares se envíen "mensajes secretos" para poder comunicarse tranquilamente sin que la cumpleañera se entere de la fiesta sorpresa, por lo que los colores e imagenes a elegirse tienen mucha relación con el fin del aplicativo web: Una fiesta.
Los colores escogidos para la interfaz tienen estrecha relación con los gustos personales de la cumpleañera; así, todos los usuarios que están relacionados con la cumpleañera, al entrar al aplicativo web, se sentirán familiarizados tanto con la fiesta sorpresa como con la persona a homenajear. 

##¿Cuáles son los objetivos de estos usuarios en relación con el producto?
Los objetivos de los usuarios en relación al producto son los siguientes:
1. Que al escribir un mensaje en el aplicativo web, se pueda obtener ese mensaje cifrado para así poder comunicarse de manera secreta con los demás usuarios, en este caso, los amigos y familiares de la cumpleañera.
2. Que al escribir o copiar un mensaje cifrado en el aplicativo web, se pueda obtener el mensaje decifrado para asi poder entender cuál era el mensaje y poder responder de la misma manera con otro mensaje cifrado.
3. Comunicarse de manera secreta con otra persona.

##¿Cómo crees que el producto que estás creando les está resolviendo sus problemas?
El producto creado es ideal para poder escribir cualquier mensaje y que este sea cifrado. Acepta tanto letras mayúsculas como minúsculas, así como también símbolos y espacios. A su vez también se puede colocar en el aplicativo web un texto ya cifrado y poderse decifrar (siempre y cuando entre usuarios se hayan compartido el número de desplazamientos que generó el texto cifrado).

##Prototipado:
Se crearon 4 prototipos para el diseño de la interfaz.
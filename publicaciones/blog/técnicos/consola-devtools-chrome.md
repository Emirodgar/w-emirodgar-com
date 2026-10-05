---
title: Trucos para usar la consola de Google Chrome
description: "Trucos para la consola y DevTools de Chrome: capturas, user-agent, utilidades como $0 o copy(), live expressions, datos de GA4 y la nueva ayuda con IA de Gemini."
lang: es_ES
author: Emirodgar
sitemap: 1
feed: 1
folder: programacion
layout: emirodgar_post
date: 03/02/2022
image: https://emirodgar.com/cdn/images/og/estrategia-seo.png
permalink: consola-devtools-chrome

---

En cualquier navegador Google Chrome podemos pulsar la tecla `F12` y automáticamente se nos abrirá un panel a través del cuál podremos analizar lo que ha ocurrido en la web que estamos viendo o incluso podremos interactuar con la misma.

Veamos algunas de las funcionalidades de las que podemos hacer uso. 

> **Actualizado en octubre de 2026**: he revisado todos los trucos, he sustituido lo que se había quedado obsoleto (Universal Analytics, AMP, enlaces de documentación) y he añadido las utilidades de la consola, los *live expressions* y las novedades de DevTools con IA.

## Cómo abrir DevTools y moverte más rápido

Además de `F12`, tienes estas opciones:

- `Control` + `Shift` + `I` (`Cmd` + `Option` + `I` en Mac): abre DevTools.
- `Control` + `Shift` + `J`: abre directamente la pestaña Console.
- `Control` + `Shift` + `C`: activa el selector de elementos para inspeccionar cualquier parte de la página.
- `Control` + `Shift` + `P`: el menú de comandos que usaremos varias veces en este post.
- `Esc`: despliega o esconde el panel de consola en la parte inferior mientras estás en otra pestaña, como Elements o Network.

## Hacer una captura de la pantalla

Solemos recurrir a extensiones para hacer una captura parcial o total de la pantalla que estamos visualizando, no obstante, el navegador nos ofrece una opción para hacerlo a través de la consola.

Para ello, una vez que tengamos la consola abierta tras haber pulsado `F12` abriremos el menú de comandos pulsando `Control` + `Shift`  + `P`.

Aparecerá una ventana con "Ejecutar > Comando" donde podremos escribir directamente acciones. En nuestro caso debemos teclear `screenshot` y pulsar `enter` sobre la opción que más nos interese.

![Consola Google Chrome - hacer captura de pantalla - screenshot](https://i.imgur.com/SrVkxkq.png){:class="img-responsive"}

En el caso de que queramos una captura de toda la pantalla, seleccionaremos la opción de "Hacer captura de pantalla de tamaño completo".

Las opciones disponibles son cuatro:

- **Área**: arrastras para seleccionar la zona que quieres.
- **Tamaño completo**: toda la página, hasta el footer.
- **Nodo**: captura solo un elemento. Primero lo seleccionas en la pestaña Elements y luego ejecutas "Capture node screenshot".
- **Captura visible**: solo lo que se ve en pantalla en ese momento.

La captura de nodo es muy útil para sacar una imagen limpia de una tabla, un banner o un componente concreto sin tener que recortar después.

## Simular el acceso como un buscador o con un navegador y dispositivo diferente

En ciertas ocasiones, por ejemplo cuando queremos validar un pre renderizado para un robot de búsqueda, necesitamos [cambiar el user-agent](https://emirodgar.com/cambiar-user-agent-chrome) con el que estamos accediendo. Desde la consola podemos hacer estos ajustes de forma sencilla. Bastará con seleccionar los tres puntos situados en el extremo superior derecha > Más herramientas y Condiciones de red.

![Consola Google Chrome - cambiar user agent googlebot](https://i.imgur.com/8PNIJuX.png){:class="img-responsive"}

Debajo se desplegará el menú de Condiciones de red donde debemos desactivar la opción de "Usar predeterminado del navegador". Ahora tendremos dos opciones, podemos desplegar el combo y seleccionar uno de los `user-agent` que viene por defecto o podemos usar la caja de abajo para introducir el que nosotros queramos. 


## Obtener listado de variables y objetos creados

Si queremos conocer qué variables están disponibles tanto en el entorno del navegador como los asociados a la página o aplicación web, podemos usar los siguientes comandos:

-   `keys(window)`  para ver las variables
-   `dir(window)`  para ver los objetos

Otra posibilidad sería hacer uso directamente del objeto `window.` y navegar por las diferentes opciones que nos ofrece. Desde aquí podremos acceder a todas las variables públicas, tanto del navegador como de la página.

Otra opción sería invocar directamente el objeto `this` para recibir un listado completo de todas las opciones que tenemos disponibles.

## Utilidades que solo existen en la consola

La consola incluye una serie de atajos que no forman parte de JavaScript estándar y que solo funcionan dentro de DevTools. Estos son los que más uso:

- `$0`: devuelve el último elemento que has seleccionado en la pestaña Elements (`$1` a `$4` son los anteriores). Perfecto para manipularlo sin tener que buscarlo con un selector.
- `$_`: devuelve el resultado de la última expresión evaluada.
- `$('selector')` y `$$('selector')`: equivalen a `document.querySelector()` y `document.querySelectorAll()`, y el segundo ya te devuelve un array.
- `$x('//h1')`: busca elementos con una expresión XPath.
- `copy(objeto)`: copia al portapapeles cualquier objeto o resultado. Ideal para extraer datos, por ejemplo `copy($$('h2').map(h => h.innerText))` para tener todos los H2 de la página.
- `getEventListeners($0)`: lista los eventos asociados a un elemento.
- `monitorEvents($0, 'click')`: muestra en la consola cada vez que se dispara ese evento (se detiene con `unmonitorEvents`).
- `monitor(funcion)`: registra el nombre y los argumentos cada vez que se llama a una función.
- `queryObjects(Constructor)`: devuelve todos los objetos creados con un constructor, útil para detectar fugas de memoria.

Con `$$` y `copy` puedes, por ejemplo, listar todos los enlaces de una página con su texto:

    copy($$('a').map(a => `${a.innerText.trim()} | ${a.href}`).join('\n'))

Tienes la lista completa en la [documentación oficial de las utilidades de la consola](https://developer.chrome.com/docs/devtools/console/utilities).

## Vigilar valores en tiempo real con Live Expressions

Si te encuentras escribiendo una y otra vez la misma expresión, puedes fijarla arriba del todo de la consola. Pulsa sobre el icono del ojo, escribe la expresión y su resultado se actualizará cada 250 milisegundos.

Algunos ejemplos útiles:

- `document.activeElement`: para saber en todo momento qué elemento tiene el foco.
- `window.scrollY`: para ver la posición del scroll.
- `dataLayer.length`: para comprobar si la capa de datos recibe nuevos eventos mientras navegas.


## Limpiar la consola

Cuando hay un exceso de mensajes, podemos limpiar la consola de nuestro navegador simplemente haciendo clic con el botón derecho y seleccionando clear console.

También lo podemos hacer a través de código tecleando `clear()`.

> Si en opciones tenemos habilitada la opción de **Preserve log**, el comando `clear()` no funcionará por lo que tendremos que hacerlo a través del menú contextual.

## Usar los logs

A la hora de desarrollar podemos enviar avisos a la consola directamente desde nuestra aplicación. Para ello usaremos los siguientes comandos:

- `console.log("texto")`: para un mensaje normal
- `console.warn("texto")`: para un mensaje de aviso
- `console.error("texto")`: para un mensaje de error


Esto nos va a permitir identificar de forma rápida lo que está ocurriendo en la página.

Además de estos tres, hay otros métodos de `console` que se usan mucho menos de lo que merecen:

- `console.table(datos)`: pinta arrays y objetos como una tabla ordenable. Muy cómodo para revisar, por ejemplo, el contenido de `dataLayer`.
- `console.group('título')` y `console.groupEnd()`: agrupa mensajes para que el log sea legible.
- `console.time('etiqueta')` y `console.timeEnd('etiqueta')`: mide cuánto tarda en ejecutarse un bloque de código.
- `console.count('etiqueta')`: cuenta cuántas veces se ha pasado por un punto.
- `console.assert(condicion, 'mensaje')`: solo escribe en la consola si la condición es falsa.
- `console.trace()`: muestra la pila de llamadas que ha llevado hasta ese punto.

También puedes dar formato a los mensajes con `%c`:

    console.log('%c¡Atención!', 'color: white; background: #d33; padding: 2px 6px; border-radius: 3px')

Y si un mensaje te interesa de verdad, usa el filtro de la consola para quedarte solo con un nivel (errores, avisos, info) o con un texto concreto.

## Hacer debug

Si hacemos uso de `debugger` podremos probar directamente el código javascript dentro de la consola. También podemos ir directamente a la pestaña Sources y analizar cualquier fichero Javascript para depurar su ejecución.

Desde la propia consola puedes poner un punto de parada sobre una función con `debug(nombreFuncion)`: cuando alguien la invoque, la ejecución se detendrá. Se retira con `undebug(nombreFuncion)`.

En la pestaña Sources también puedes usar **Local Overrides** (sustituciones locales) para modificar un archivo JavaScript o CSS de una web y que Chrome use tu versión cada vez que recargues. Es una forma muy rápida de probar un cambio en producción sin tocar el servidor.

Google dispone de un [tutorial básico](https://developer.chrome.com/docs/devtools/javascript) pero completo.

## Entender los errores con la IA de Gemini

Chrome ha incorporado a DevTools asistencia con IA, que a día de hoy es lo más novedoso del panel. Para activarla necesitas iniciar sesión con tu cuenta de Google y habilitar las funciones de IA en `Ajustes > AI innovations`.

Estas son las opciones más interesantes:

- **Console Insights**: al pasar el cursor sobre un error de la consola aparece la opción "Understand this error". Gemini te explica qué significa y te sugiere cómo corregirlo.
- **Panel de AI assistance**: te permite preguntar en lenguaje natural sobre la página. Desde la versión 147 de Chrome selecciona el contexto de forma automática, así que puedes hacer preguntas abiertas como "¿por qué tarda tanto esta petición?" sin tener que seleccionar antes el elemento o la petición. En versiones posteriores también tiene acceso a los datos de Lighthouse y muestra widgets con las métricas Core Web Vitals, el elemento LCP o las peticiones de red.
- **Autocompletado de código**: escribe un comentario describiendo lo que quieres, por ejemplo `// Recorrer todas las imágenes y comprobar si tienen atributo alt`, y pulsa `Control` + `I` para que genere el código en la consola.

> Ten en cuenta que, al usar estas funciones, el contenido que consultes (mensajes de la consola, peticiones de red, código) se envía a Google. Evita usarlas con datos sensibles o de clientes.

Si trabajas con agentes de código, Google también ha lanzado **DevTools para agentes** (basado en el servidor MCP de Chrome DevTools). Permite que un agente como Claude Code lea la consola, el tráfico de red o el árbol de accesibilidad de una página para verificar y corregir cosas por sí mismo. Puedes ver más información en las [novedades de Chrome de Google I/O 2026](https://developer.chrome.com/blog/chrome-at-io26).

## Analizar Google Analytics

Universal Analytics dejó de procesar datos en julio de 2023, así que el antiguo objeto `ga` y la extensión Google Analytics Debugger ya no sirven para las propiedades actuales. Con GA4 tenemos otras vías.

Para ver qué se envía a Google Analytics, abre la pestaña **Network** y filtra por `collect`. Cada petición a `google-analytics.com/g/collect` es un evento, con sus parámetros en la pestaña Payload.

Para validar la implementación en tiempo real, lo más cómodo es **DebugView** dentro de GA4 (Administrar > DebugView), que muestra los eventos de tu navegador en cuanto activas el modo de depuración, por ejemplo con [Tag Assistant](https://tagassistant.google.com/) o con el parámetro `debug_mode`.

También podemos interactuar con `gtag` desde la consola para, por ejemplo, obtener el client ID:

    gtag('get', 'G-XXXXXXXXXX', 'client_id', console.log)

En esta otra publicación te explico cómo [obtener el client ID de analytics con JavaScript](https://emirodgar.com/obtener-ua-analytics-javascript). Y si usas Google Tag Manager, puedes activar el modo de vista previa para ver qué etiquetas se disparan y con qué datos.

## Trabajar con la capa de datos

También podemos interactuar de forma directa con la capa de datos. Por ejemplo, el siguiente código lanzará un evento directamente en la página. Si tenemos un listener asociado al mismo podría ver en tiempo real si éste funciona.

    window.dataLayer = window.dataLayer || [];  
    dataLayer.push ({  
    'event': 'erg_contacto'  
    })

## Inspeccionar cookies

Desde la pestaña `Application` también puedes inspeccionar las cookies que está generando la página, incluido el valor de su atributo [SameSite](https://emirodgar.com/cookies-samesite), muy útil para depurar problemas de terceros o de sesión.

Y si lo que quieres es navegar sin publicidad molesta, [aquí tienes cómo bloquearla](https://emirodgar.com/quitar-publicidad-web) usando también la propia consola para identificar los elementos a ocultar.

## Validar páginas AMP

> AMP ha perdido protagonismo desde que Google dejó de exigirlo para aparecer en el carrusel de Noticias, por lo que hoy solo te hará falta si mantienes una web que todavía lo usa.

También podemos usar la consola de Chrome para validar páginas AMP. Para ello bastará con que a la URL le añadamos `#development=1` y recarguemos de nuevo la página.

Por defecto, el mensaje que recibiremos será:

    Powered by AMP ⚡ HTML – Version 1911062056110 https://emirodgar.com/consola-devtools-chrome

Una vez incluido la variable development=1 en la URL recibiremos un valor adicional informándonos de si la versión AMP es válida o si por el contrario ha habido algún error.

    AMP validation successful.

<!--stackedit_data:
eyJoaXN0b3J5IjpbODU2MzU0MTY1LDI2Njk2NTI3MiwtODkxNT
YzODg2LC0zMjE5MDQ1OTQsLTkwMDQ2NDU0OCwtMjAxNDE2NDI0
OCwtMTA2ODk1NzI0LDMxNjM0ODQwMCw0Mjc4MDM5NDgsLTEwMT
A2NjIxMywtNTExNjQxMzM2LDU2NzQ0NDMxMywxODIxNTg5MzE4
LC02OTE5OTQyODMsLTg2NjAzMzEyMV19
-->
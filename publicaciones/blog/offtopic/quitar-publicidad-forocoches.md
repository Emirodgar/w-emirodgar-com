
---
title: Cómo eliminar la publicidad en Forocoches
description: 
image: https://emirodgar.com/cdn/images/og/emirodgar.png
layout: emirodgar_post
author: Emirodgar
lang: es_ES
sitemap: 1
feed: 1
folder: analitica
permalink: quitar-publicidad-web

--- 

Con cerca de 15 años de experiencia en marketing digital soy un firme defensor de la publicidad digital siempre que sea **comedida** y **aporte cierto valor a los potenciales usuarios**. 

En algunos casos nos enfrentamos a tal sobreexposición de publicidad que afecta negativamente a nuestra experiencia en dicha página.  Esta guía para bloquear publicidad sirve para cualquier página, aunque me centraré en Forocoches ya que es de donde he sacado los ejemplos visuales.

## Navegar de forma segura y sin publicidad

Si lo que queremos es navegar de forma segura, cómoda y privada mi primera recomendación sería optar por un navegador que se preste a ello, por ejemplo [Brave](https://brave.com/es/). Existen otras alternativas como Opera, Vivaldi, Tor, Iceraven o Librewolf pero no todas ellas son multidispositivo o pueden ser complejas de configurar.

En el caso de que hagamos uso de Chrome o Firefox, necesitaremos instalar una extensión que nos permita gestionar y anular la publicidad en las páginas por las que navegamos. En el caso de Firefox recomiendo [utilizar esta herramienta](https://ffprofile.com/) para generar un perfil de navegación acorde a lo que buscamos.  

## Instalar un bloqueador 

El primer paso será instalar un bloqueador en nuestro navegador que, de forma automática, nos permita visualizar anuncios aceptables (no instrusivos o molestos) pero que bloquee el resto, especialmente los que se activan a través de popups.

> Los anuncios aceptables son anuncios que no son intrusivos o molestos. Son respetuosos, no interfieren con el contenido y están claramente etiquetados con la palabra “anuncio” o su equivalente.

Casi todos los navegadores permiten instalar extensiones por lo que recomendaría optar por [Adblock](https://chrome.google.com/webstore/detail/adblock-%E2%80%94-best-ad-blocker/gighmmpiobklfepjocnamgkkbiglidom?hl=es) o [Ublock Origin](https://chrome.google.com/webstore/detail/ublock-origin/cjpalhdlnbpafiamejdnhcphjbkeiagm?hl=es). Los enlaces son para Chrome, si navegamos con Firefox los podremos encontrar en su sección de addons ([Adblock](https://addons.mozilla.org/es/firefox/addon/adblock-for-firefox/) / [Ublock](https://addons.mozilla.org/es/firefox/addon/ublock-origin/)).

Una vez instalado, sin necesidad de hacer nada más, bloqueará todo lo que considere que es un anuncio intrusivo.

## Bloquear publicidad dinámica

¿Qué ocurre si después de instalar un bloqueador sigue apareciendo publicidad o quedan huecos en blanco? será debido a que nuestro bloqueador no lo identifica de forma correcta o no es capaz de ocultar todo pero no pasa nada, podemos hacerlo de forma manual.

Para ello bastará con que hagamos click con el botón derecho en la página, seleccionamos Adblock y hacemos clic sobre Ocultar algo en esta página.

![Emirodgar](https://i.imgur.com/6RSeRbp.png){:class="img-responsive"}

A continuación nos aparecerá una ventana que nos indica que hagamos clic sobre la parte que queremos ocultar. Seleccionaremos por tanto la publicidad o el hueco en blanco que haya quedado. 

![Emirodgar](https://i.imgur.com/MQOfMLv.png){:class="img-responsive"}

Una vez hecho, nos indicará el elemento que hemos seleccionado para ocultar. Si no fuera el adecuado podemos desplazar la barra (punto rojo) para llegar al objeto concreto que queremos ocultar. Una vez hecho, le damos a "está bien" y pasamos a la siguiente pantalla.

![Emirodgar](https://i.imgur.com/m3t7xqs.png){:class="img-responsive"}

Si Adblock detecta que estamos ocultando un elemento muy genérico (como es el ejemplo que estoy usando) nos advertirá con un mensaje de alerta. En este caso básicamente estaríamos intentando ocultar todos los campos `<td>` de la página, lo que se llevaría por delante elementos relevantes y rompería la visualización de la misma.

![Emirodgar](https://i.imgur.com/Gle3xH9.png){:class="img-responsive"}

No hay problema, antes de confirmar, pulsamos sobre el lápiz para editar el elemento que queremos ocultar y sustituimos el que viene por el correcto. Una vez hecho pulsamos sobre el check en verde y pulsamos sobre confirmar.

**¿Y si no soy capaz de identificar correctamente el elemento a ocultar?** los filtros, tanto en Adblock como Ublock o el resto de bloqueadores se basan en rutas `XPath`.

Tanto en Chrome como en Firefox contamos con una [consola](https://emirodgar.com/consola-devtools-chrome) que se despliega al pulsar F12 y donde podemos ver, entre otras cosas, el código fuente de la misma.

Si seleccionamos el elemento que queremos ocultar, pulsamos sobre Copiar y terminamos en Copiar XPath completo tendremos el filtro listo para ser usado en nuestro bloqueador.

![Emirodgar](https://i.imgur.com/YQc8An5.png){:class="img-responsive"}

Por supuesto existen otras alternativas mucho más accesibles como [XPath Helper](https://chrome.google.com/webstore/detail/xpath-helper/hgimnogjllphhhkhlmebbmlgjoejdpjl) que se instalan como extensiones de nuestro navegador.

## Compartir los filtros dinámicos a ocultar

Si alguien ha hecho ya el trabajo para identificar los elementos a ocultar de una página, podemos ir directamente a las opciones de configuración de nuestro navegador (el ejemplo que os pongo es Adblock pero todos ellos trabajan de la misma forma), editar los filtros y añadir los que tenemos. Lo haremos a través de la opción de "Personalizar" y luego "Editar manualmente tus filtros".

![Emirodgar](https://i.imgur.com/rf3odcU.png){:class="img-responsive"}

En el caso de Forocoches, a día de hoy los filtros que funcionan son los siguientes (generados por @Maverik84):

    https://www.forocoches.com###fcthread
    https://www.forocoches.com##table.cajasprin:nth-of-type(2) > tbody:nth-of-type(1) > tr:nth-of-type(1) > td:nth-of-type(1)
    https://www.forocoches.com###vbnotices > .tborder > tbody:nth-of-type(1) > tr:nth-of-type(1) > .alt1
    https://www.forocoches.com###vbnotices > .tborder
    https://www.forocoches.com##.page > div > .cajasprin > tbody > tr > td > div

Bastará con copiarlos y pegarlos en los filtros de nuestro bloqueador para poder navegar por Forocoches libres de publicidad molesta.




<!--stackedit_data:
eyJoaXN0b3J5IjpbMTEwNzg0MjYyMywtMTcwMDA4ODk0MSwtNz
kxNTg0MDg5LC0xNjA0NTg0OTE2XX0=
-->
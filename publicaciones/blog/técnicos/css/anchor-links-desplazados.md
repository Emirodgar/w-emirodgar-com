---
title: Cómo desplazar un Anchor Link (enlace interno) con CSS
description: 
image: https://emirodgar.com/cdn/images/og/emirodgar.png
layout: emirodgar_post
author: Emirodgar
lang: es_ES
sitemap: 1
feed: 1
folder: seo
permalink: anchor-links-desplazados-css

--- 

Los Anchor Links son utilizados en las páginas web para desplazarnos de forma interna por la misma. Por ejemplo, si tenemos varios apartados en el menú, haciendo clic en cada enlace podemos navegar -sin cambiar de URL- hasta cada una de las diferentes secciones.

Para hacerlo funcionar no hace falta `JavaScript` sino simplemente `HTML`. 

El primer paso será identificar cada sección dentro de nuestra página a la que posteriormente apuntaremos con los enlaces. Para ello haremos uso del atributo `id` de la siguiente manera: 

    <div id="contacto"></div>

El siguiente paso será incluir un enlace que nos permita navegar de forma directa hasta este elemento. Lo haremos especificando en el atributo `href` el mismo valor que hemos asociado al `id` del elemento pero utilizando el símbolo `#` de la siguiente forma:

    <a href="#contacto">Contacto</a>

Hasta aquí todo correcto. De esta forma nos desplazaremos hasta el elemento que hemos seleccionado, pero ¿qué pasa si disponemos de un menú fijo? pues que parte de este elemento (lo que ocupe dicho menú) quedará oculto lo que podría ocasionar confusión a los usuarios.

¿Cómo desplazamos la navegación de un Anchor Link?
<!--stackedit_data:
eyJoaXN0b3J5IjpbLTE1MDIwOTk2MjBdfQ==
-->
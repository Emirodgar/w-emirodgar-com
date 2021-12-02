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

El siguiente paso será incluir un enlace que nos permita navegar de forma directa hasta este elemento. Lo haremos de la siguiente manera:

    <a href="contacto">Contacto</a>

<!--stackedit_data:
eyJoaXN0b3J5IjpbNjM0ODc5NzI3XX0=
-->
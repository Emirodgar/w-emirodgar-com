---
title: Cómo desplazar un Anchor Link (enlace interno) con CSS
description: 
image: https://emirodgar.com/cdn/images/og/emirodgar.png
layout: emirodgar_post
author: Emirodgar
lang: es_ES
sitemap: 1
feed: 1
date: 27/01/2022
folder: programacion
permalink: anchor-links-desplazado-css

--- 

Los Anchor Links son enlaces utilizados en las páginas web para desplazarnos de forma interna por la misma hacia una parte concreta del contenido. Por ejemplo, si tenemos varios apartados en el menú, haciendo clic en cada enlace podemos navegar -sin cambiar de URL- hasta cada una de las diferentes secciones dentro de la misma página.

Para hacerlo funcionar no hace falta `JavaScript` sino simplemente `HTML`. 

El primer paso será identificar cada sección dentro de nuestra página a la que posteriormente apuntaremos con los enlaces. Para ello haremos uso del atributo `id` de la siguiente manera: 

    <div id="contacto"></div>

El siguiente paso será incluir un enlace que nos permita navegar de forma directa hasta este elemento. Lo haremos especificando en el atributo `href` el mismo valor que hemos asociado al `id` del elemento pero utilizando el símbolo `#` de la siguiente forma:

    <a href="#contacto">Contacto</a>

Hasta aquí todo correcto. De esta forma nos desplazaremos hasta el elemento que hemos seleccionado, pero ¿qué pasa si disponemos de un menú fijo? pues que parte de este elemento (lo que ocupe dicho menú) quedará oculto lo que podría ocasionar confusión a los usuarios.

## ¿Cómo desplazamos la navegación de un Anchor Link?

Existen varias formas de poder llevar a cabo un desplazamiento tras hacer clic en un anchor link, no obstante, la que más me gusta es hacer uso del [pseudoelemento](https://developer.mozilla.org/es/docs/Web/CSS/Pseudo-elements) `before` a nivel de CSS para especificar un alto en píxeles que nos permita desplazar ese elemento.

```
 #nosotros:before {    
  display: block;    
  content: "";    
  height: 60px;    
  margin: -60px  0  0;    
}
```

Existen más formas de abordar esta solución a través de CSS por lo que si no os gusta el hecho de tener que usar pseudoelementos [os comparto el siguiente artículo](https://nicolasgallagher.com/jump-links-and-viewport-positioning/demo/) donde explican en detalle otras aproximaciones.
<!--stackedit_data:
eyJoaXN0b3J5IjpbLTk0NzU4ODc1LC0xOTk0NzM2NjI0LC0yOT
AzMzU0NjVdfQ==
-->
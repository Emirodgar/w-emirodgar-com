---
title: Cómo interpreta Google la almohadilla en una URL
description: La almohadilla es utilizada para acceder a una parte concreta de la página web.
image: https://emirodgar.com/cdn/images/og/auditoria.png
layout: emirodgar_post
sitemap: 1
feed: 1
folder: seo
author: Emirodgar
permalink: url-almohadilla-seo

---

Según las [recomendaciones de la W3C](https://www.w3.org/Addressing/URL/4_URI_Recommentations.html), la almohadilla `#` debe ser utilizada para separar la URL y poder identificar un fragmento de la página de destino.

Por ejemplo, si queremos enlazar a la página de `/razas-de-perros` y queremos llevar al usuario directamente a Pastor Alemán, tendríamos que hacerlo de la siguiente manera: `/razas-de-perros#pastor-aleman`.

Este comportamiento sólo ocurre en el navegador de cliente por lo que a ojos del servidor web es irrelevante.

En un principio Google se alineó con la W3C y fue claro al indicar que los fragmentos de URLs **no serían tenidos en cuenta en sus rastreos y posteriores análisis** ya que no eran tenidos en cuenta como parte de la petición HTTP.

## Los problemas para indexar AJAX

Con la proliferación de AJAX surgió la necesidad de hacer indexables ciertas aplicaciones/webs que se cargaban únicamente desde una URL (algo similar a lo que hace ahora Angular).

En este escenario y para avanzar con la [indexación de JavaScript](https://developers.google.com/search/docs/advanced/javascript/javascript-seo-basics), Google abrió la puerta a utilizar `#` para poder informar al robot de búsqueda de nuevas páginas.



<!--stackedit_data:
eyJoaXN0b3J5IjpbMTM4OTM2OTA5NCwtMTI3MTUxODQ0NV19
-->
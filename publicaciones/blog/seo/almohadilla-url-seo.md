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

Por ejemplo, si queremos enlazar a la página de `/razas-de-perros` y queremos llevar al usuario directamente a la raza Caniche, tendríamos que hacerlo de la siguiente manera: `/razas-de-perros#caniche`.

Este comportamiento sólo ocurre en el navegador de cliente por lo que a ojos del servidor web es irrelevante.En un principio Google se alineó con la W3C y fue claro al indicar que los fragmentos de URLs **no serían tenidos en cuenta en sus rastreos y posteriores análisis** ya que no los consideraba parte de la petición HTTP.

## Los problemas para indexar AJAX

Con la proliferación de AJAX surgió la necesidad de hacer indexables ciertas aplicaciones/webs que se cargaban únicamente desde una URL (algo similar a lo que hace ahora Angular).

En este escenario y para avanzar con la [indexación de JavaScript](https://developers.google.com/search/docs/advanced/javascript/javascript-seo-basics), Google abrió la puerta a utilizar `#` para poder informar al robot de búsqueda de nuevas "**páginas virtuales**".

En realidad tomó prestado el término de hahsbang `#!` de linux para crear un proceso por el que su robot de búsqueda convertiría dicho símbolo en un parámetro de URL `?_escaped_fragment_` que pudiera ser rastreado e indexado como una página independiente.

Más tarde se recomendó utilizar `history.pushState()` para indicar una navegación a través de páginas virtuales y la indexación a través de la almohadilla quedo [en desuso en 2015](https://developers.google.com/search/blog/2015/10/deprecating-our-ajax-crawling-scheme).

## Indexación y contenidos

A día de hoy, Google nos indica que a nivel de indexación los fragmentos de URL serán ignorados pero la realidad es distinta: en múltiples ocasiones podemos ver URLs con `#` indexadas y generando tráfico en Google Search Console.

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">You might see fragment identifiers in Search Console if we show jump links in search, which sometimes show like sitelinks would. It&#39;s confusing since most of the time we do show canonicals in SC, sorry :/. They don&#39;t play a role for canonicalization though, it&#39;s just display. <a href="https://t.co/6WhBuz49T4">pic.twitter.com/6WhBuz49T4</a></p>&mdash; 🍌 John 🍌 (@JohnMu) <a href="https://twitter.com/JohnMu/status/1311419771871731712?ref_src=twsrc%5Etfw">September 30, 2020</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

Sea como sea, es una herramienta útil que nos puede ayudar a que los buscadores consigan un mejor contexto a través de nuestro enlazado interno y que nuestros usuarios accedan rápidamente a lo que realmente están buscando. Todo centrado en el ámbito del contenido, pero en ningún caso recomendaría **utilizar la almohadilla para trabajar la indexación** de un sitio web. 




<!--stackedit_data:
eyJoaXN0b3J5IjpbMTA2MDQ2Mzg5MywtMTI3MTUxODQ0NV19
-->
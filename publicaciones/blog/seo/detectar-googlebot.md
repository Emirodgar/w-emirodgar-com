---
description: Además de nofollow ahora contamos con sponsored y ugc
image: https://emirodgar.com/cdn/images/og/estrategia-seo.png
date: 12/09/2019
author: Emirodgar
lang: es_ES
sitemap: 1
feed: 1
folder: seo
permalink: detectar-googlebot

--- 

# Cómo detectar a Googlebot

En ciertas ocasiones es necesario identificar si el visitante de nuestro sitio es el robot de búsqueda de Google (Googlebot) y tomar ciertas acciones.

> No debemos ofrecer contenido diferente al robot y a los usuarios ya que eso sería *cloaking* y podría ser penalizado.

## ¿Cómo identificar al robot de Google?

Actualmente tenemos dos posibilidades. Bien realizamos una DNS inversa o consultamos el `User-Agent`.

### DNS inversa

  Es el proceso m

Básicamente el proceso sería el siguiente:

  

1.  Antes de redireccionar, debemos ejecutar una petición DNS inversa sobre la IP del rastreador.
2.  Si la petición devuelve un host de googlebot.com entonces se trata de un robot de Google.
3.  Podríamos hacer una petición DNS de nuevo sobre el host para asegurarnos de que la IP es la misma y que no hay suplantación. Este tercer paso es opcional.
4.  Si es de Google, no redireccionamos.

  

**User Agent**

  

Aunque el proceso anterior es el más fiable, existe otra posibilidad que implica menos recursos. En este caso sería identificar el user-agent. Google ha publicado en el siguiente enlace todos los user-agents de sus robots.

1.  Comprobamos si el user-agent es de un robot de Google (listado: [https://support.google.com/webmasters/answer/1061943?hl=es-419](https://support.google.com/webmasters/answer/1061943?hl=es-419))
2.  Si es de Google, no redireccionamos.
<!--stackedit_data:
eyJoaXN0b3J5IjpbMTA2NTY1OTk2Nl19
-->
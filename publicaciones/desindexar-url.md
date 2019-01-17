---
title: Eliminar página o URL indexada en Google
description: Aprende a eliminar una URL de forma correcta y eficiente para que no vuelva a aparecer en Google
lang: es_ES
permalink: eliminar-url-google

---

# Eliminar página o URL indexada en Google

Existe un gran desconocimiento sobre cómo podemos hacer que nuestra página web o una URL de la misma sea desindexada correctamente de Google.

## Prevenir la indexación de una URL

Si aún estamos a tiempo, es mejor prevenir la indexación de nuestra página o sección por parte de los buscadores.

### 1 - Directiva noindex

> Para poder utilizar noindex dentro de una URL, ésta debe ser accesible por los buscadores por lo que **no podemos bloquear su acceso a través del robots.txt**

La [directiva **noindex**](https://developers.google.com/search/reference/robots_meta_tag) puede ser implementada a través del header de la página:

```
<!DOCTYPE html>
<html><head>
<meta name="robots" content="noindex" />
_(…)_
</head>
<body>_(…)_</body>
</html>
```
O también como respuesta a una cabecera HTTP

```
X-Robots-Tag: noindex
```
De esta forma le indicamos a los buscadores que no queremos que dichas URLs sean indexadas.

>  La directiva noindex bajo robots.txt, es algo experimental y [puede que en un futuro desaparezca](https://youtu.be/yIIRyBMSPUk?t=47m58s) por lo que no es recomendable utilizarla.

### 2 - Disallow en robots.txt

> El fichero robots.txt podría ser ignorado por los buscadores por lo que no es una opción que garantice al 100% la no indexación de la URL.

En el caso de que se trate de una sección amplia del sitio o que no tengamos acceso a dichas páginas para poder implementar la directiva noindex, podemos hacer uso del comando disallow del robots.txt. Para ello debemos seguir el [estándar de exclusión de robots](https://es.wikipedia.org/wiki/Est%C3%A1ndar_de_exclusi%C3%B3n_de_robots).

```
User-agent: *
Disallow: /cgi-bin/
Disallow: /tmp/
Disallow: /privado/
```
## Eliminar una URL ya indexada

En el caso de que la URL esté indexada por los buscadores, podemos hacer


## Herramientas de Google

Google pone a nuestra disposición dos herramientas, la primera para poder [eliminar contenido puntual desde Google Search Console](https://www.google.com/webmasters/tools/url-removal) y la segunda para [eliminar contenido obsoleto](https://www.google.com/webmasters/tools/removals). Ambas no garantizan su eliminación y, de hacerlo, se trata de una **acción temporal** por lo que tendrá validez únicamente durante 90 días. A partir de entonces, podría volver a ser indexado.
<!--stackedit_data:
eyJoaXN0b3J5IjpbLTEzNjQyNTIyNiwxNjQyNzUwODEyLDExMz
I3MDA5NDIsMTc3MTcwOTM2OSwtMTMwODA1NzIxNl19
-->
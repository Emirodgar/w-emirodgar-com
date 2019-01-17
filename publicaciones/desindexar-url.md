---
title: Eliminar página o URL indexada en Google
description: Aprende a eliminar una URL de forma correcta y eficiente para que no vuelva a aparecer en Google
lang: es_ES
permalink: eliminar-desindexar-url-google

---

# Eliminar página o URL indexada en Google

Aunque pueda parecer fácil, existe un gran desconocimiento sobre cómo podemos hacer que nuestra página web o una URL de la misma sea desindexada correctamente de Google.

## Prevenir la indexación de una URL

Si aún estamos a tiempo, es mejor prevenir la indexación de nuestra página o sección por parte de los buscadores.

Para ello debemos utilizar la [directiva **noindex**](https://developers.google.com/search/reference/robots_meta_tag). Ésta puede ser implementada a través del header de la página:

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
HTTP/1.1 200 OK
Date: Tue, 25 May 2010 21:42:43 GMT
_(…)_
X-Robots-Tag: noindex
_(…)_
```


## Eliminar una URL o página de forma permanente



## Herramientas de Google

Google pone a nuestra disposición dos herramientas, la primera para poder [eliminar contenido puntual desde Google Search Console](https://www.google.com/webmasters/tools/url-removal) y la segunda para [eliminar contenido obsoleto](https://www.google.com/webmasters/tools/removals). Ambas no garantizan su eliminación y, de hacerlo, se trata de una **acción temporal** por lo que tendrá validez únicamente durante 90 días. A partir de entonces, podría volver a ser indexado.
<!--stackedit_data:
eyJoaXN0b3J5IjpbLTcwMTg4Mjg0N119
-->
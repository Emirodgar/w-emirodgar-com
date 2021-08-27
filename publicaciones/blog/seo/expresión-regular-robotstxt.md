---
title: Usar expresiones regulares en fichero robots.txt
description: Aprende a utilizar expresiones más usables en el fichero robots.txt
image: https://emirodgar.com/cdn/images/og/auditoria.png
layout: emirodgar_post
sitemap: 1
feed: 1
folder: seo
author: Emirodgar
permalink: regex-robots-txt

---

Ni Google ni Bing aceptan usar expresiones regulares en los ficheros robots.txt no obstante, sí permiten hacer uso de dos caracteres a [modo de comodines](https://developers.google.com/search/docs/advanced/robots/robots_txt#url-matching-based-on-path-values): son el `*` y el `$`.

- El asteristo  `*`  nos permitirá identificar 0 o más apariciones de cualquier caracter o términos válido.
- El dólar `$` nos permitirá identificar el final de una cadena.

Por ejemplo, si queremos evitar el rastreo de todas las URLs que contentan el término `perro` lo podemos hacer de la siguiente manera.

```
User-agent: *
Disallow: /*perros
```

Si únicamente quisiéramos bloquear el rastreo de las páginas que terminan en `perros` lo haríamos de la siguiente manera. Esto no afectaría a otras páginas que incluyeran dicho término en la URL, como por ejemplo `perros-grandes` ya que no terminan de la forma que hemos indicado. 

```
User-agent: *
Disallow: /*perros$
```

Es importante recordar que las reglas que transmitimos a través del robots.txt son directivas que pueden ser ignoradas por los buscadores y que sólo sirven para ajustar el **rastreo de una página**, pero **no su indexación**.  Si realmente queremos evitar una indexación, deberemos utilizar la [etiqueta noindex](https://emirodgar.com/eliminar-url-google#noindex).

Por último, si [bloqueamos el rastreo de ficheros clave](https://emirodgar.com/bloquear-indexacion-js-css) para nuestra visualización mobile, podría afectar a nuestro posicionamiento, por lo que hay que ser muy cautos con los ficheros y páginas que queremos evitar que sean rastreados por los robots de búsqueda.
<!--stackedit_data:
eyJoaXN0b3J5IjpbMTgwMTM5Mzk0NCwxNjgwODk2Mzc3XX0=
-->
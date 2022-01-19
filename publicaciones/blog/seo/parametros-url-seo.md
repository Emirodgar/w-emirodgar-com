---
title: ¿Cómo afectan los parámetros en la URL al SEO?
description: 
image: https://emirodgar.com/cdn/images/og/estrategia-seo.png
layout: emirodgar_post
author: Emirodgar
lang: es_ES
sitemap: 1
feed: 1
folder: seo
permalink: parametros-url-seo

--- 

Los parámetros son utilizados en las páginas web para pasar información a través de la URL. Se inicia el proceso con el símbolo `?` seguido de un nombre del parámetro y el valor `parametro=valor`. Si se quiere enviar más de un parámetro, estos se concatenan con el carácter `&`.

Los [robots de búsqueda](https://emirodgar.com/detectar-googlebot) consideran que cualquier cambio sobre una URL, ya sea [mayúsculas o minúsculas](https://emirodgar.com/mayusculas-minusculas-url) o el uso de parámetros, es susceptible de que cambie el contenido de la misma y por ende tienden a rastrearla. Por ejemplo, las siguientes URLs, aunque muestren el mismo contenido, podrán ser consideradas como tres páginas distintas:

 - `https://emirodgar.com`
 - `https://emirodgar.com?parametro=valor`
 - `https://emirodgar.com?parametro=valor&parametro2=valor`


Podemos concluir que cualquier parámetro que usemos en una URL -incluso los UTM de Google Analytics- podría [obligar al motor de búsqueda a rastrearla](https://emirodgar.com/google-rastreo), así que para evitar que se genere contenido duplicado, deberíamos ayudar a los buscadores a **identificar la versión principal que queremos que sea indexada**.

> Los parámetros UTM usados en Analytics, aunque son conocidos por Google, también podrían causar este comportamiento de generación de contenido duplicado.

Como dijo John en Twitter, el proceso para que los rastreadores entiendan cuál es nuestra opción principal para posicionar no depende sólo de una acción sino que debemos ser coherentes con todas las señales para que éstas siempre apunten a la versión correcta que queremos indexar.

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">Canonicalization uses a number of factors (redirects, rel-canonical, internal/external links, sitemaps, more) -- the more you can get them to align, the more likely your input will be followed.</p>&mdash; 🐄 John 🐄 (@JohnMu) <a href="https://twitter.com/JohnMu/status/1444214929679077377?ref_src=twsrc%5Etfw">October 2, 2021</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

El punto más relevante para garantizar el éxito y evitar contenido duplicado será usar la [etiqueta `canonical`](https://emirodgar.com/etiqueta-canonica) pero debemos ser consecuentes con ello y apoyar esa misma decisión a través de las redirecciones, enlazado interno, sitemaps XML, etc. Es decir, toda nuestra estructura web debe apuntar siempre a la versión que queremos indexar.

Aunque **el contenido duplicado no genera una penalización**, el uso de parámetros a gran escala podría afectar a los resultados de la estrategia SEO, por ello siempre es recomendable gestionar los parámetros de forma correcta.

<!--stackedit_data:
eyJoaXN0b3J5IjpbMTI2Mzc1MTIzNSwyMTAxMjk3MzA4LDYxOT
YyNzE2MSwtODQxMzM1MzQ3XX0=
-->
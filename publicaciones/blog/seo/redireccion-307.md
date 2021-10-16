---
title: ¿Qué son las redirecciones 307 y cómo afectan al SEO? 
description: 
image: https://emirodgar.com/cdn/images/og/estrategia-seo.png
layout: emirodgar_post
author: Emirodgar
lang: es_ES
sitemap: 1
feed: 1
folder: analitica
permalink: redireccion-307

--- 

El código de estado 307 enviado por un servidor web indica que se trata de una **redirección temporal**. Concretamente, el estado enviado es: **`307 Temporary Redirect`**.

Las redirecciones más utilizadas a nivel SEO son la `301` (**Redirección fija**) y 302** (Redirección temporal), entonces, ¿qué diferencia existe entre una redirección 302 y una redirección 307?.

A efectos prácticos, ninguna ya que en ambas situaciones seremos redireccionados de forma temporal; es decir, el robot de búsqueda nunca eliminará la URL de origen y simplemente nos permitirá acceder a la página que le indiquemos mientras tengamos implementada dicha redirección.

La explicación de porqué existen ambas es que tanto la redirección `301` como la `302` se podía ejecutar a partir de peticiones `GET` y `POST` cuando, en teoría, las peticiones `HTTP/1.0` deberían mantener siempre el tipo original (es decir, se podía cambiar de uno a otro). Para evitar este comportamiento que podría llegar a generar problemas en momentos puntuales, se decidió crear dos códigos de estado de redireccionamiento más estrictos, el `307` (temporal) y el `308` (permanente); ambos garantizan que el método de lanzamiento (`GET` o `POST`) se mantiene siempre. 

Estos dos nuevos estados están recogidos en la actualización `HTTP/1.1` y garantizan por tanto un redireccionamiento más preciso que sus predecesores.


## ¿Por qué sólo veo una redirección 307 en Google Chrome?

Dentro de la redirección 307 existe una variante de **redireccionamiento interno** que no está definida por el estándar HTTP y que es sólo utilizada por el navegador local. Es decir, no se genera en el servidor web que aloja la página que estamos visitando sino que es llevada a cabo por el navegador.

![Emirodgar](https://emirodgar.com/cdn/images/posts/redireccion-307.jpg){:class="img-responsive"}

Cuando el navegador -en este caso Google Chrome- identifica un sitio web que utiliza HSTS, intentará acceder desde la versión HTTPS a través de una redirección interna. En este caso utilizará una redirección 307, para **redirigir la página HTTP hacia la versión HTTPS**
<!--stackedit_data:
eyJoaXN0b3J5IjpbMjAwOTE3MDEwMyw0MDA3NTE4MzYsMzY3MD
g0NjMyXX0=
-->
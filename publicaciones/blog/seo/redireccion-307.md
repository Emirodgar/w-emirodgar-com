---
title: ¿Qué son las redirecciones 307 y cómo afectan al SEO? 
description: 
image: https://emirodgar.com/cdn/images/og/estrategia-seo.png
layout: emirodgar_post
author: Emirodgar
lang: es_ES
sitemap: 1
feed: 1
date: 27/01/2022
folder: seo
permalink: redireccion-307

--- 

El código de estado 307 (**`307 Temporary Redirect`**) enviado por un servidor web indica que se trata de una **redirección temporal**. 

Las redirecciones más utilizadas a nivel SEO son la `301` (Redirección fija) y `302` (Redirección temporal), entonces, **¿qué diferencia existe entre una redirección 302 y una redirección 307?**.

A efectos prácticos ninguna ya que en ambas situaciones seremos redireccionados de forma temporal; es decir, el [robot de búsqueda](https://emirodgar.com/detectar-googlebot) nunca eliminará la URL de origen y simplemente nos permitirá acceder a la página de destino mientras tengamos implementada dicha redirección.

La explicación de porqué existen ambas es que tanto la redirección `301` como la `302` se podía ejecutar a partir de peticiones `GET` y `POST` cuando, en teoría, las peticiones `HTTP/1.0` deberían utilizar sólo el método `GET`. Para evitar este comportamiento que podría llegar a generar problemas en momentos puntuales, se crearon dos códigos de estado de redireccionamiento más estrictos, el `307` (temporal) y el `308` (permanente); **ambos garantizan que el método de lanzamiento es el adecuado**. 

Estos dos nuevos estados están recogidos en la actualización `HTTP/1.1` y garantizan por tanto un redireccionamiento más preciso que sus predecesores.


## ¿Por qué sólo veo una redirección 307 en Google Chrome?

Dentro de la redirección 307 existe una variante de **redireccionamiento interno** que no está definida por el estándar HTTP y que es sólo utilizada por el navegador local. Es decir, no se genera en el servidor web que aloja la página que estamos visitando sino que es llevada a cabo por el navegador.

![Emirodgar - redirección 307 temporal interna](https://emirodgar.com/cdn/images/posts/redireccion-307.jpg){:class="img-responsive"}

Cuando el navegador -en este caso Google Chrome- identifica un sitio web que utiliza HSTS, intentará acceder desde la versión HTTPS a través de una redirección interna. En este caso utilizará una redirección 307, para **redirigir la página HTTP hacia la versión HTTPS**
<!--stackedit_data:
eyJoaXN0b3J5IjpbLTE3NzQ3MTk0NjUsLTQwODA3ODgwMSw0MD
A3NTE4MzYsMzY3MDg0NjMyXX0=
-->
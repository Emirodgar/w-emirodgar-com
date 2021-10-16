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

El código de estaodo 307 enviado por un servidor web indica que se trata de una **redirección temporal**. Concretamente, el estado enviado sería: **`307 Temporary Redirect`**.

Las redirecciones más utilizadas a nivel SEO son la **301** (Redirección fija) y **302** (Redirección temporal), entonces, ¿qué diferencia existe entre una redirección 302 y una redirección 307?.

A efectos prácticos, ninguna ya que en ambas situaciones seremos redireccionados de forma temporal; es decir, el robot de búsqueda nunca eliminará la URL de origen y simplemente nos permitirá acceder a la página que le indiquemos mientras tengamos implementada dicha redirección.

La explicación de porqué existen ambas es que tanto la redirección 301 como la 302 se podía ejecutar a partir de peticiones `GET` y `POST` cuando, en teoría, las peticiones HTTP deberían mantener siempre el tipo original. Para evitar este comportamiento requirió la introducción de los códigos de estado más estrictos de redireccionamiento temporal 307 y de redireccionamiento permanente 308 en la actualización HTTP/1.1


![Emirodgar](https://emirodgar.com/cdn/images/posts/redireccion-307.jpg){:class="img-responsive"}

## ¿Por qué sólo veo una redirección 307 en Google Chrome?

Cuando el navegador identifica un sitio web que utiliza HSTS, intentará acceder desde la versión HTTPS a través de una redirección interna. Los navegadores utilizarán una redirección 307, para **redirigir una página HTTP hacia una página HTTPS**
<!--stackedit_data:
eyJoaXN0b3J5IjpbLTIxNDMwNzg2NTYsNDAwNzUxODM2LDM2Nz
A4NDYzMl19
-->
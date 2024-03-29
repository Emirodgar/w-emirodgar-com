---
title: Aplicar redirecciones en Jekyll
description: Aprende a redireccionar tus páginas usando el framework Jekyll
lang: es_ES
author: Emirodgar
sitemap: 1
feed: 1
folder: programacion
date: 27/01/2022
layout: emirodgar_post
image: https://emirodgar.com/cdn/images/og/estrategia-seo.png
permalink: redirecciones-seo-jekyll

---


Ya he hablado en alguna ocasión del generador de páginas webs **Jekyll** y [cómo optimizarlo para una estrategia SEO](optimizacion-seo-jekyll).

Ahora vamos a ver cómo se pueden implementar redirecciones de forma sencilla.

## Habilitar el módulo de redirecciones

El primer paso será habilitar en el fichero ```_config.yml``` el plugin asociado a las redirecciones `jekyll-redirect-from`. Éste nos permitirá utilizarlas dentro del framework; para ello si no tenemos ya creada una sección de plugins, añadimos lo siguiente:

```yml
plugins:  
    - jekyll-redirect-from
```

Si ya teníamos algún plugin cargado, únicamente añadiremos la segunda línea a continuación de los que ya existan en el fichero.

## Aplicar redirecciones 301

Una vez habilitado el plugin, aplicar redirecciones será tan sencillo como incluir los siguientes comandos dentro de las cabeceras de nuestras páginas.

Para redireccionar una URL a otra (tanto interna como externa) debemos utilizar el comando `redirect_to` de la siguiente forma:

```yml
---
title: Redirección 301
redirect_to:
  - http://otra-pagina.com
permalink: /actual/
---
```

Si quisiéramos que otas páginas antiguas redireccionen a la página actual que estamos definiendo, debemos hacer uso de `redirect_from` especificando cada una de las URLs que serán redireccionadas.

```yml
---
title: Redirección 301 de otras URLs a esta página 
redirect_from:
    - /antigua/
    - /otra/antigua/
permalink: /actual/
---
``` 


También podríamos crear un **fichero .htaccess** bajo Jekyll y gestionar las redirecciones a través del mismo, pero creo que esta forma es más rápida y sencilla.

En realidad, esta migración no equivale a una 301 (o Google puede no entenderlo así) ya que a veces nos da problemas. Por ello es importante que usemos Google Search Console para validar que las URLs enviadas en el Sitemap XML son las correctas (nuevas) y que el robot de búsqueda entiende perfectamente la relación con las antiguas. 

Por ejemplo, en la siguiente imagen podemos ver cómo la URL `https://emirodgar.com/consultor-seo/` que incluye la barra final ha sido redireccionada a la versión sin barra al final `https://emirodgar.com/consultor-seo`. 

![Jekyll redirección 301 atributo canonical](https://i.imgur.com/KR3mj5F.png){:class="img-responsive"}

En lugar de disponer de una redirección 301 que el robot de búsqueda entendería sin problema, lo que hace Google es marcar la página como no apta para ser indexada (ya que incluye la etiqueta **noindex**) y luego identifica a través del [atributo canonical](https://emirodgar.com/etiqueta-canonica) la URL adecuada. Digamos que no es un proceso tan directo ni rápido como la redirección 301 pero al menos sí será efectivo.
<!--stackedit_data:
eyJoaXN0b3J5IjpbMTIwNTg2MjIwOSwtNTk2ODEwNTM1LC05ND
UzNTE3OTEsMTE4MDEzMDc1LDY2MjI3MjM0NSwtMTk2NDgzNjc2
NF19
-->
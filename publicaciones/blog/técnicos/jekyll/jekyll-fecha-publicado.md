---
title: Cómo incluir fecha de publicación y actualización en Jekyll
description: Podemos hacer uso de múltiples templates para colorear nuestro código
lang: es_ES
author: Emirodgar
sitemap: 1
feed: 1
folder: programacion
date: 27/01/2022
layout: emirodgar_post
image: https://emirodgar.com/cdn/images/og/estrategia-seo.png
permalink: fecha-publicacion-jekyll

---

Cuando realizamos una publicación, lo normal es que utilicemos el campo `date` para especificar la fecha en la que ha sido publicada. A nivel SEO (y de experiencia de usuario) es importante que esta fecha sea visible para que se pueda determinar si un contenido está actualizado o si es obsoleto. 

Esto se hará en la cabecera de la página de Jekyll de la siguiente manera:

    date: 27/01/2022

A partir de ahí, en nuestro *template* de Jekyll podremos acceder a dicha información a través de la variable `page` y la opción `date`. 

    Publicado el {{ page.date | date: ' %d/%m/%Y' }}
    // el resultado sería: Publicado el 27/01/2022 

Los buscadores -especialmente Google- nos piden que si un contenido ha sido actualizado significativamente (que los cambios sean suficientemente grandes como para avisar) incluyamos una fecha de actualización. En este caso lo haríamos con la variable `date_modified` y especificando la fecha en la que hemos actualizado el contenido.

Ahora podemos hacer dos cosas, en nuestro *template* podemos poner ambos valores o sólo el de actualización, ya que siempre será mayor que el de la fecha de publicación.

En mi caso, si no hay actualización muestro sólo la fecha de publicación y si no, la de actualización. Lo hago de 

    {% if page.date_modified == null %}
     Publicado el {{ page.date | date: ' %d/%m/%Y' }}
    {% else %}
     Actualizado el {{ page.date_modified | date: ' %d/%m/%Y' }}
    {% endif %}

<!--stackedit_data:
eyJoaXN0b3J5IjpbMTMwODk3Mzg2MSw2MDE4Nzk4NF19
-->
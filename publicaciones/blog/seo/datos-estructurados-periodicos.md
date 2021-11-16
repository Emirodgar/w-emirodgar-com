---
title: Usar datos estructurados para mejorar el SEO de un periódico
description: 
image: https://emirodgar.com/cdn/images/og/estrategia-seo.png
layout: emirodgar_post
author: Emirodgar
lang: es_ES
sitemap: 1
feed: 1
folder: seo
permalink: datos-estructurados-periodico

--- 

Los [datos estructurados](https://emirodgar.com/datos-estructurados) nos ayudan a que los robots de los buscadores entiendan mejor de qué trata nuestra página además de enriquecer nuestros resultados para que sean más llamativos en las búsquedas.

Existen muchos tipos de datos estructurados pero hoy nos centraremos en aquellos prioritarios para un periódico o medio digital.

## Qué datos estructurados utilizar para un medio digital

### Organización

Comenzamos por el dato estructurado más genérico y que aplica para definir a un periódico, radio o cadena de televisión. Es importante utilizar [`NewsMediaOrganization`](https://schema.org/NewsMediaOrganization) para informar a los buscadores del nombre de nuestra organización, la página web y el logo, entre otros elementos.

Este código puede ir sólo en la página principal (home) o insertado en todas las páginas si lo integramos directramente en el *template* del sitio. De momento Google no lo utiliza para enriquecer ningún resultado pero sí puede apoyarse en él para obtener información acerca de la página o empresa.

### Artículos

Usar datos estructurados en cualquier contenido publicado nos ayudará a que páginas de noticias, artículos o blogs sean identificados y presentados de la mejor forma posible en los resultados.

A la hora de etiquetar un contenido podemos hacer uso de tres elementos: [`Article`](https://schema.org/Article), [`NewsArticle`](https://schema.org/NewsArticle) o [`BlogPosting`](https://schema.org/BlogPosting). Usaremos cada elemento en función del tipo de contenido que estemos generando.

Tendremos que añadir este dato estructurado en todas las publicaciones que realicemos dentro del sitio web.
En la  [documentación de Google](https://developers.google.com/search/docs/advanced/structured-data/article) tenemos varios ejemplos de cómo implementarlo.

### Preguntas frecuentes

Es común que un periódico digital haga uso de ciertas publicaciones para responder preguntas. En estos casos, especialmente cuando una publicación está orientada a este menester, podemos hacer uso del etiquetado de [`Faqpage`](https://schema.org/FAQPage) para que los buscadores entiendan correctamente la correspondencia entre preguntas y respuestas.

> Google no recomienda utilizar este marcado estructurado sobre respuestas de usuarios, comentarios o foros. Debe ser contenido genuino de la persona que ha creado la página.

Cuando creemos el JSON correspondiente es importante que tanto en la pregunta como en la respuesta aparezca todo el contenido.  Recomiendo consultar la [documentación de Google](https://developers.google.com/search/docs/advanced/structured-data/faqpage) para disponer de ejemplos. 

### Fragmento de reseña

Disponemos de [`Review`](https://developers.google.com/search/docs/advanced/structured-data/review-snippet) como un dato estructurado para poder hacer reseñas sobre diversos productos.

Si hacemos un artículo en el que evaluamos un producto podemos utilizar este dato estructurado para destacar los aspectos más importantes de nuestra crítica como puntuación, autor o información de producto.

De momento, Google sólo soporta los siguientes elementos: libro, curso, evento, instrucciones, empresa local, película, producto, receta o aplicación de software

## Instrucciones

Si vamos a escribir un artículo que proporciona instrucciones para completar una tarea o lograr un resultado siguiendo una serie de pasos, debemos etiquetarlo como [`HowTo`](https://developers.google.com/search/docs/advanced/structured-data/how-to).

En este caso es importante que el artículo también esté etiquetado como `NewsArticle` o `Article`. 

<!--stackedit_data:
eyJoaXN0b3J5IjpbLTIwNzA2MTQzNTksLTkyNjk5NDkwOSwtMT
QyMDI0NDkzOSw2NjU3OTE4NTMsMTg0OTk3MzMxNCwtMTc3MjIx
ODUyN119
-->
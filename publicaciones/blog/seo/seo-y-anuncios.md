---
title: ¿Cómo impactan los anuncios al SEO de una página?
description: 
image: https://emirodgar.com/cdn/images/og/estrategia-seo.png
layout: emirodgar_post
author: Emirodgar
lang: es_ES
sitemap: 1
feed: 1
folder: seo
date: 08/02/2022
permalink: impacto-anuncios-en-seo

--- 

Por norma general, el usar anuncios en una página suele **ralentizar la carga** además de empeorar la **experiencia de los usuarios** por lo que en términos valorados por los buscadores ([Core Web Vitals](https://emirodgar.com/core-web-vitals-problemas)) el impacto será negativo.

No obstante, un gran volumen de páginas utilizan esta estrategia de monetización por lo que debemos buscar formas de adecuar los anuncios para que el impacto en la experiencia de nuestros visitantes y en las señales SEO sea mínimo.

## Evitar el cloacking

Seguro que nuestra primera tentación será eliminar los anuncios para los robots de búsqueda, no obstante, mucho cuidado con eso, ya que podríamos incurrir en *cloacking* y ser penalizados por ello.

> El _cloaking_ es una técnica de SEO que se basa en mostrar diferentes contenidos a los usuarios de una web y a los robots de rastreo.

## Ralentizar la carga de anuncios

Quizá la mejor aproximación que podemos hacer es cargar los anuncios fuera de la primera carga crítica de la web, de esta manera nos aseguramos que no penaliza la experiencia de los usuarios y que los valores SEO que supervisarán los buscadores -basados en las Core Web Vitals- son correctos.

Esto no entra en conflicto con las directrices SEO de los buscadores, puesto que los robots de búsqueda interactuarán con la página en todo momento hasta que la carga finalice (siempre y cuando lo haga dentro de un tiempo prudencial). Por ello 

## Carga diferida de anuncios

Para mí es la aproximación más acertada. Se trataría de aplicar una carga diferida (*lazy load*) sobre los anuncios de tal manera que sólo se mostrarían cuando el usuario haga *scroll* y avance sobre los mismos. Si en la primera ventana de la página no hay anuncios y un usuario no hace *scroll*, nunca tendría que soportar la carga de los mismos.
<!--stackedit_data:
eyJoaXN0b3J5IjpbLTE4OTA4MDk5NDEsMTYxNTg1NzMzN119
-->
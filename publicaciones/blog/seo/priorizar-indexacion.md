---
title: SGE - Prioriza la indexación de tus páginas
description: Hay demasiada información. Necesitamos separar lo útil de lo menos relevante.
image: https://emirodgar.com/cdn/images/og/estrategia-seo.png
layout: emirodgar_post
author: Emirodgar
lang: es_ES
sitemap: 1
feed: 1
folder: seo
date: 09/11/2023
date_modified: 14/10/2026
permalink: priorizar-indexacion

---

Hay demasiada información en Internet. Los buscadores invierten mucho tiempo y dinero en rastrear sitios web y se han dado cuenta que gran parte del contenido existente no aporta valor.
La realidad en SEO es que a día de hoy es muy difícil, para páginas grandes, **indexar todas las URLs que conforman el sitio**.

Nuestro objetivo debe ser **priorizar el contenido útil y de gran valor**, frente al resto. Lo siento, ya no puedes ir con todo. Y si [tu página no acaba de indexarse](https://emirodgar.com/pagina-no-indexa), casi seguro que el motivo tiene que ver con esta misma falta de prioridad. 

La búsqueda generativa basada en inteligencia artificial de Google (SGE) se basa en este principio: **calidad antes que cantidad**. No es que sea mejor para el usuario, es que el modelo de rastrear e indexar todo lo conocido ya no es soportable a nivel económico ni escalable en los años venideros.

## Cómo priorizar el rastreo e indexación de páginas de calidad

> Guía: [Cómo preparar el SEO para el futuro con inteligencia artificial](https://newsletter.chuletaseo.com/p/guia-como-preparar-el-seo-para-el)

Tenemos varias herramientas que nos ayudarán a priorizar el contenido de valor frente al resto:

- **Sitemaps XML**: a través de estos documentos podremos especificar a los buscadores, tanto las URL relevantes de nuestro sitio, como la frecuencia con la que se actualizan o la prioridad en el rastreo que queremos darle.
- **Fichero robots.txt**: si algo no te interesa, bloquea el rastreo. Mucho cuidado de no entrar en conflicto con la directiva de `noindex`.
- **Enlazado interno**: a través de la estructura de la página y de los enlaces internos, podremos indicar a los buscadores qué páginas nos interesan más.
- **Directivas noindex y nofollow**: nos ayudarán a acompañary definir el camino del robot de búsqueda dentro de nuestro sitio web.

> Cuidado con [bloquear recursos como Javascrit o CSS](https://emirodgar.com/bloquear-indexacion-js-css), podrían afectar al renderizado de la página y, por ende, a nuestro posicionamiento.

## Por qué Google filtra cada vez más

En Search Central Live Barcelona (octubre de 2026), Google explicó una de las razones: el índice crece sin parar y cada tema acumula más candidatos. Mostraron un ejemplo con la búsqueda «naranja», con unos 20.000 resultados en 2025 por cada uno que había en el año 2000. Es un dato que solo se ha visto en las diapositivas, sin fuente pública, así que tómalo como lo que Google enseñó en la sala. La consecuencia es lógica: si hay muchos más candidatos, el listón para entrar sube, y Google filtra más antes incluso de posicionar. Cada URL llega al ranking con su calidad ya calculada, igual que su idioma o su país, como cuenta Nacho Mascort.

## Google cada vez rastrea con menos frecuencia

La tendencia que llevamos tiempo notando es la de **reducción de peticiones** (línea azul de la siguiente imagen) por parte de [Googlebot](https://emirodgar.com/detectar-googlebot).
En la siguiente imagen podemos ver que, aunque el tiempo medio se mantiene estable (línea naranja), las peticiones del robot de Google se reducen.

![image](https://github.com/Emirodgar/w-emirodgar-com/assets/4302127/5e6ca395-ef28-415b-971f-547fc33eb5e4){:class="img-responsive"}

Curiosamente, esta situación no está afectando a la indexación del sitio, que se mantiene normalizado. **Google es más eficiente en su rastreo y en la cualificación de las páginas relevantes para el SEO**, por lo que debemos alinearnos con ello y potenciar eso.

![image](https://github.com/Emirodgar/w-emirodgar-com/assets/4302127/7fae73f3-a854-408d-881f-9ccfbc40b3d7){:class="img-responsive"}

## Millones de páginas sin indexar y las impresiones intactas

Para no obsesionarnos con tener el rastreo y la indexación perfectos, un ejemplo real. Este es el informe de indexación de Search Console de un sitio grande entre mediados de julio y el 8 de octubre de 2026, con las páginas (barras) y las impresiones (línea azul):

![Informe de indexación de Search Console con 126 millones de páginas sin indexar, 3,08 millones indexadas y las impresiones estables entre julio y octubre de 2026](https://emirodgar.com/cdn/images/posts/search-console-indexacion-total-impresiones.png){:class="img-responsive"}

Hay **126 millones de páginas sin indexar**, por 13 motivos distintos, frente a **3,08 millones indexadas**. Es decir, una inmensa mayoría de las URLs que Google conoce no están en el índice. Y aun así, las impresiones se mantienen estables durante todo el periodo, en torno a los 4-5 millones diarios.

Si separamos las dos series se ve mejor. Las páginas sin indexar bajan algo, de unos 155 millones a unos 126, pero se mueven poco:

![Evolución de las 126 millones de páginas sin indexar en Search Console junto a las impresiones, que se mantienen estables](https://emirodgar.com/cdn/images/posts/search-console-paginas-sin-indexar-impresiones.png){:class="img-responsive"}

Y las páginas indexadas sí fluctúan, entre unos 2 y casi 4 millones, sin que las impresiones lo noten:

![Evolución de las 3,08 millones de páginas indexadas en Search Console junto a las impresiones, que se mantienen estables](https://emirodgar.com/cdn/images/posts/search-console-paginas-indexadas-impresiones.png){:class="img-responsive"}

¿Y por qué no están indexadas? Search Console lo desglosa en el informe «¿Por qué hay páginas que no se indexan?». Estos son los principales motivos de este mismo sitio:

![Motivos de páginas no indexadas en Search Console: 103.863.211 alternativas con canónica adecuada, 12.426.140 con redirección, 5.721.844 con 404, 627.683 bloqueadas por robots.txt, 497.049 con 403 y 322.458 con noindex](https://emirodgar.com/cdn/images/posts/search-console-motivos-paginas-no-indexadas.png){:class="img-responsive"}

Lo llamativo es que casi todo es intencionado o inocuo:

- **Página alternativa con etiqueta canónica adecuada (103,9 millones):** URLs que apuntan a otra versión como la principal, como variantes o parámetros. Es el funcionamiento esperado de la [etiqueta canónica](https://emirodgar.com/etiqueta-canonica).
- **Página con redirección (12,4 millones):** URLs que redirigen a otra, por lo que no se indexan.
- **No se ha encontrado, 404 (5,7 millones):** páginas que ya no existen. Conviene revisarlas por si alguna debería redirigir, pero muchas no tienen que hacer nada.
- **Bloqueadas por robots.txt (627.683), 403 (497.049) y noindex (322.458):** decisiones tomadas a propósito para [controlar qué se rastrea y qué se indexa](https://emirodgar.com/bloqueo-robotstxt-noindex).

Solo con los tres primeros motivos ya se explican unos 122 de los 126 millones. Por eso no miro el total de páginas sin indexar, sino el motivo: lo que me importa es saber si hay alguna URL valiosa escondida entre ellas, y no que la cifra baje.

La lectura que hago: la calidad siempre importa, y por eso conviene que lo que sí indexa Google sea lo que de verdad merece estar. Pero tener millones de URLs rastreadas y sin indexar no es, por sí solo, un problema, siempre que las páginas que te dan el tráfico estén dentro. Lo que hay que vigilar es que **las impresiones y los clics no se vean afectados**, no que el número de páginas sin indexar sea cero. En sitios grandes, perseguir el rastreo perfecto es un esfuerzo que rara vez compensa.

## ¿Qué ocurrirá con las páginas con una base mala de rastreo?

Pues que habrá que trabajar el SEO técnico de manera inmediata. No es fácil, pero tampoco imposible.
Os dejo este ejemplo de un cliente con más de **300 millones de URLs rastreadas pero no indexadas**. Optimizar el *crawl budget* ha sido un gran reto, pero se ha conseguido poner orden y experimentar un crecimiento SEO.

![image](https://github.com/Emirodgar/w-emirodgar-com/assets/4302127/23df71d6-c9ab-41ee-bcd9-557f78616ce5){:class="img-responsive"}

Como siempre digo, cada acción SEO que realizamos debería tener asociado un `KPI` (métrica) que nos permita analizar el impacto -positivo o negativo- de lo que hemos conseguido.
En el caso del rastreo e indexación, debe ser el número de páginas indexadas y las impresiones/clics generados.

![image](https://github.com/Emirodgar/w-emirodgar-com/assets/4302127/a155f319-b2c9-4ac1-80af-16255d47abac){:class="img-responsive"}

¿Recordáis la fábula de los hermanos que querían arrancar la cola del caballo?. Lo consiguió aquél que fue pelo a pelo. Esta táctica no será rápida, pero si hemos trabajado bien el aspecto técnico, conseguiremos buenos resultados.


![image](https://github.com/Emirodgar/w-emirodgar-com/assets/4302127/7c5d3b4a-da96-4653-8976-c81d66837b9c){:class="img-responsive"}





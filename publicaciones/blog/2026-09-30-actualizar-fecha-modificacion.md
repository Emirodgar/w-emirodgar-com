---
title: Cuándo actualizar la fecha de modificación de un post (y cuándo no)
description: Cambiar la fecha de un contenido sin haber cambiado nada de fondo es maquillaje. Te cuento mi criterio del 20% para decidir cuándo toca mostrar una nueva fecha de modificación y cómo pedir la reindexación en Search Console.
image: https://emirodgar.com/cdn/images/og/estrategia-seo.png
layout: emirodgar_post
author: Emirodgar
lang: es_ES
sitemap: 1
feed: 1
date: 30-09-2026
date_modified: 27/10/2026
folder: seo
permalink: actualizar-fecha-modificacion-contenido

---

Actualizar contenido antiguo es una de las tareas con mejor retorno en SEO. Pero hay un paso que muchos hacen mal: la fecha. Unos la cambian cada vez que corrigen una coma y otros nunca la tocan, aunque hayan reescrito medio artículo. Os cuento mi criterio.

## ¿Por qué importa la fecha de modificación?

Porque es una señal para dos públicos distintos:

- **Para el usuario.** Ante dos resultados sobre el mismo tema, una fecha reciente transmite que la información está vigente. Y en temas como SEO, IA o normativa, una guía de hace tres años pierde credibilidad de entrada.
- **Para Google.** Google [recomienda](https://developers.google.com/search/docs/appearance/publication-dates) mostrar una fecha visible en la página e indicarla también en datos estructurados (`datePublished` y `dateModified`). Los sistemas de Google combinan varias señales para decidir qué fecha enseñar, y una de ellas es la que declaras tú.

Justo por eso no conviene jugar con ella. En esa misma documentación Google pide que no se actualice la fecha de forma artificial si no se ha modificado el contenido de manera significativa. Es mi suposición, pero una fecha que cambia sin que cambie nada debajo acaba restando confianza, no sumando.

## Mi regla: en torno al 20% del contenido

Tomad esto como criterio personal, no como algo que diga Google. Yo no toco la fecha de modificación hasta haber optimizado **en torno al 20% del contenido**. Por debajo de ese umbral, lo considero mantenimiento.

Un cambio sustancial, para mí, es cualquiera de estos:

- Reescribir o añadir secciones enteras.
- Actualizar datos, cifras, capturas o ejemplos que han dejado de ser válidos.
- Corregir información que ya no es cierta (un cambio de algoritmo, una función que Google ha retirado, una herramienta que ha cambiado).
- Replantear el enfoque para responder mejor a la intención de búsqueda actual.

Y esto, en cambio, no cuenta:

- Erratas y correcciones de estilo.
- Cambiar un enlace roto o añadir un enlace interno.
- Retocar el title o la meta description sin tocar el cuerpo.
- Reordenar párrafos sin aportar nada nuevo.

El 20% no es una cifra mágica. Sirve para no autoengañarme: si tengo que dudar sobre si el cambio es relevante, probablemente no lo es.

## Después de cambiar la fecha: pide la reindexación

Actualizar la fecha en tu web no significa que Google se entere al momento. Los pasos que sigo:

1. Publico los cambios y compruebo que la nueva versión y la fecha son visibles en la página.
2. Me aseguro de que la fecha visible y la de los datos estructurados (`dateModified`) coinciden.
3. En **Google Search Console**, inspecciono la URL con la herramienta de inspección y pulso **Solicitar indexación**.
4. Días después vuelvo a inspeccionarla para confirmar que Google ya ha rastreado la versión nueva.

Esta solicitud no garantiza nada: le dice a Google que hay algo nuevo que rastrear, pero decide él cuándo y si lo refleja. Además, tiene una cuota limitada de peticiones. Por eso tampoco tiene sentido pedirla por cada retoque menor, y es otro motivo para reservar el proceso completo (fecha más reindexación) a los cambios que lo merecen. Si una URL no acaba de indexarse, tengo otro post sobre [qué hacer cuando tu página no se indexa](https://emirodgar.com/pagina-no-indexa).

## No olvides el sitemap

Si tu sitemap incluye `lastmod`, mantenlo alineado con la fecha real de modificación. Google indica que solo usa ese valor cuando es consistentemente fiable, y un `lastmod` que cambia en todas las URLs en cada despliegue hace que lo ignore.

## ¿Y para la IA? Lo que sabemos y lo que no

Es tentador pensar que una fecha reciente hace que te citen más, y conviene frenarse. La [guía GEO 2027 de GDdash](https://gddash.com/geo-optimization-guide/) (John Shehata, 18 de octubre de 2026) reúne lo que hay y lo califica con prudencia:

- **Hay un estudio de laboratorio.** Fang, Tao, Chen, Chang y Sakai probaron en [Do Large Language Models Favor Recent Content?](https://arxiv.org/abs/2509.11353v2) que los modelos que reordenan resultados son sensibles a las fechas de publicación en el entorno que montaron. Eso no demuestra que cambiar una fecha aumente las citas en un buscador de IA real, y la propia guía advierte de que solo se revisó el resumen y la bibliografía del artículo.
- **Hay comentario de profesionales.** Metehan Yeşilyurt enlaza [hallazgos sobre la configuración de ChatGPT con esa investigación](https://metehan.ai/blog/i-found-it-in-the-code-science-proved-it-in-the-lab-the-recency-bias-thats-reshaping-ai-search/). La guía lo trata como interpretación sin verificar, no como confirmación de cómo funciona ChatGPT en producción.
- **Hay casos que mezclan causas.** Kevin Indig recomienda contenido fresco y etiquetas de "última actualización", pero su ejemplo con un cliente incluía cambios reales de contenido, así que no aísla el efecto de la etiqueta.
- **Hay una advertencia contra el truco fácil.** Peter J. Meyers (Moz), al analizar consultas de grounding, sugiere tratar la actualidad como una necesidad cuando el público la pide, en lugar de añadir años al texto de forma mecánica.

Mi lectura: si tienes un motivo real para actualizar, hazlo y muestra la fecha. Si no lo tienes, cambiarla no es una táctica de GEO con respaldo. Aleyda Solis lo resume bien en sus criterios de marcas ganadoras: [actualiza los hechos de forma sustancial y data con exactitud](https://www.aleydasolis.com/en/ai-search/ai-search-winning-brands-characteristics/).

Dos hábitos prácticos que salen de ahí:

- **Separa la fecha de publicación de la de revisión** y no las mezcles, ni en la página ni en los datos estructurados.
- **Anota qué cambió.** Un pequeño historial de cambios visible, o al menos mantenido internamente, sirve al lector que necesita saber si lo que leyó sigue valiendo, y a ti para comprobar que el 20 % se cumple de verdad.

## Conclusiones

- Cambia la fecha de modificación cuando el contenido haya cambiado de verdad, no cuando lo hayas tocado.
- Mi umbral es optimizar en torno al 20% del contenido. Es una regla mía, no de Google.
- Mantén coherentes la fecha visible, `dateModified` y `lastmod`.
- Solicita la reindexación en Search Console después de cada actualización sustancial, sabiendo que es una petición, no una orden.

Una fecha honesta vale más que una fecha reciente.

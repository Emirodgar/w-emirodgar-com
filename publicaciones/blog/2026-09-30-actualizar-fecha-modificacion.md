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

## Conclusiones

- Cambia la fecha de modificación cuando el contenido haya cambiado de verdad, no cuando lo hayas tocado.
- Mi umbral es optimizar en torno al 20% del contenido. Es una regla mía, no de Google.
- Mantén coherentes la fecha visible, `dateModified` y `lastmod`.
- Solicita la reindexación en Search Console después de cada actualización sustancial, sabiendo que es una petición, no una orden.

Una fecha honesta vale más que una fecha reciente.

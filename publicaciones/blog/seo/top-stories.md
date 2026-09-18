---
title: ¿Cómo aparecer en las Top Stories o noticias destacadas de Google?
description: Google ha cambiado por completo cómo se accede a Top Stories y al Google News Publisher Center. Ya no hay alta manual, ni AMP, ni feeds RSS. Te cuento qué aplica de verdad en 2026.
image: https://emirodgar.com/cdn/images/og/estrategia-seo.png
layout: emirodgar_post
author: Emirodgar
lang: es_ES
sitemap: 1
feed: 1
date: 27/01/2022
date_modified: 18/09/2026
folder: seo
permalink: top-stories

--- 

Google dispone de un resultado específico para mostrar, de forma destacada, artículos de actualidad que considere relevantes para la búsqueda que el usuario está realizando. Aquí no sólo aparecerán noticias de medios de comunicación (periódicos online) sino que también podrán aparecer artículos de páginas especializadas o blogs.

> **Aviso de actualización (septiembre 2026)**: este artículo original recomendaba darte de alta manualmente en Publisher Center, subir un feed RSS y tener versión AMP. Los tres requisitos han desaparecido. Te explico qué aplica de verdad ahora mismo.

## ¿Cómo aparecer en las Top Stories?

Lo más importante sigue siendo generar contenidos con una frecuencia estable y de calidad alta (es decir, que los usuarios que nos visitan desde Google no reboten con frecuencia), pero el proceso para conseguirlo ha cambiado de raíz:

-   **Ya no hay alta manual.** Desde octubre de 2025, [Google News no acepta solicitudes manuales](https://support.google.com/news/publisher-center/answer/9607026): la inclusión es automática, en base al rastreo del sitio y a si el contenido cumple las [políticas de contenido de Google News](https://support.google.com/news/publisher-center/answer/6204050). No hay "esperar la aprobación", hay cumplir las políticas.
-   **El feed RSS enviado desde Publisher Center ya no se usa.** Google lo anunció en 2025. Si lo tenías configurado ahí, puedes dejarlo, pero no aporta nada a tu visibilidad.
-   **[AMP](https://emirodgar.com/amp) no es necesario.** Dejó de ser un requisito para Top Stories en junio de 2021, y desde mayo de 2023 las páginas AMP y no-AMP posicionan exactamente igual en el carrusel. Si aún mantienes AMP solo por esto, ya no hace falta.
-   **Los datos estructurados siguen siendo clave.** Incluye `NewsArticle` o `Article` (según corresponda) para que Google entienda el contenido y pueda mostrarlo enriquecido.
-   **Las [Core Web Vitals](https://emirodgar.com/core-web-vitals-problemas) han sustituido a AMP como filtro de rendimiento.** Una web lenta o con mala experiencia de usuario sigue jugando en tu contra, solo que ahora se mide directamente sobre tu web real, no sobre una versión AMP paralela.

¿Qué papel le queda entonces a **[Publisher Center](https://publishercenter.google.com/publications)**? Ya no es una puerta de entrada, es una herramienta de gestión: sirve para personalizar cómo se muestra tu marca (logo, secciones), enviar tu sitemap de noticias y consultar el estado de tu contenido ya indexado.

## ¿Qué hacer si somos un medio de comunicación?

En el caso de los periódicos online -donde existe una gran frecuencia de publicación- se recomienda, a mayores de lo anterior, disponer de un sitemap XML específico que envíes a través de Publisher Center, con los siguientes requisitos:

-   Tener un máximo de 1000 URLs por sitemap.
-   Sólo URLs de artículos con un máximo de 48 horas de antigüedad.
-   Se tienen que actualizar a medida que se crean nuevas noticias.
-   Añadir los campos `<news:title>`,  `<news:publication>` y `<news:publication_date>`, como mínimo.
-   Es importante que la etiqueta `<news:publication>` refleje el mismo nombre escrito, exactamente como lo declarado en el Centro de Editores. Es sensible a las mayúsculas.


<!--stackedit_data:
eyJoaXN0b3J5IjpbMTY2OTY1NjI0LDcwNDk5MzU2OF19
-->
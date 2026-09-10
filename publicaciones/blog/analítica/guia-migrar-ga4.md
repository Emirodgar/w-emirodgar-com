---
title: Guía para migrar a Google Analytics 4 (GA4)
description: Universal Analytics lleva años apagado. Si aún te queda algún resto suyo, te explico cómo detectarlo y limpiarlo, y cómo comprobar que tu implementación de GA4 está completa.
image: https://emirodgar.com/cdn/images/og/analitica.png
layout: emirodgar_post
author: Emirodgar
lang: es_ES
sitemap: 1
feed: 1
date: 18/03/2022
folder: analitica
permalink: google-analytics-migracion-ga4

--- 

[Universal Analytics dejó de procesar datos en julio de 2023](https://blog.google/products/marketingplatform/analytics/prepare-for-future-with-google-analytics-4/) y Google Analytics 4 (GA4) es desde entonces el único producto de analítica web disponible. Si tu web sigue viva, la migración debería estar hecha desde hace tiempo, pero en auditorías sigo encontrando restos de Universal Analytics olvidados, así que merece la pena repasar cómo detectarlos y limpiarlos.

## ¿Cómo saber si te queda algún resto de Universal Analytics?

Busca en el código fuente de tu web o en tu gestor de etiquetas cualquier script que cargue `analytics.js` o `ga.js`, o un identificador con formato `UA-XXXXXXX-X`. Si lo encuentras, es código muerto: Google dejó de procesar esos datos hace años, así que solo está sumando peso a tu página sin ningún beneficio.

## Pasos para comprobar (o completar) la migración

1. **Confirma que tu propiedad es GA4**. En el panel de administración de Analytics, el identificador debe empezar por `G-`, no por `UA-`.
2. **Revisa que el etiquetado esté completo**. Los eventos de conversión, el comercio electrónico o cualquier medición personalizada que tuvieras en Universal Analytics no se migran solos: hay que volver a configurarlos en GA4.
3. **Elimina el código antiguo**. Si todavía queda algún snippet de Universal Analytics en tu web o en Google Tag Manager, retíralo.
4. **Busca etiquetas huérfanas en Tag Manager** que sigan apuntando a un `UA-` que ya no existe.

## Conclusiones

Si necesitabas el histórico de datos de Universal Analytics, la ventana para exportarlo ya se cerró: Google los eliminó definitivamente. Lo único que queda pendiente, si aún no lo has hecho, es limpiar el código muerto y asegurarte de que GA4 está midiendo todo lo que de verdad te importa.
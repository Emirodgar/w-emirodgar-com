---
title: Cómo preparar tu web para agentes de IA
description: Los agentes de IA no solo leen tu web, la usan. Guía práctica en cuatro pasos para que puedan verla, descubrirla y completar tareas en ella, y cómo medir si lo consiguen.
image: https://emirodgar.com/cdn/images/og/estrategia-seo.png
layout: emirodgar_post
author: Emirodgar
lang: es_ES
sitemap: 1
feed: 1
date: 08-10-2026
folder: geo
permalink: preparar-web-agentes-ia

---

Un rastreador de IA lee tu HTML. Un **agente** hace algo más: abre tu web, navega, rellena formularios y pulsa botones en nombre de un usuario. Las dos cosas fallan por motivos distintos, y casi todo lo que he ido publicando sobre IA y SEO hablaba de la primera.

Esta guía junta lo que he ido viendo en las últimas semanas, ordenado por lo que haría primero. Parte de lo que cuento son estándares en borrador y estudios de un solo laboratorio, así que lo indico donde corresponde.

## 1. Que lo vean: contenido en el HTML inicial

Es lo más básico y lo que más veces falla. La mayoría de rastreadores de IA no ejecutan JavaScript, así que si tu contenido depende de él, no lo ven. Los pasos concretos (SSR, pruebas con `curl`, Search Console) los tienes en [CSR vs SSR: qué rastreadores ven tu JavaScript](https://emirodgar.com/csr-vs-ssr-rastreadores-javascript).

En un ecommerce no hace falta renderizarlo todo en servidor: contenido, enlaces y metadatos de home, categorías y productos en el HTML inicial, y JavaScript para filtros y personalización. También conviene revisar que `robots.txt` y el CDN no bloquean por error a los bots que sí te interesan, como explico en [segmentar el bloqueo de bots](https://emirodgar.com/segmentar-bloqueo-bots).

## 2. Que lo descubran: catálogo de recursos

Si tu sitio ofrece algo que un agente pueda usar (una API, un servidor MCP, un buscador), necesita encontrarlo. Lighthouse 13.5 ya incluye la auditoría **Agentic Resource Discovery**, que busca un catálogo en la directiva `Agentmap` de robots.txt, en una etiqueta `<link rel="ai-catalog">`, en una cabecera HTTP `Link` o en `/.well-known/ai-catalog.json`. Si no lo encuentra, aparece como "No aplicable". La especificación ARD está en borrador (v0.91), con `/.well-known/ard.json` como ruta propuesta.

Mi criterio: si no expones nada a agentes, no tienes nada que publicar. Si lo haces, merece la pena un catálogo y vigilar cómo evoluciona la especificación. Más detalle en [SEO en la era de la IA](https://emirodgar.com/seo-inteligencia-artificial).

## 3. Que lo puedan usar: la interfaz importa

Aquí está lo menos conocido. Merj probó agentes reales (ChatGPT Agent en Atlas, Computer Use de Claude, Comet de Perplexity y otros) y vio que los agentes **sí ejecutan JavaScript y aceptan cookies**, pero tropiezan con la interfaz. Lo que más les rompe:

- Superposiciones transparentes que absorben los clics.
- Diálogos nativos como `window.confirm()` y campos deshabilitados.
- Controles que no son controles reales, como un `<div>` en lugar de un `<button>`.
- Mensajes de error o éxito que desaparecen solos (los *toasts*).

El caso que más me ha llamado la atención es el de ARIA. Con etiquetas deliberadamente engañosas, ChatGPT Agent pulsó "Cancelar" primero en 25 de 25 ejecuciones cuando la tarea era guardar. **Una etiqueta ARIA incorrecta puede ser peor que no tener ninguna**, porque el agente se fía de ella antes que de lo que ve.

Un orden de trabajo razonable:

1. Cambia los `<div>` con comportamiento de botón por `<button>` reales.
2. Audita el ARIA por veracidad, no solo por presencia.
3. Elimina los overlays invisibles.
4. Haz persistentes los mensajes de error y de confirmación.
5. Añade pruebas de interacción al despliegue, igual que las [comprobaciones SEO automáticas antes de publicar](https://emirodgar.com/shopify-seo).

Todo esto es también accesibilidad, así que mejora tu web para personas.

## 4. Mide si funciona

Las herramientas de puntuación como [Is Agentic](https://is-agentic.com/) son un buen punto de partida, pero Merj es claro: miden prerrequisitos, no resultados. La única forma de saber si un agente completa tu compra, tu reserva o tu formulario es **probarlo en tus recorridos críticos**, en tus mercados y en tus idiomas. Su rendimiento baja fuera del inglés: en el estudio que citan, entre 9 y 18 puntos según el modelo.

Y una consecuencia para tu analítica: los agentes parecen usuarios, con reintentos y navegación mecánica. Si puedes identificarlos, exclúyelos de los embudos y de la medición de rendimiento real para no contaminar los datos.

Merj midió también que el éxito medio de los agentes en su banco de pruebas pasó de un 30 % a un 60 % entre noviembre de 2025 y marzo de 2026. Las pruebas de hoy envejecen rápido.

## 5. WebMCP, solo si lo justifica

[WebMCP](https://emirodgar.com/que-es-mcp) es una propuesta para que la página exponga acciones estructuradas a los agentes sin que tengan que interpretar la interfaz. Sigue en fase experimental (prueba de origen en Chrome 149). En el benchmark de Merj fue entre 2,5 y 7,5 veces más rápido y mucho más barato por tarea, pero es un solo benchmark. Yo lo probaría en un flujo concreto antes de plantear nada más grande.

Si das ese paso, dos cautelas que también señala Merj: pon límites a las acciones destructivas y trata el contenido generado por usuarios (reseñas, comentarios) como una posible vía de inyección de instrucciones para el agente.

## Por dónde empezaría

Primero que el contenido esté en el HTML inicial. Después, los controles reales y el ARIA veraz, que ayudan a todos. Después, medir con tareas reales. El catálogo ARD y WebMCP dependen de si tu sitio ofrece algo que un agente pueda usar, y todavía es pronto para apostar fuerte por ellos.

Tu interfaz ya es una interfaz de software para los agentes, aunque nadie la haya documentado ni testeado. Mejor probarla tú antes que enterarte por una venta perdida.

*Esta guía forma parte de [El SEO en la era de la IA - Cómo optimizar para los modelos de lenguaje](https://emirodgar.com/seo-inteligencia-artificial).*

## Más sobre este tema

- [GEO para ecommerce, cómo aparecer en las compras con IA](https://emirodgar.com/geo-ecommerce)
- [Qué es el Protocolo de Contexto de Modelo (MCP)](https://emirodgar.com/que-es-mcp)
- [Cómo montar tu primer agente de IA para SEO con Claude (paso a paso)](https://emirodgar.com/agente-seo-claude)
- [Agentes IA](https://emirodgar.com/agentes-ia)
- [Google AP2 el protocolo que cambiará las compras online con IA](https://emirodgar.com/google-ap2-protocolo-compras-online-ia)
- [Cómo cambia el proceso de compra en la era de la inteligencia artificial](https://emirodgar.com/como-cambia-el-proceso-de-compra-en-la-era-de-la-inteligencia-artificial)
- [Riesgos de conectar tus herramientas a ChatGPT y otros agentes de IA](https://emirodgar.com/riesgos-conectar-herramientas-chatgpt)

---
title: GEO para ecommerce, cómo aparecer en las compras con IA
description: ChatGPT y Google ya recomiendan productos dentro de la conversación. Te cuento qué dicen los datos sobre feeds y web, qué ofrece Merchant Center y qué revisaría en una tienda online para aparecer.
image: https://emirodgar.com/cdn/images/og/estrategia-seo.png
layout: emirodgar_post
author: Emirodgar
lang: es_ES
sitemap: 1
feed: 1
date: 08-10-2026
folder: geo
permalink: geo-ecommerce

---

Cuando alguien le pide a ChatGPT o a AI Mode "unas zapatillas de trail para pie ancho por menos de 120 euros", la respuesta ya no es una lista de enlaces: es una **recomendación de productos con comparativa**. Si tienes una tienda online, la pregunta es de dónde saca esos productos y qué puedes hacer para estar.

Aviso: este terreno cambia a una velocidad que no he visto en el SEO clásico, y buena parte de los datos son de EE. UU. y de un solo proveedor. Lo señalo donde aplica.

## Dos fuentes para los productos: el feed y la web

Un asistente puede construir una recomendación de producto de dos maneras: **leyendo un feed** que el comercio envía, o **rastreando páginas** de la web. Para ver cuál pesa más hay un dato reciente. Según [Search Engine Journal, que recogió un estudio de Profound](https://searchenginejournal.com/chatgpt-shopping-results-lean-hard-on-product-feeds/589000) en septiembre de 2026:

- Sobre 1.757.723 ejecuciones de prompts en julio, el porcentaje de recomendaciones de ChatGPT Shopping que Profound clasifica como **integradas con feed** pasó del **8,26 %** al **61,54 %** el 10 de julio, y rondaba el 65 % a principios de septiembre.
- De los 687 comercios que seguían, **450 perdieron al menos un tercio de su visibilidad** en Shopping, y 67 ganaron otro tanto. Los diez primeros comercios pasaron del 22,5 % al 41,8 % de las referencias.
- Profound estima que cerca del 35 % de la recuperación por feed estaba conectada a Shopify, que ofrece acceso al catálogo ya integrado.

Las cautelas, que son importantes:

- Son **prompts seguidos por un proveedor**, no sesiones de compradores reales. Describen lo que ChatGPT devolvió a un sistema de monitorización.
- El cambio coincidió con el lanzamiento de GPT-5.6 el 9 de julio, pero **OpenAI no lo ha vinculado oficialmente** a ese lanzamiento. La atribución es observacional.
- No sé si esos porcentajes se cumplen en España, ni en qué mercados está activo ChatGPT Shopping para tu catálogo.

Mi lectura: si estos datos se sostienen, **el feed ha dejado de ser un complemento** para ser la vía principal. Y a quien no tenga feed bien montado le puede pasar lo que a los 450.

## Qué pasó con el checkout dentro de ChatGPT

OpenAI presentó el [Agentic Commerce Protocol](https://openai.com/index/buy-it-in-chatgpt/), un estándar abierto desarrollado con Stripe, y con él el pago dentro de la conversación (Instant Checkout). En marzo de 2026, según [este análisis](https://www.dataiads.io/en/blog/openai-chatgpt-abandon-checkout-decouverte-produit-ecommerce) que cita a The Information, y con una confirmación genérica de OpenAI ("evolucionar la estrategia de comercio"), se abandonó el checkout nativo y se pivotó al **descubrimiento de producto**: el usuario compara en ChatGPT y compra en la web del comercio.

Es una fuente de segunda mano y los detalles pueden variar, pero la conclusión práctica es clara: **no te la juegues a un checkout dentro de la IA**. Tu web sigue siendo donde se cierra la venta. Más contexto sobre el pago por agentes en [Google AP2 y las compras online con IA](https://emirodgar.com/google-ap2-protocolo-compras-online-ia).

## Google: Merchant Center y AI Mode

En Google la vía es el **Merchant Center**. Las compras en AI Mode se apoyan en el Shopping Graph y en los feeds de los comercios, y según las guías del sector los productos con datos completos pueden aparecer también en fichas gratuitas, sin necesidad de campañas de pago. Este último punto no lo he contrastado con documentación de Google, así que compruébalo en tu cuenta.

Lo que sí documenta Google es un **informe de rendimiento de IA en Merchant Center**, con cuatro bloques:

- **Cuota de marca** en experiencias de IA frente a competidores similares.
- **Rendimiento del embudo** (descubrimiento, evaluación, compra).
- **Términos de producto** que se buscan en conversaciones, y tu cuota de voz.
- **Atributos de producto** populares (color, estilo, material) y una **puntuación de completitud de atributos**.

Cubre AI Mode, AI Overviews y la app de Gemini, y Google [lo despliega](https://support.google.com/merchants/answer/17117204?hl=en) desde mayo de 2026 en Estados Unidos, Canadá, Australia, India y Nueva Zelanda. España no figura en esa lista, así que hoy no puedes contar con él. Sí es una pista de qué mira Google: atributos completos.

## Qué revisaría en una tienda

**1. El feed, antes que nada.** Los fallos más habituales en un feed:

- **Identificadores** (GTIN, marca, MPN) ausentes o incorrectos.
- **Títulos** que no dicen lo que es el producto ni sus atributos clave.
- **Atributos incompletos**: talla, color, material, compatibilidad.
- **Precio y stock desactualizados**. Un asistente que recomienda algo agotado o a otro precio genera desconfianza, y encima es una forma de [que la IA repita información falsa sobre tu marca](https://emirodgar.com/ia-informacion-erronea-marca).

**2. Coherencia entre feed, web y datos estructurados.** El mismo producto debe decir lo mismo en los tres sitios. Los datos estructurados tienen que coincidir con lo visible, como explico en [datos estructurados y la IA](https://emirodgar.com/datos-estructurados-seo-llm).

**3. La ficha de producto como complemento.** El feed y el schema tienen límites de caracteres y no recogen matices: compatibilidades, condiciones de uso, devoluciones. Lo desarrollo en [¿sigue importando el copy de las páginas de producto?](https://emirodgar.com/copy-pagina-producto-ia). Y evita copiar la misma descripción palabra por palabra en tu web y en un marketplace.

**4. Opiniones y fuentes de terceros.** En retail, el análisis de Prosperity Media sobre Australia midió que el 39,3 % de las citas eran listados de terceros y solo el 1,1 % del sitio de la marca. Lo cuento con sus cautelas en [las fuentes que alimentan las citas de la IA](https://emirodgar.com/wikipedia-podcasts-reddit-citas-ia). Reseñas, comparativas y guías de terceros pesan.

**5. Acceso técnico.** Contenido en el HTML inicial y rastreadores no bloqueados por error. Está en [cómo preparar tu web para agentes de IA](https://emirodgar.com/preparar-web-agentes-ia), incluida la parte de que los agentes puedan completar la compra en tu web.

**6. Plataforma.** Si usas Shopify, revisa qué opciones de catálogo y de feeds ofrece. Mi [guía SEO para Shopify](https://emirodgar.com/shopify-seo) cubre el resto de la parte técnica.

## Cómo saber si funciona

- **En Merchant Center**, la calidad y completitud de atributos de tu feed, y el informe de IA si tu mercado lo tiene.
- **En GA4**, el tráfico y la conversión de fuentes de asistentes. Cómo montarlo está en [cómo medir tu visibilidad en la IA](https://emirodgar.com/medir-visibilidad-ia).
- **Con una batería de prompts de producto**, etiquetados por tipo de compra (comparativa, recomendación por presupuesto, caso de uso), repetidos varias veces y con línea base. Una medición suelta no es un dato.

## Lo que no haría

- Montar todo sobre una sola plataforma o un solo formato. En el estudio de Profound, 450 de los 687 comercios seguidos perdieron visibilidad en cuestión de días.
- Dejar el feed en manos de un plugin sin revisarlo.
- Optimizar el copy "para la IA" a costa del que lee una persona. No hay que elegir, y Adam Riemer lo explica bien en el post del copy de producto.
- Dar por buenos los porcentajes de una herramienta de seguimiento.

## Conclusiones

- Los datos de un proveedor apuntan a que, en ChatGPT Shopping, los feeds han pasado a ser la fuente dominante. Es observacional y de EE. UU.
- Google evalúa la completitud de atributos del feed en su informe de IA de Merchant Center, que aún no llega a España.
- El checkout nativo en la IA retrocedió, y tu web sigue siendo donde se cierra la venta.
- Prioridad: feed completo y coherente con web y schema, fichas con matices, opiniones de terceros y acceso técnico.

En ecommerce, el SEO siempre fue un trabajo de datos de producto. Con la IA, más todavía.

*Este artículo forma parte de la guía [Cómo preparar tu web para agentes de IA](https://emirodgar.com/preparar-web-agentes-ia).*

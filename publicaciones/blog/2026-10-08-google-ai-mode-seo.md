---
title: Google AI Mode, qué es y qué puedes hacer como SEO
description: AI Mode es la búsqueda conversacional con IA de Google, ya disponible en español. Te cuento cómo funciona, qué dice Google que necesitas para aparecer, qué datos tienes en Search Console y qué haría yo con tu web.
image: https://emirodgar.com/cdn/images/og/estrategia-seo.png
layout: emirodgar_post
author: Emirodgar
lang: es_ES
sitemap: 1
feed: 1
date: 08-10-2026
folder: geo
permalink: google-ai-mode-seo

---

**AI Mode** (Modo IA en español) es la experiencia de búsqueda de Google que, en lugar de una lista de enlaces, genera una respuesta redactada con Gemini, con citas a las fuentes, y permite seguir preguntando como en una conversación. Llegó a España en octubre de 2025, según [recogió Xataka](https://www.xataka.com/robotica-e-ia/google-lanza-espana-su-modo-ia-ello-nueva-forma-realizar-busquedas-web-asi-puedes-activarlo), y es opcional: el usuario tiene que activarlo.

Lo que me interesa aquí no es la novedad, sino qué cambia para quien trabaja SEO. Voy a separar lo que dice Google, lo que han medido terceros y lo que es opinión mía.

## Qué es y en qué se diferencia de las AI Overviews

Las **[AI Overviews](https://emirodgar.com/ai-overviews-google-publishers)** son un resumen que aparece dentro de la página de resultados clásica. **AI Mode** es una pantalla aparte: la respuesta es el resultado, y la conversación continúa con preguntas de seguimiento.

Comparten técnica. Google lo documenta así: usa *query fan-out*, es decir, "múltiples búsquedas relacionadas en subtemas y fuentes de datos", para encontrar un conjunto más amplio y diverso de enlaces útiles. Cómo se aplica a tu contenido lo cuento en [cómo escribir contenido citable y cubrir el fan-out](https://emirodgar.com/contenido-citable-query-fan-out).

## Qué dice Google que necesitas para aparecer

La documentación oficial sobre las [funciones de IA en Search](https://developers.google.com/search/docs/appearance/ai-features) es clara y conviene tenerla presente:

- **No hay requisitos adicionales** ni optimizaciones especiales para aparecer en AI Overviews o AI Mode.
- Las páginas se seleccionan con los mismos criterios de la búsqueda: tienen que estar **indexadas y ser elegibles para mostrar fragmentos**.
- Las buenas prácticas de siempre siguen valiendo: contenido de calidad, rastreo permitido, enlaces internos, buena experiencia de página, contenido en texto, buenas imágenes y vídeos, y datos estructurados que coincidan con lo visible.

Mi lectura: si alguien te vende "optimización específica para AI Mode" como un servicio con su propio checklist técnico, pídele la fuente. Lo que sí hay es una forma de escribir y de organizar el contenido que facilita que te elijan, y eso es [lo que cuento en el post de citabilidad](https://emirodgar.com/contenido-citable-query-fan-out).

## Qué efecto tiene en el tráfico

Aquí hay un estudio que conviene conocer con sus matices. El primer experimento aleatorizado, con 1.100 usuarios de Chrome en EE. UU. durante siete días, encontró que al forzar las búsquedas a AI Mode el porcentaje que acababa en una web externa cayó **18,8 puntos porcentuales**, y los usuarios declararon menos satisfacción. Lo desgloso en [qué significan las AI Overviews para editores y marcas](https://emirodgar.com/ai-overviews-google-publishers).

Las cautelas son importantes: muestra joven, siete días, y casi todas las búsquedas pasaron por AI Mode porque se forzó, algo muy distinto a que cada usuario decida usarlo (antes del experimento suponía el 0,6 %). Es evidencia útil, no una predicción para tu web.

## Qué datos tienes

Según la documentación, el tráfico de AI Overviews y AI Mode **está incluido en el tráfico general de Search Console**, dentro del informe de rendimiento de búsqueda (tipo Web). Hasta donde he podido comprobar, no hay un filtro propio que separe AI Mode del resto, pero te recomiendo verificarlo en tu propiedad porque Google cambia los informes con frecuencia.

Además, Search Console tiene un **informe de IA generativa** que da impresiones. Qué cuenta y qué no, y cómo cruzarlo con tráfico y negocio, está en [cómo sacar partido al informe de IA generativa](https://emirodgar.com/informe-ia-generativa-search-console).

Y tres avisos de Mike King (iPullRank) sobre medición, que recogí en [GEO deja de adivinar y empieza a probar](https://emirodgar.com/geo-empieza-a-probar):

- **Google no tiene API de AI Mode.** Si una herramienta dice medirlo por API, no es AI Mode.
- **Una medición no es un dato.** Una sola ejecución de un prompt convierte una tirada de dados en un hecho.
- **Cuidado con lo que se hereda sin verificar.** Cuenta cómo Google corrigió en una semana un atributo `_noreferrer` mal implementado en AI Mode, y un año después seguía circulando entre proveedores que había sido diseño deliberado.

Para el tráfico que llega a tu web, complementa con GA4, como sugiere la propia documentación, y con lo que describo en [cómo medir tu visibilidad en la IA](https://emirodgar.com/medir-visibilidad-ia).

## No hay una única respuesta que optimizar

AI Mode se puede personalizar. En el experimento de iPullRank con Google Personal Intelligence, la función opcional que deja a Gemini y a AI Mode usar Gmail, YouTube, Fotos y Calendar, la visibilidad de unas marcas subió un 40 % tras recibir emails que las recomendaban, incluso aparecieron marcas inventadas, y el fan-out se personalizó. Es un experimento con tres cuentas y cuatro semanas, y hay que activar la función, así que no sé cuánta gente la usa hoy.

La consecuencia práctica, que explico en [cuando AI Mode lee el correo del usuario](https://emirodgar.com/google-personal-intelligence-seo): cada usuario puede ver una respuesta distinta, y parte de lo que la condiciona no está en tu web. Producto bueno, presencia donde está tu audiencia y una lista de correo propia pesan más que ninguna etiqueta.

## Controles que sí tienes

Si quieres limitar qué se muestra de tus páginas, Google documenta `nosnippet`, `data-nosnippet`, `max-snippet` y `noindex`. Y **Google-Extended** sirve para limitar el uso de tu contenido en el entrenamiento y la fundamentación de otros sistemas de Google.

Ojo con asumir que `robots.txt` te protege de aparecer en una respuesta de IA: ya conté que no es así en el caso de las AI Overviews. Y recuerda que limitar fragmentos limita también tu visibilidad. Antes de tocar nada, decide qué es más valioso para ti, que te citen o que no te usen. Hay más matices en [cómo bloquear el rastreador de las IA](https://emirodgar.com/bloquear-rastreador-ia).

## Qué haría yo

1. **Comprobar lo básico.** Páginas indexadas, con fragmentos permitidos y con el contenido en el HTML inicial.
2. **Escribir para subpreguntas.** Para tus temas principales, lista las subpreguntas y cubre cada una con un pasaje que se entienda suelto.
3. **Mirar Search Console cada semana.** No para optimizar un número, sino para detectar caídas pronto.
4. **Segmentar el tráfico y la conversión.** Si te llega tráfico desde Google tras una respuesta de IA, es más probable que el clic sea más profundo en el embudo. Google afirma que los clics desde páginas con AI Overviews son de mayor calidad, y yo lo trataría como hipótesis a comprobar en tu web.
5. **Reforzar lo que no controlas.** Marca, menciones y audiencia propia.

## Conclusiones

- AI Mode es una pantalla de respuesta con fan-out, ya disponible en España y opcional.
- Google dice que no hay optimizaciones especiales: indexación, fragmentos y buen contenido.
- Su tráfico se suma a Search Console, y las herramientas externas que lo miden por API no miden AI Mode.
- Cada respuesta puede ser distinta por usuario, así que mide tendencias y no posiciones.

Es el mismo SEO de siempre, pero con una pregunta más: si te citan y qué hacen después.

*Este artículo forma parte de la guía [AI Overviews en Google qué significa para editores y marcas en 2026](https://emirodgar.com/ai-overviews-google-publishers).*

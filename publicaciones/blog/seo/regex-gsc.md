---  
title: Cómo usar regex en Google Search Console para descubrir oportunidades SEO ocultas  
description: Aprende a usar expresiones regulares (regex) en Google Search Console para encontrar consultas valiosas y entender mejor la intención de búsqueda de tus usuarios.  
image: https://emirodgar.com/cdn/images/og/estrategia-seo.png  
layout: emirodgar_post  
author: Emirodgar  
lang: es_ES  
sitemap: 1  
feed: 1  
date: 14-10-2025  
folder: seo  
permalink: regex-google-search-console  
---  


¿Sabías que **Google Search Console** esconde más información de la que parece a simple vista? Con un pequeño truco, puedes descubrir qué tipo de consultas están llevando tráfico a tu web y **detectar oportunidades SEO** que probablemente estés pasando por alto.  
Todo gracias a las **expresiones regulares (regex)**.


## ¿Qué son las expresiones regulares y por qué deberías usarlas?

Las expresiones regulares, o **regex**, son patrones de búsqueda que permiten **filtrar datos de forma avanzada**. En el caso de Search Console, te ayudan a encontrar **consultas específicas** que comparten una intención común: informacional, comparativa, transaccional, etc.

En otras palabras, con regex puedes transformar tus datos de consultas en **insights accionables** que mejoren tu [estrategia SEO](https://emirodgar.com/estrategia-seo).

## ¿Cómo aplicar filtros regex en Google Search Console?

El proceso es muy sencillo:

1. Abre **Google Search Console**.  
2. En el menú de la izquierda, entra en **“Rendimiento”**.  
3. Haz clic en **“+ Añadir filtro”**.  
4. Selecciona **“Consulta”**.  
5. En el desplegable, cambia la opción a **“Personalizado (regex)”**.  
6. Pega uno de los patrones que te mostraré a continuación.

Y listo. En segundos tendrás una nueva forma de explorar los datos de tus búsquedas.
Te dejo una captura de GSC para que veas cómo es el menú donde tenemos que interactuar.

<img width="731" class="img-responsive" alt="image" src="https://github.com/user-attachments/assets/1a0bf6bf-74ce-44fb-876b-25aea74776b4" />


## ¿Qué tipo de consultas puedes identificar?

A continuación tienes varios **patrones regex** que puedes copiar y pegar directamente en Search Console para descubrir distintos tipos de intención de búsqueda.  

### 🧠 Consultas informacionales
Perfectas para detectar contenido tipo guías, tutoriales o explicaciones.

🧠 Consultas informacionales

Perfectas para detectar contenido tipo guías, tutoriales o explicaciones.

``
\b(how to|guide|tutorial|step by step|tips|tricks|ways to|best way to|learn|help|explain|understand|instruction|methods|examples|meaning of|definition)\b
``

Estas búsquedas suelen responder a la fase inicial del embudo. Si detectas muchas, puede que necesites reforzar tu contenido educativo o de apoyo.

### ⚖️ Comparaciones

Muy útiles para nichos con productos o servicios similares.

``
\b(best|vs|versus|compare|comparison|alternative|better|cheaper|top|difference)\b
``

Si tu web aparece en estas consultas, estás compitiendo directamente con otras opciones del mercado. Aquí es donde entran en juego comparativas, reseñas o análisis detallados.

### 🛍️ Consultas sobre productos o servicios

Te permiten identificar usuarios que están valorando una compra o una contratación.

``
\b(price|cost|buy|purchase|available|best|quality|brand|reviews|features|options|model)\b
``

Son búsquedas clave para páginas de producto, fichas o servicios.

### 💰 Intención transaccional

Los usuarios aquí ya están listos para comprar.
``
\b(buy|purchase|price|cost|cheap|discount|deal|order|shop|store|online|sale|best price|in stock)\b
``

Si tu negocio depende de ventas directas o conversiones, esta información es oro puro.

### 🧭 Intención navegacional o de marca

Ideal para analizar la percepción de tu marca y los temas de soporte o confianza.
``
\b(review|rating|customer service|support|warranty|refund|complaint|feedback|scam|trustworthy|experience)\b
``

Si detectas un volumen alto aquí, revisa tu reputación o considera añadir testimonios y casos de éxito.

### 🛠️ Consultas para SaaS o herramientas

Si trabajas con software, esta regex te ayudará a segmentar fácilmente.

``
\b(?:tool|software|app|platform|program|solution|service)s?\b
``

Perfecta para entender qué funcionalidades o tipos de herramientas buscan los usuarios.

## ¿Qué podemos hacer con esta información?

Una vez tengas los resultados, analiza:

- Qué tipo de intención domina tu tráfico orgánico.

- Qué huecos existen en tus contenidos.

- Qué oportunidades podrías aprovechar para crear nuevas páginas o mejorar las existentes.

>Por ejemplo, si ves que muchas búsquedas son comparativas (“vs”, “mejor que”), quizá necesites una sección de comparativas o un post que contraste tus productos frente a la competencia.

## Bonus tip: extensiones que te facilitan la vida

Si no quieres copiar y pegar cada regex, puedes usar la extensión “GSC Helper” de Stephan Czysch, que incluye filtros preconfigurados. Te ahorrará tiempo y te permitirá experimentar con distintos tipos de consultas.

Eso sí, ten en cuenta que al aplicar filtros regex, Search Console suma las métricas de todas las páginas, por lo que los datos (como impresiones) pueden inflarse. Es un pequeño detalle técnico que conviene tener presente.


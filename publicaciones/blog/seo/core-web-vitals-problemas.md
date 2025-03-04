---
title: Core Web Vitals, problemas y soluciones
description: 
lang: es_ES
author: Emirodgar
sitemap: 1
feed: 1
folder: seo
layout: emirodgar_post
date: 19/05/2021
date_modified: 04/03/2025
image: https://emirodgar.com/cdn/images/og/estrategia-seo.png
permalink: core-web-vitals-problemas

---



Las Core Web Vitals son una serie de métricas que utiliza Google para garantizar una correcta experiencia de los usuarios en una página web. A mayores, suman como un [factor SEO](https://emirodgar.com/factores-seo) para el posicionamiento web, aunque no son uno de los más relevantes.

A continuación vamos a ver algunos de los problemas a los que nos podemos enfrentar cuando trabajamos la optimización de las mismas.

## ¿Pueden ser los valores de las Core Web Vitals peores en Desktop que en Mobile?

Aunque por norma general los resultados de tiempo de carga y experiencia de usuario en dispositivos móviles suelen ser peores que en escritorio, a veces ocurre que no es así. 

Como podemos observar en la siguiente imagen, los **datos de campo** en los que se basa este informe de Google Search Console muestras una mayoría de URLs correctas para la versión móvil pero un gran bloque de URLs que necesitan mejorar para la versión de escritorio.

![Emirodgar](https://i.imgur.com/5MeNWZy.png){:class="img-responsive"}

**¿Cómo podemos abordar esta situación?**. Lo primero es entender que cada bloque analizado (desktop y mobile) es calculado en base a un subconjunto de usuarios diferentes según el dispositivo con el que se han conectado. En este caso sabemos que la versión de escritorio tiene problemas para disponer de una buena experiencia de usuario (lo vemos reflejado en la imagen anterior). 

Estas son algunas de las razones que podrían explicar un peor rendimiento en escritorio frente a móvil: 

- **La velocidad de conexión de los usuarios de escritorio**: si los usuarios que acceden desde escritorio lo hacen con ordenadores antiguos y/o conexiones lentas, Google Search Console reflejaría una experiencia mejorable.
- **La geolocalización de los usuarios de escritorio**: si el 80% de nuestros usuarios son móviles y el 20% de ordenador principalmente provienen de un país extranjero con mala conexión, explicaría el porqué estamos generando estos errores.
- **La publicidad que se incluye en la versión de escritorio**: en muchas ocasiones las versiones de escritorio ofrecen mucha publicidad y las móviles, para facilitar el uso, reducen el número. 
- **Si disponemos de una versión responsive** (misma web para cualquier dispositivo) puede ser que en la versión móvil se eliminen elementos pesados que hacen una versión rápida y cómoda pero que en escritorio, al mantenerlos, repercutan en su tiempo de carga.


Por tanto, nuestra primera acción debe ser analizar la versión de escritorio y la versión móvil por separado para conocer el desempeño que están teniendo. Podemos hacerlo a través de las aplicaciones [https://pagespeed.web.dev/](https://pagespeed.web.dev/) o [https://gtmetrix.com/](https://gtmetrix.com/).

El objetivo será entender si existe un problema de tiempo de carga en escritorio frente a mobile. Después recomiendo usar el [dashboard de CrUX](https://web.dev/chrome-ux-report-data-studio-dashboard/) para poder analizar la evolución de las Core Web Vitals en el tiempo y entender así si esta situación ha ocurrido de forma repentina (como parece mostrar Google Search Console) o si ha ido avanzando poco a poco. El hecho de ubicar un momento en el tiempo en el que todo cambió nos ayudará a identificar las posibles causas. Si ha sido algo progresivo, entonces sabemos que nuestra página no ha envejecido bien y que tendremos que aplicar cambios y mejoras para mejorar la experiencia que ofrecemos a los usuarios.

## Diferencias en la medición de Core Web Vitals: GSC vs. Marfeel

Considero que Marfeel ofrece un nivel de análisis mucho más preciso y útil que Google Search Console (GSC) o Google Analytics 4 (GA4). Sus reportes aportan un valor significativo y, sinceramente, ojalá Google tomara nota. Pero me temo que esta situación seguirá igual durante mucho tiempo.

Ya que hemos entrado en este interesante debate, quiero compartir una reflexión sobre la diferencia de datos entre ambas plataformas.

### Diferencia en los datos de Core Web Vitals

Las Core Web Vitals (CWV) que vemos en GSC se obtienen de usuarios reales que navegan con Chrome y están logueados en su cuenta de Google. Es decir, los datos provienen de experiencias reales de navegación.

Por otro lado, Marfeel no utiliza estos datos directamente, sino que emplea la API de Google para emular su propio análisis en tiempo real. Aunque ambas plataformas se basan en la misma fuente de medición, en realidad no trabajan con el mismo conjunto de datos, lo que puede generar diferencias en los valores reportados.

En nuestro caso, contamos con desarrollos personalizados que funcionan de manera similar a Marfeel, permitiéndonos emular y analizar estos datos. Gracias a esto, hemos constatado que las desviaciones con respecto a GSC no son raras, sino que ocurren con cierta frecuencia.

Aquí podéis ver un ejemplo de uno de los dashboards que manejamos:

![image](https://github.com/user-attachments/assets/8d07de2f-2662-423c-9ade-50ea9f55ff8d){:class="img-responsive"}

### Limitaciones de Google Search Console

Otro punto a tener en cuenta es que GSC solo nos muestra una muestra del total de datos recopilados. En algunas ocasiones, esta muestra es representativa de la realidad del sitio, pero en otras no lo es en absoluto. 

Se supone que Google aplica cierta inteligencia para seleccionar las páginas afectadas por las CWV que nos mostrará en los informes de Google Search Console, pero cuando llevas tiempo analizando estos datos, te das cuenta de que muchas veces parece más un proceso aleatorio que un criterio basado en conocimiento real.

Por eso es tan importante contar con un segundo sistema de medición, como Marfeel, o con una solución personalizada como la que ofrecemos en nuestro dashboard.

### El problema de la ventana de 28 días

Google utiliza una ventana de 28 días para agrupar todo lo ocurrido en ese período. Esto puede generar discrepancias importantes, ya que los cambios en el rendimiento web pueden tardar semanas en reflejarse en GSC.

Marfeel, en cambio, delimita con mayor precisión cuándo se han producido las desviaciones y las refleja de forma más clara en sus gráficas. Esto permite detectar problemas y medir mejoras con mayor rapidez y precisión.

Por ejemplo, si durante 4 días hemos tenido problemas con nuestro CDN y varias métricas de las CWV se han visto afectadas, GSC nos ofrecerá una gráfica como la siguiente.
Nuestro punto de análisis nos dirá que hay problemas y que se ha empeorado, por lo que urge buscar una solución.

![image](https://github.com/user-attachments/assets/d7e6cf1c-04af-47fd-bd85-bb849d914daa){:class="img-responsive"}

Sin embargo, en una medición _adhoc_ como la de Marfeel, sabríamos que ha sido un problema puntual que ha afecta a dos o tres días y que ya está resuelto.
Por lo tanto, no es necesario invertir recursos en solucionar un problema que ya no existe.

![image](https://github.com/user-attachments/assets/408383db-65b9-4a42-a0ba-fbc61ee5d6db){:class="img-responsive"}

Si solo nos basamos en GSC para evaluar las CWV, podemos estar tomando decisiones con información incompleta o desactualizada. 
Complementar con herramientas como Marfeel o soluciones personalizadas es clave para obtener una visión más realista del rendimiento web.


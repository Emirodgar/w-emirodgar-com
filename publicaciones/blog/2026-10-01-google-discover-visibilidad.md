---
title: Cómo conseguir visibilidad en Google Discover
description: Discover no se parece a una búsqueda, y tampoco se optimiza igual. Te cuento qué exige Google para mostrar tus contenidos, cómo preparar imágenes y titulares y cómo medir lo que pasa.
image: https://emirodgar.com/cdn/images/og/estrategia-seo.png
layout: emirodgar_post
author: Emirodgar
lang: es_ES
sitemap: 1
feed: 1
date: 01-10-2026
folder: seo
permalink: google-discover-visibilidad

---

Discover es ese feed de contenidos que aparece en la app de Google del móvil y en la página de inicio de Chrome, sin que nadie haya escrito nada. Para muchos medios y blogs es una fuente de visitas enorme, y a la vez la más caprichosa: un día entra un pico de tráfico y a la semana siguiente desaparece sin explicación aparente.

Para escribir este post he leído varias guías sobre el tema y las he contrastado con la documentación de Google. Pero no me he quedado ahí: también me baso en mi experiencia trabajando con medios digitales, donde Discover puede ser una de las fuentes de tráfico más grandes. Esto es lo que me parece aplicable, y también lo que conviene tomar con cuidado.

## Qué tiene de distinto Discover

En una búsqueda, el usuario expresa una intención y tú compites por responderla. En Discover no hay consulta: Google decide qué mostrar según los intereses que deduce de cada persona. Por eso:

- No hay una palabra clave que "posicionar". Lo que cuenta es que el tema le interese a alguien y que tu contenido sea una buena opción para él.
- La visibilidad es irregular. Google lo dice así: ser elegible no garantiza aparecer.
- El título y la imagen pesan más que en los resultados de búsqueda, porque son lo único que ve el usuario mientras hace scroll.

Una consecuencia práctica: no puedes planificarlo como planificas un artículo para una keyword. Lo que sí puedes es aumentar las probabilidades.

Para que se entienda lo que implica, esto es lo que puede pasar en Search Console. Durante meses, el tráfico del sitio es plano y, de repente, un contenido entra en el feed y los clics se disparan:

![Pico de clics en Discover en Search Console tras meses de tráfico estable](https://emirodgar.com/cdn/images/posts/search-console-pico-discover.png){:class="img-responsive"}

Un salto así no se consigue con ninguna técnica concreta, y tampoco suele durar. Puede bajar igual de rápido que subió, por eso conviene aprovecharlo y no construir una estrategia que dependa solo de ello.

## Lo mínimo para ser elegible

Según Google, un contenido puede aparecer en Discover automáticamente si está indexado y cumple sus políticas de contenido. No hay etiquetas ni marcado específicos que activar. Eso deja una lista corta de comprobaciones:

- **Que la página esté indexada** y se pueda rastrear sin bloqueos.
- **Que cumpla las políticas de Discover**: nada de contenido engañoso, de titulares que ocultan lo importante ni de material que busque generar clics con información exagerada.
- **Una buena experiencia de página**, sobre todo en móvil, que es donde se consume casi todo el feed.
- **HTTPS**, que a estas alturas debería ser lo normal.

## Imágenes: el factor que más se descuida

En un feed visual, la imagen decide buena parte del clic. Google pide dos cosas:

1. **Imágenes grandes**, de al menos 1.200 píxeles de ancho.
2. **Permitir las vistas previas grandes** con la directiva `max-image-preview:large` en la etiqueta robots (o con AMP). Sin ella, tu contenido puede aparecer con una miniatura pequeña, y Google indica que las imágenes grandes tienen más probabilidades de generar visitas.

```html
<meta name="robots" content="max-image-preview:large">
<meta property="og:image" content="https://tudominio.com/imagenes/portada-1200x675.jpg">
```

Aparte de lo que pide Google, recomiendo:

- Usar la proporción 16:9 para evitar recortes extraños.
- Preferir fotos o gráficos propios a imágenes de banco genéricas. Sale mejor en el feed y refuerza que el contenido es original.
- No meter texto pequeño dentro de la imagen, porque en el móvil no se lee.
- Declarar la imagen principal con `og:image` y con datos estructurados, que ayudan a que Google elija la correcta. Sobre qué hace Google con el schema, tienes [datos estructurados y la IA](https://emirodgar.com/datos-estructurados-seo-llm).

## Titulares: claros, concretos y sin trampa

Las guías que he consultado coinciden bastante en esto. Cuando alguien ve tu tarjeta no está buscando nada, así que el titular tiene que despertar interés sin engañar.

Lo que funciona:

- **Que se entienda de un vistazo.** Si hace falta releerlo, ya has perdido el clic.
- **Ser específico.** Un número, un resultado o un tema concreto aportan más que un adjetivo.
- **Poner lo importante al principio.** En móvil el título se trunca, y una longitud de unos 50-70 caracteres suele evitar cortes. Es una referencia, no una regla de Google.
- **Plantear un problema y prometer una solución**, como en "¿Sin tráfico de Discover? Cinco cosas que puedes revisar".

Lo que conviene evitar:

- Los titulares que prometen más de lo que da el artículo. Google lo penaliza expresamente, y además se nota en las métricas: muchos clics seguidos de abandono inmediato son una mala señal.
- Rellenar con palabras clave. Un título pensado para el buscador suena forzado en un feed.
- El lenguaje técnico o enrevesado.

Si publicas con frecuencia, prueba dos o tres variantes de titular a lo largo del tiempo y compara el CTR en Search Console. Sin ese contraste, te quedas con intuiciones.

## Autoría, confianza y especialización

Google insiste en que el contenido tenga señales claras de transparencia: quién lo firma, cuándo se publicó y quién es el editor. En Discover esto se traduce en cosas concretas:

- **Autor visible**, con una página de perfil que acredite su experiencia en el tema.
- **Fechas visibles y honestas.** Si actualizas un contenido, hazlo cuando cambie algo de verdad, como expliqué en [cuándo actualizar la fecha de modificación](https://emirodgar.com/actualizar-fecha-modificacion-contenido).
- **Información de la empresa o medio** fácil de encontrar.
- **Aportar algo propio**: datos, análisis, experiencia directa. Repetir lo que ya publican todos los demás es lo que menos tiende a destacar.

Si te interesa cómo valora Google la fiabilidad de una web, tienes el [análisis de las webs que considera más fiables](https://emirodgar.com/analisis-paginas-fiables-google).

## Tema, nicho y actualidad

Aquí las fuentes se contradicen un poco, así que prefiero ser prudente.

Parece razonable que ayude tener una temática coherente, de modo que Google entienda de qué eres referente. Pero la propia documentación aclara que la experiencia se evalúa tema a tema, y que no hay que ser un sitio ultra especializado para aparecer. Mi lectura es que conviene cubrir con constancia los temas en los que tienes algo que decir, sin obsesionarse con un nicho cerrado.

Lo de la actualidad es más claro. Discover premia mucho lo que está de moda ahora, así que si tu sector tiene temas de tendencia, publicar pronto sobre ellos aumenta las opciones. Los contenidos más atemporales también pueden entrar, pero lo habitual es que sea el contenido de actualidad el que más se beneficie. Si trabajas en un medio, mira también cómo [AI Overviews está cambiando el tráfico de editores y marcas](https://emirodgar.com/ai-overviews-google-publishers).

## Lo que he visto en medios digitales

He trabajado SEO en varios periódicos y medios digitales, y hay dos casos de los que recojo en mis [casos de éxito SEO](https://emirodgar.com/casos-exito-seo) que ilustran bien cómo se comporta Discover.

**Un periódico nuevo basado en Angular.** En [el lanzamiento de un periódico digital con Angular](https://emirodgar.com/casos-exito-seo#periodico-angular), Google marcaba un 0 % de URLs con buena experiencia en escritorio y móvil, y eso nos costaba tráfico y acceso a plataformas como Discover. Al conseguir que Google valorase bien la experiencia en móvil, y con una versión AMP de las noticias en ese momento, empezamos a recibir tráfico de Google News y Discover. A medio plazo se convirtieron en la principal fuente de captación orgánica, con días de más de 300.000 clics orgánicos.

**Un medio del motor tras la HCU.** En [el caso de un medio digital afectado por la actualización de contenido útil](https://emirodgar.com/casos-exito-seo#recuperacion-periodico-hcu), el tráfico en Discover se mantuvo un tiempo y desapareció del todo en mayo. Tras meses trabajando rastreo, indexación, contenidos y experiencia de usuario, volvió con la actualización core de agosto y con una frecuencia normalizada, a la vez que se recuperaba la búsqueda.

En [otro medio digital con problemas de SEO técnico](https://emirodgar.com/casos-exito-seo#recuperacion-medio-digital), después de 11 meses de trabajo en la versión móvil, las redirecciones y el EEAT, el tráfico de búsqueda, Discover y News se disparó hasta 5 veces más con la actualización core de septiembre de 2024.

Lo que me llevo de estos casos:

- **Discover y la calidad técnica van de la mano.** La experiencia de usuario y la accesibilidad condicionan que Google te muestre en el feed.
- **Cuando Google cambia de opinión sobre tu sitio, cambia en todos los canales.** Búsqueda, Discover y News suelen subir o bajar juntos.
- **Las recuperaciones llevan meses.** En los casos anteriores, el efecto llegó con una actualización core, no de un día para otro.

Son casos concretos de medios con características muy distintas, así que no los tomes como una receta que se cumpla siempre.

## Cómo medirlo

Discover tiene su propio informe en Google Search Console, con impresiones, clics, CTR y las páginas que más rendimiento tienen. Ten en cuenta tres cosas:

- El informe **solo aparece cuando tu sitio supera un mínimo de impresiones**. Si no lo ves, aún no hay suficiente volumen.
- En Google Analytics este tráfico suele caer en "Directo" o "No asignado", porque llega desde una app. Para aislarlo, Search Console es la referencia. Si ves que los datos no cuadran entre ambas herramientas, es normal, y expliqué [por qué GA4 y Search Console nunca coinciden](https://emirodgar.com/datos-gsc-ga4).
- Los picos se explican mal. Mira qué contenidos entraron, con qué titular e imagen, y busca patrones en lugar de buscar una causa única.

Una de las guías fija el CTR habitual entre un 4 y un 6 % y el alto rendimiento entre un 8 y un 12 %. No he podido contrastar esas cifras con datos de Google, así que úsalas, como mucho, de orientación. Compara mejor tu CTR con el de tus propias páginas.

## Discover no sustituye a la base SEO

Un error habitual es tratar Discover como un canal aparte. Los picos de Discover suelen venir acompañados de más visibilidad en el resto de Google, y a la inversa: un sitio con buena base SEO tiene más facilidad para que Google lo entienda, lo rastree y lo considere fiable.

Lo he visto en el rendimiento de Search Console de un proyecto: cuando sube Discover, los resultados de búsqueda suben también, y la gráfica de ambos tiene prácticamente la misma forma. Si quieres ver qué secciones de tu sitio dependen más de Google y cuáles están más expuestas a la IA, tienes [un método para calcularlo con el informe de IA generativa](https://emirodgar.com/informe-ia-generativa-search-console).

![Rendimiento en Search Console con subida simultánea de Discover y resultados de búsqueda](https://emirodgar.com/cdn/images/posts/search-console-rendimiento-discover-busqueda.png){:class="img-responsive"}

No es un caso aislado. En otro sitio ocurre lo mismo: las dos líneas crecen de forma simultánea, aunque en este caso Discover aporta la mayor parte de los clics (en torno al 86 %) y la búsqueda el resto.

![Resultados de búsqueda y Discover creciendo a la vez en Search Console](https://emirodgar.com/cdn/images/posts/search-console-discover-busqueda-crecen-a-la-vez.png){:class="img-responsive"}

No digo que una cosa cause la otra, y un pico concreto puede ser puntual. Lo que saco en claro es que no tiene sentido elegir. Además de subir en Discover, tenemos que trabajar para que nuestra base SEO también mejore y poder crecer en todos los ámbitos: indexación limpia, contenido útil, enlazado interno, rendimiento técnico y autoridad. Si quieres ordenarlo, empieza por [los tres pilares del SEO](https://emirodgar.com/pilares-seo) y, si necesitas un diagnóstico, por una [auditoría SEO](https://emirodgar.com/auditoria-seo). Eso es lo que sostiene el tráfico cuando Discover baja, que baja.

## Qué no creerse

Un apunte sobre afirmaciones que circulan mucho:

- **"Si cumples todo, saldrás en Discover".** No. La elegibilidad es una condición, no una garantía.
- **"Hay una etiqueta o un truco para forzarlo".** Google dice expresamente que no hay marcado específico.
- **"Si te penalizan en Search, no sales en Discover".** Los sistemas son distintos y no he visto una confirmación oficial de que uno dependa del otro.
- **Porcentajes muy precisos de mejora por una etiqueta o un formato.** Sin metodología detrás, los trataría como anécdotas.

## Una lista corta para empezar

1. Comprueba en Search Console que tus contenidos importantes están indexados.
2. Añade `max-image-preview:large` y revisa que tus portadas midan al menos 1.200 px de ancho.
3. Usa imágenes propias, en 16:9 y legibles en móvil.
4. Reescribe los titulares para que sean claros, específicos y fieles al contenido.
5. Muestra autor, fecha y editor de forma visible.
6. Revisa el informe de Discover cada mes y anota qué contenidos entran.
7. Publica pronto sobre lo que esté en tendencia dentro de tu temática.

## Conclusiones

- Discover no responde a una consulta: Google decide qué mostrar según los intereses de cada usuario.
- Ser elegible es sencillo (indexación y políticas), pero no asegura aparecer.
- Imágenes grandes y `max-image-preview:large` son lo más fácil de arreglar y lo que más se olvida.
- Un titular claro, específico y honesto aguanta mejor que uno llamativo y engañoso.
- Mide con el informe de Search Console y compara contra tus propios datos, no contra cifras genéricas.

Discover es un canal que no controlas, y por eso no conviene depender de él. Pero preparar bien el contenido para que pueda entrar es barato, y casi todo lo que hay que hacer sirve también para el resto de tu SEO.

*Este artículo forma parte de la guía [AI Overviews en Google qué significa para editores y marcas en 2026](https://emirodgar.com/ai-overviews-google-publishers).*

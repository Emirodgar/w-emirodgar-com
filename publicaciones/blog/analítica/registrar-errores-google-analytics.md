---
title: Registrar los errores de nuestra página web con Google Analytics y Google Tag Manager
description: Una forma sencilla y rápida de recoger información acerca de los errores que ocurren en nuestra página web
lang: es_ES
author: Emirodgar
layout: emirodgar_post
sitemap: 1
feed: 1
folder: analitica
date: 08/02/2022
image: https://emirodgar.com/cdn/images/og/analitica.png
permalink: registrar-errores-web-con-google-analytics-tag-manager

---

Desde hace tiempo se ha puesto de moda el **análisis big data de los logs de los servidores** para conocer al detalle lo que está ocurriendo con nuestra página. Podemos conocer cuándo y por donde navegan los robots de los buscadores, páginas con error, cargas, tiempos, etc.

Por desgracia no todo el mundo tiene los recursos necesarios ni el acceso a estos logs por lo que os voy a enseñar **cómo podemos registrar los errores con Analytics y Tag Manager**. El objetivo es conocer dónde está fallando nuestra web y poder solucionarlo.

Vamos a utilizar las herramientas de Google Analytics y Google Tag Manager para registrar el estado de petición de cada página (correcto o con error).

> [Listado completo y explicación de los códigos de estado HTTP disponibles](https://es.wikipedia.org/wiki/Anexo:C%C3%B3digos_de_estado_HTTP)

A continuación detallo los códigos de estado HTTP con los que trabajaré en este ejemplo:

- **200** ok: indica que la página se ha servidor correctamente (ningún error)
- **404** error: indica que la página no existe (no ha podido ser encontrada dentro del servidor)
- **500** error: indica que ha ocurrido un error a nivel interno de la página (problema en la programación de la misma)
- XXX: podemos replicar este método para cualquier otro estado

Para poder disfrutar de esta información en Analytics, vamos a utilizar una [dimensión personalizada](https://support.google.com/analytics/answer/2709829?hl=es).

Lo primero que haremos será crear dicha dimensión desde el panel de administración de Google Analytics. En mi caso he utilizado el nombre "Estado HTTP". El ámbito -la explicación de esta opción daría lugar a otro post- lo dejamos en Hit. Si queréis saber más, os remito a la [guía oficial](https://support.google.com/analytics/answer/2709828?hl=es).

<blockquote class="twitter-tweet"><p lang="es" dir="ltr">Entendido esto, vamos a crear una dimensión personalizada en Analytics &quot;Estado HTTP&quot; donde recopilaremos el código de estado de cada página. <a href="https://t.co/GFR8HqCGdi">pic.twitter.com/GFR8HqCGdi</a></p>&mdash; Emirodgar (@Emirodgar) <a href="https://twitter.com/Emirodgar/status/1009388806393466880?ref_src=twsrc%5Etfw">June 20, 2018</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

Si no hiciéramos uso de Google Tag Manager, ya podríamos enviar la información directamente a Analytics utilizando la función set (y como parámetros, el id de dimensión y su valor). Ojo, **el orden de los comandos importa** y, además, tenemos que actualizar el número de dimensión; en este caso es dimension1 porque ha sido la primera en crearse pero si fuera la tercera tendríamos que utilizar dimension3.

```js
ga('create', 'UA-XXXX-Y', 'auto');
ga('set', 'dimension1', '200');
ga('send', 'pageview');
```

Para que esto funcione debemos tener un **template personalizado para cada estado de la página**. En el template principal -del que se nutre todo el sitio- envíaríamos el valor 200. En el template de error página no encontrada, enviaríamos el valor 404 y así con el resto de estados que queramos medir.

En el caso de que utilicemos Tag Manager, debemos **enviar a la capa de datos la información del estado de la página**. Para ello utilizamos el [comando push](https://developers.google.com/tag-manager/devguide#adding-data-layer-variables-to-a-page). El siguiente código es el que se insertaría en el template de la página de error 404. 

```js
<script>
 window.dataLayer = window.dataLayer || [];
 window.dataLayer.push({
 'httpStatus' : '404'
 });
</script>
```
Para poder recibir dicho valor en Tag Manager debemos crear una variable del tipo **capa de datos** cuyo nombre sea el mismo que estamos utilizando en el código anterior, httpStatus. En este caso, podemos definir un valor por defecto para la variable (que sería 200) y por lo tanto únicamente tendríamos que enviar un valor actualizado cuando ocurra un error (404, 500, etc).

<blockquote class="twitter-tweet"><p lang="es" dir="ltr">Para recoger dicha información, creamos una variable en GTM con el mismo nombre que la utilizada en la capa de datos (imagen anterior). <a href="https://t.co/JGGIjiE9Xb">pic.twitter.com/JGGIjiE9Xb</a></p>&mdash; Emirodgar (@Emirodgar) <a href="https://twitter.com/Emirodgar/status/1009389941204439041?ref_src=twsrc%5Etfw">June 20, 2018</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

Vamos a hacer un resumen de las dimensiones y variables que tenemos creadas hasta este momento:

- **Estado HTTP**: nombre de la dimensión personalizada creada en Analytics y cuyo ID es 1.
- **httpStatus**: variable de la capa de datos. Rellenamos su valor desde los templates de error.
- **GA - httpStatus**: variable de GTM que recoge el valor de la variable de la capa de datos (httpStatus).

Por último, nos quedará enviar la información que acabamos de recibir a Google Analytics. Para ello debemos modificar la etiqueta de Analytics de la siguiente forma:

- Activamos la 'anulación de configuración en esta etiqueta'
- Accedemos a 'Más opciones'
- Accedemos a 'Dimensiones personalizadas'
- Introducimos la información de índice (el mismo que tengamos en Analytics que en el ejemplo es el 1)
- Introducimos el valor de la dimensión (que será el nombre de la variable que acabamos de crear en GTM que en este ejemplo es GA - httpStatus (ojo, debemos utilizar los corchetes como se muestra en la siguiente imagen).

<blockquote class="twitter-tweet"><p lang="es" dir="ltr">El siguiente paso será modificar la etiqueta de Analytics para añadir a la dimensión personalizada el valor recogido desde la capa de datos (al final de la imagen). <a href="https://t.co/g1i4gBFnwe">pic.twitter.com/g1i4gBFnwe</a></p>&mdash; Emirodgar (@Emirodgar) <a href="https://twitter.com/Emirodgar/status/1009390415701774336?ref_src=twsrc%5Etfw">June 20, 2018</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

Con esto ya solo nos queda hacer las [comprobaciones oportunas](https://twitter.com/Emirodgar/status/1009391279187398656) utilizando la función de [vista previa/preview de GTM](https://support.google.com/tagmanager/answer/6107056?hl=es) para asegurarnos de que la variable GA - httpStatus se rellena con el estado correcto en cada petición.

A partir de ahora podremos utilizar esta nueva dimensión en cualquiera de nuestros informes dentro de Analytics.

<blockquote class="twitter-tweet"><p lang="es" dir="ltr">Y así de rápido podremos disponer en nuestros informes de la dimensión &#39;Estado HTTP&#39; para poder analizar y ubicar rápidamente dónde estamos generando errores. <a href="https://t.co/a3b4eHVwts">pic.twitter.com/a3b4eHVwts</a></p>&mdash; Emirodgar (@Emirodgar) <a href="https://twitter.com/Emirodgar/status/1009392061945139200?ref_src=twsrc%5Etfw">June 20, 2018</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

<!--stackedit_data:
eyJoaXN0b3J5IjpbLTE3NTY0NzkyMjksLTU1ODU1MDEzMSw0Mj
gzODQzMjUsMTM5ODc5MzY4NSwxMjI4OTIxMTk3LC0xNDgzMDgw
MzkxLDgwNjMwMzg1OSwxMDA2OTU2NjAxLC0xOTA3NTcwNDIwLC
0xMjgxMjE2Mjg4XX0=
-->
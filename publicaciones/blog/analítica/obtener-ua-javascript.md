---
title: Cómo obtener el código UA de Google Analytics a través de JavaScript
description: 
image: https://emirodgar.com/cdn/images/og/analitica.png
layout: emirodgar_post
author: Emirodgar
lang: es_ES
sitemap: 1
feed: 1
date: 08/02/2022
folder: analitica
permalink: obtener-ua-analytics-javascript

--- 

Como hemos visto en otras publicaciones, la [consola de Google Chrome es muy útil](https://emirodgar.com/consola-devtools-chrome) para poder acceder a cierta información así como validar -en directo- implementaciones.

En este caso vamos a ver cómo podemos obtener el UA (identificador) de una cuenta de Google Analytics utilizando JavaScript a través de la consola de DevTools, a la cuál accederemos desde nuestro navegador pulsando la tecla `F12`. Una vez abierto el panel debemos ir a la pestaña de `Consola` y situar el cursor justo al final, donde podemos escribir.

> Este proceso dependerá de la [versión de Google Analytics](https://emirodgar.com/versiones-google-analytics) que estemos usando.

En el caso de que el objeto que se esté utilizando sea `ga`, entonces podremos obtener el identificador de la cuenta a través del siguiente comando:

    ga.getAll()[0].get('clientId');

Bastará con escribirlo (o copiarlo y pegarlo) en la consola y pulsar la tecla `Enter`. Automáticamente en la siguiente línea nos aparecerá el UA.

Si nos aparece el error "*Uncaught ReferenceError: ga is not defined*" implica que el objeto `ga` no ha podido ser accedido y seguramente sea porque no existe. O bien esa página no está usando Google Analytics o utiliza otra versión (por ejemplo con el objeto `gtag`).

En el caso de que quisiéramos establecer una función JavaScript para ser usada fuera de la consola, la aproximación correcta sería la siguiente, que es la que ofrecen desde la [documentación oficial](https://developers.google.com/analytics/devguides/collection/analyticsjs/ga-object-methods-reference) de Google:

    ga(function(tracker) {
      var clientId = tracker.get('clientId'); 
      myInternalMeasurementProtocolSetter(clientId);  
    });

<!--stackedit_data:
eyJoaXN0b3J5IjpbMTE0NDE4OTc2Myw4NDU5MDQxNDEsMTU2NT
I4NTc5NCwtMTE3MTA5MjAyMl19
-->
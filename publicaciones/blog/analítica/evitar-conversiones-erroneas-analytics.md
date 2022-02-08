---
title: Cómo evitar conversiones erróneas en Google Analytics
description: 
image: https://emirodgar.com/cdn/images/og/analitica.png
layout: emirodgar_post
author: Emirodgar
lang: es_ES
sitemap: 1
feed: 1
date: 08/02/2022
folder: analitica
permalink: evitar-conversiones-erroneas-analytics

--- 

Establecer objetivos y poder medir conversiones en Google Analytics es relativamente sencillo pero ¿podemos asegurar que los datos de conversiones que obtenemos son correctos?.

Vamos a detallar algunos pasos que nos ayudarán a asegurar que los datos tienen rigor.

## Asegúrate que la conversión sólo ocurre en la página correcta

 Una conversión ocurrirá ante un evento concreto o una página de gracias (*Thank You Page*). En este segundo caso, para poder asegurarnos de que la expresión que genera la conversión sólo tiene en cuenta una sola página de gracias, lo podemos hacer a través del menú de `Conversiones` entrando en `Objetivos` y seleccionando `Ruta de objetivo invertida`.

Aquí veremos una tabla con las URLs que han generado una conversión y las tres páginas anteriores del camino seguido por el usuario que ha convertiro.

Debemos asegurarnos que `Ubicación de Consecución de Objetivos` (la primera columna de la tabla) contiene únicamente la URL que hemos marcado para página de gracias. De no ser así deberíamos ajustar la expresión del objetivo.

## Elimina cualquier enlace interno a la página de gracias

Una página de gracias sólo debería poder ser accedida tras una acción por parte del usuario que está convirtiendo (rellenar un formulario, descargar un documento, etc).

Podemos hacer uso de ScreamingFrog para emular un rastreo de nuestro sitio y ver si nuestras páginas de gracias aparecen. De hacerlo, a través de la pestaña Inlinks podremos identificar los enlaces internos que apuntan a las mismas y proceder así a su eliminación.

## ¿Las páginas de gracias son puerta de entrada al sitio?

Como hemos explicado antes, una página de gracias sólo debe ser accedida tras una acción de un usuario. Si detectamos tráfico directo a la misma implicará que se están registrando conversiones que no son reales.

Para dilucidar si esto está ocurriendo podemos usar el menú de `Comportamiento` de Google Analytics, `Contenido del sitio` y `Páginas de destino`. Si nuestras páginas de gracias aparecen ahí, estamos generando conversiones erróneas. En este caso tendríamos que bloquear el acceso directo a la URL de gracias y sólo permitirlo a través del proceso de conversión.

## ¿Se han indexado nuestras páginas de gracias?

Un problema bastante común es que las URLs de conversión pueden terminar siendo rastreadas e indexadas por los robots de búsqueda. En este caso podríamos utilizar Google Search Console para conocer si nuestra página está en el índice de resultados de Google.

En el caso de que así fuera, tendríamos que [solicitar la eliminación de la misma](https://emirodgar.com/eliminar-url-google) y asegurarnos, como hemos visto en uno de los puntos anteriores, que no existen enlaces internos que los robots puedan seguir para llegar hasta la TYP (*Thank You Page*).





<!--stackedit_data:
eyJoaXN0b3J5IjpbLTEyMTEzOTIyMjEsOTYzODE0MTA1XX0=
-->
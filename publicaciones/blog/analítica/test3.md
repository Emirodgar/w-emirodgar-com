---
title: Nuevos atributos para los enlaces de Google
description: 10 pasos sencillos para abordar de forma efectiva una estrategia de analítica web.
layout: erg_post
author: Emirodgar
sitemap: 0
feed: 0
folder: analitica
category: Analítica
image: https://emirodgar.com/cdn/images/og/analitica.png
permalink: test4
date_modified: 12/08/2020

---

Dado que se trata de un seguimiento por usuario es requisito indispensable que podamos **identificar de forma única cada visitante de nuestra web**. Para ello, lo normal suele ser generar un ID de usuario cuando se han identificado en nuestro sistema; es decir, necesitamos disponer de un sistema de registro de usuarios.
Esto es otra prueba. Y otra más. Igual. Más. sdf fdgfdgfdg dfgdfgdfg dfgdfgdfgdf dsfds f DSFDSF SD

Para solucionar esta configuración por defecto y poder unificar todas las sesiones de un mismo usuario bajo un mismo identificador, Analytics nos ofrece la opción de utilizar el [ID de usuario](https://support.google.com/tagmanager/answer/4565987) (User ID).  Así define Google el objetivo de esta funcionalidad de Analytics:


Un ejemplo de cómo tendríamos que utilizar estos atributos sería el siguiente:

 ```html     
 <a href="https://emirodgar.com" rel="ugc">Emirodgar</a>
 <a href="https://emirodgar.com" rel="sponsored">Emirodgar</a>
 <a href="https://emirodgar.com" rel="nofollow">Emirodgar</a>
 ```  



## Paso 2 - Enviar el ID a la capa de datos

Cuando tengamos un identificador único para cada usuario que ha accedido a nuestro sistema, debemos enviarlo a la capa de datos de la siguiente forma:

```js
<script type="text/JavaScript"> 
  window.dataLayer = window.dataLayer || [];
  dataLayer.push {( 'erg_userID': 'XXXXXX' )} 
</script>

```

Es importante que enviemos la información del identificador del usuario antes del código base de Google Tag Manager.

## Paso 3 - Recuperar el ID en Tag Manager

Ahora debemos recuperar el ID de usuario en GTM para lo cual necesitaremos crear una variable con las siguientes características:

 - **Nombre**: el mismo que hemos utilizado en el envío a la capa de datos. En el ejemplo anterior sería: erg_userID.
 - **Tipo**: variable de capa de datos.

## Paso 4 - Enviar el ID de usuario a Analytics

En la etiqueta de Universal Analytics debemos abrir el panel de "Más opciones > Campos para configurar".

Aquí debemos añadir un nuevo "nombre del campo" que sea userId y cuyo valor referencia a la variable que hemos creado "erg_userID".
<!--stackedit_data:
eyJoaXN0b3J5IjpbLTYyMTkxODI3NSwzNTE3MjI0OTIsMTgxMD
Y1MTUxOCwtNjkyOTg1NDAwLDExMzM4NjQzOTAsLTEwNDA0NDk1
Nyw5MzY5MDUxNDksMTQxMjg2NDE3NywxMzA5MjgxNDEyLC0xOD
AzNzAzNTgzLC04NjQ1ODYxMTIsMTAxODMyMjE5Nyw5OTU4ODM4
MDYsMTY5Mzg2MjI2OSwyODA1ODIwNzcsLTEzMTE3OTU3NjAsNz
E5MTQ0NDY0LC0xMzExNzk1NzYwLC0xMTM0NzI0MjU3LC0xMzA4
ODg5NzYzXX0=
-->
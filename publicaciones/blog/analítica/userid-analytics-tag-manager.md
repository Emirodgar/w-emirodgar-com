---
title: Configurar el User ID de Analytics a través de Google Tag Manager
description: Obtén información de tus usuarios de forma más eficiente con la función User ID de Analytics
lang: es_ES
author: Emirodgar
tags: seo, google, gtm, analytics
date: 10/10/2019
image: https://emirodgar.com/cdn/images/og/estrategia-seo.png
permalink: userid-analytics-tag-manager

---

# Configurar el User ID de Google Analytics a través de Google Tag Manager

Google Analytics utiliza el [ID de cliente](https://developers.google.com/analytics/devguides/collection/analyticsjs/cookies-user-id?hl=es#getting_the_client_id_from_the_cookie) (Client ID) para identificar a los usuarios que acceden a nuestra página web.

> Este valor se almacena a nivel de cookie por lo que si un usuario utiliza varios dispositivos para acceder a nuestro sitio web (móvil, tablet y ordenador) tendremos tres cookies diferentes aún siendo la misma persona.

Para solucionar esta configuración por defecto y poder unificar todas las sesiones de un mismo usuario bajo un mismo identificador, Analytics nos ofrece la opción de utilizar el [ID de usuario](https://support.google.com/tagmanager/answer/4565987) (User ID).  Así define Google el objetivo de esta funcionalidad de Analytics:

> Asociar varias sesiones de usuario y actividades a un ID único, lo que permite obtener un recuento de usuarios más preciso, analizar la experiencia de los usuarios que han iniciado sesión y comprender el comportamiento de estos en todos los dispositivos.

## Configurar el User ID en Analytics a través de Tag Manager

Dado que se trata de un seguimiento por usuario es requisito indispensable que podamos identificar 



<!--stackedit_data:
eyJoaXN0b3J5IjpbLTE5MjA5NTQxMDRdfQ==
-->
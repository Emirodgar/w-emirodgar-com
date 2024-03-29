---
title: Errores comunes en Google Analytics 
description: 
image: https://emirodgar.com/cdn/images/og/analitica.png
layout: emirodgar_post
author: Emirodgar
lang: es_ES
sitemap: 1
feed: 1
date: 08/02/2022
folder: analitica
permalink: errores-comunes-analytics

--- 

Cualquier estrategia de medición web está expuesta a sufrir errores o fallos que comprometan parte de la información que recoge, procesa y visualiza.

A continuación vamos a comentar algunos errores comunes que suelen aparecer en implementaciones de Google Analytics para asegurarnos de que, en nuestro caso, nuestra configuración es correcta.

- **¿El código está presente en todas las URLs del sitio?** podemos hacer uso de aplicaciones como ScreamingFrog para validar si nuestro código de Analytics está presente en todas las URLs. Si no fuera el caso, estaríamos dejando de registrar información básica.
- **¿Todas las páginas usan la misma [versión de Google Analytics](https://emirodgar.com/versiones-google-analytics)?** una mezcla de diferentes versiones podría generar fallos en la medición.
- **¿Utilizamos parámetros UTM en enlaces internos?** estos parámetros utilizados para identificar tráfico de una campaña específica deberían sólo ser implementados desde enlaces externos.
- **¿Has configurado correctamente la zona horaria en Analytics?** Analytics utiliza le media noche (12:00pm) para resetear sesiones y dividir las mediciones por día. Si no tenemos nuestro huso horario, no contabilizaremos las sesiones de forma correcta.
- **¿Tarda mucho en cargar la página?** un tiempo excesivo podría dificultar la ejecución del código de Analytics o incluso que los usuarios abandonen la página.
- **¿Generamos errores JavaScript?** si hacemos uso de otros códigos que generan errores, esto podría entrar en conflicto y afectar a la medición de Google Analytics.

A veces puede ocurrir que el servidor web funciona mal y genera errores 4XX o 5XX que afectan, lógicamente, a la medición. Para saber si esto está ocurriendo y con qué frecuencia lo hace podemos [registrar los errores HTTP a través de GTM y GA](https://emirodgar.com/registrar-errores-web-con-google-analytics-tag-manager).

También puedes echar un vistazo a los [10 trucos de Google Analytics](https://emirodgar.com/trucos-google-analytics) para obtener un mejor rendimiento de la información recogida en esta plataforma.
<!--stackedit_data:
eyJoaXN0b3J5IjpbMTEwODg2MTI1NiwtMzA4OTMxMzM2XX0=
-->
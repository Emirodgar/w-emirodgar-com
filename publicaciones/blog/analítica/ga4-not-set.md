---
title: Cómo solucionar el not-set en páginas de destino de GA4
description: 
image: https://emirodgar.com/cdn/images/og/analitica.png
layout: emirodgar_post
author: Emirodgar
lang: es_ES
sitemap: 1
feed: 1
date: 08/02/2022
folder: analitica
permalink: ga4-not-set

--- 

GA4 se está convirtiendo en algunos casos en un verdadero dolor de cabeza para los analistas. 
Es posible que si analizas el informe de páginas de destino (páginas de aterrizaje) encuentres que entre los primeros valores se encuentra `(not set)`. ¿Qué sentido tiene informar de que hay una página de mi sitio que está siendo punto de entrada si no puedo sacber cuál es?, ¿cómo se genera esa situación y de qué manera se puede solucionar?.

## La explicación de Google

Si acudimos a la [documentación oficial de Google](https://support.google.com/analytics/answer/13504892?hl=es) veremos que más allá de una breve explicación

> El valor "(not set)" puede aparecer en la dimensión Página de destino cuando una sesión no tiene un evento page_view.

Cuando aparece `not set` en Google analytics 4 no quiere decir que haya un problema con la implementación o qué existan páginas que no tienen el código insertado.
De hecho, lo más normal suele ser que la implementación es correcta. Entonces, ¿dónde está el problema?.

## Explicación y solución

Puede haber dos explicaciones a por qué aparece nulo el valor en el informe de páginas de destino:

### Rotura de sesión

Si los usuarios llegan a nuestro sitio y se levantan dejando la pestaña de navegación abierta durante más de 30 minutos (tiempo de sesión por defecto), la sesión caduca. Si al regresar reinician su navegación en la misma página, GA4 registra los nuevos eventos sin problema, pera al tratarse de una nueva sesión no la asocia con la anterior y al no haberse lanzado el evento `page_view` en esta nueva sesión, no es capaz de saber cuál es la página de aterrizaje. El resultado es que toda la actividad generada en esta segunda sesión se asocia a una página de destino nula. Este escenario no es muy normal, dado que no es frecuente que la gente deje la navegación abierta durante más de 30 minutos, pero podemos cambiar el tiempo de sesión a 50 minutos y monitorizar si el valor de not set baja.

Desde Administrar > Recogida y modificación de datos pulsamos sobre la opción de `Flujos de datos`. Una vez abierto, seleccionamos el que nos interesa y después sobre configurar ajustes de etiquetas.

![image](https://github.com/user-attachments/assets/fe200d58-4e8e-4e95-bd04-8d18409ea414){:class="img-responsive"}

Dentro de este nuevo menú, hacemos clic sobre `Mostrar más` y finalmente sobre `Ajustar tiempo de espera de las sesiones`. En el nuevo menú cambiamos `30` por un valor más alto, como por ejemplo `50`.

![image](https://github.com/user-attachments/assets/d5bec4a9-2f0d-4355-bc03-7522b2d9b99d){:class="img-responsive"}

### Orden de los eventos erróneo

En algunos casos, y esto es problema de cómo está implementado GA4, llega antes el parámetro el evento de `user_engagement` que el de `page_view`, lo que genera que el valor registrado para la sesión asociado a la página sea `not set`.
Aquí no podemos hacer nada, dado que así es como funciona la aplicación. La única manera sería una implementación en local de ga4 (`server-side`) donde quitaríamos el evento `user_engagement` para asegurarnos de que `page_view` siempre es el mismo.

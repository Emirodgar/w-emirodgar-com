title: Eliminar el tráfico SPAM y de Robots de nuestra web
description: Protege tu página web frente al SPAM y evita distorsiones en los datos de la analítica
image: https://emirodgar.com/cdn/images/og/auditoria.png
layout: emirodgar_post
author: Emirodgar
sitemap: 1
feed: 1
folder: seo
lang: es_ES
permalink: eliminar-trafico-spam-robots

En ocasiones los sistemas de analítica web reflejan picos de tráfico de referencia de dominios que nunca nos han enlazado y tráfico desde países que no tiene sentido. Se trata de  **tráfico SPAM**  y/o  **generado por robots**. Más allá de que pueden consumir una parte de los recursos de nuestro servidor, el verdadero problema reside en que  **nuestra analítica se distorsiona**  y terminamos analizando un tráfico que no aporta ningún valor.

A continuación detallo algunos pasos para prevenir y minimizar el impacto de este tráfico malo en nuestra estrategia digital.

## 1- Identificar el tráfico de baja calidad

El primer paso será asegurarnos de que realmente tenemos tráfico SPAM o de robots. Por norma general este tipo de tráfico se caracteriza por:

-   Poco tiempo en el sitio.
-   Alto porcentaje de rebote.
-   Porcentaje alto de visitantes nuevos.
-   Sin conversiones asociadas.

Ojo, por sí solo esto no es indicativo de que se trate de robots, lógicamente tenemos que ver si tenemos un segmento de nuestro tráfico que corresponde con estas características y, de ser así, analizarlo para determinar si se trata de tráfico malo.

## 2- Bloqueamos los accesos

### 2.1 - Bloquear a los robots de búsqueda conocidos

En el caso de Google Analytics Universal, disponemos de una  opción dentro de nuestro panel de administración `Vista` > `Configuración de la vista` > `Filtrado de robots`  para bloquear el tráfico generado por robots de búsqueda conocidos. Bastará con hacer clic sobre la opción de `Excluir todos los hits de robots y de arañas conocidos`.  Una vez activado, nuestra herramienta excluirá todo el tráfico que "entienda" que no está generado por personas.

![Emirodgar - excluir Analytics tráfico generado por robots](https://emirodgar.com/cdn/images/posts/analytics-filtrado-robots.jpg){:class="img-responsive"}

### 2.2 - Bloquear tráfico SPAM

El siguiente paso será bloquear todos aquellos dominios y fuentes de tráfico que son conocidos por hacer SPAM. Lo haremos a nivel de servidor (por ejemplo en Apache con el fichero .htaccess) bloqueando por IP y  _User Agent_. Existen  [multitud de listas negras](http://tab-studio.com/en/blocking-robots-on-your-page/)  que podemos utilizar e incorporar a nuestro proyecto para, con un copiar y pegar, bloquear cientos de fuentes SPAM.

Este paso, aunque nos ayudará a reducir considerablemente el tráfico SPAM, no es una solución definitiva ya que tendremos que actualizar frecuentemente el listado de fuentes bloqueadas.

## 3- FILTRAMOS LOS DATOS ADECUADOS PARA SER ANALIZADOS

Como hemos visto hasta ahora, no existe una solución definitiva para hacer frente a todo el tráfico SPAM o generado por bots pero lo que sí podemos hacer es -con lo que no haya sido bloqueado hasta este punto- excluirlo de nuestros análisis.

Para ello podemos generar una nueva vista de análisis que excluya el segmento de tráfico identificado en el punto 1. De esta forma nos aseguraremos que dicha vista incluirá únicamente tráfico relevante para ser analizado. Es importante que siempre mantengamos una vista sin filtros (con datos en bruto) para evitar perder información.

## 4 - OTRAS ACCIONES

Una última acción -y muy efectiva- para frenar el tráfico generado por robots es  [habilitar un captcha](https://www.google.com/recaptcha/intro/v3beta.html)  para los  **usuarios que visitan nuestra página por primera vez**. Si resuelven el captcha, procedemos a insertar el código de analítica, si no, no lo hacemos y evitamos así registrar información de baja calidad.
<!--stackedit_data:
eyJoaXN0b3J5IjpbLTE0ODU0MTY4MTVdfQ==
-->
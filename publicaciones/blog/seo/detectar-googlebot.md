---
title: Cómo detectar a Googlebot
description: 
image: https://emirodgar.com/cdn/images/og/estrategia-seo.png
layout: emirodgar_post
date: 19/05/2021
date_modified: 04/03/2025
author: Emirodgar
lang: es_ES
sitemap: 1
feed: 1
folder: seo
permalink: detectar-googlebot

--- 

En ciertas ocasiones es necesario identificar si el visitante de nuestro sitio es el robot de búsqueda de Google (Googlebot) y tomar ciertas acciones.

> No debemos ofrecer contenido diferente al robot y a los usuarios ya que eso sería *cloaking* y podría ser penalizado.

## ¿Cómo identificar al robot de Google?

Actualmente tenemos dos posibilidades. Bien realizamos una DNS inversa o consultamos el `User-Agent`.

### DNS inversa

Es el proceso **más fiable** pero que **más recursos implica** ya que tendremos que llevar a cabo una operación de consulta sobre la IP.

El proceso sería el siguiente:  

1.  Debemos ejecutar una petición DNS inversa sobre la IP del visitante.
2.  Si la petición devuelve un host de `googlebot.com` entonces se trata de un robot de Google.
3.  Podríamos hacer una petición DNS de nuevo sobre el host para asegurarnos de que la IP es la misma y que no hay suplantación. Este tercer paso es opcional.

Veamos un ejemplo de cómo sería este proceso

    host 66.249.66.1
    1.66.249.66.in-addr.arpa domain name pointer crawl-66-249-66-1.googlebot.com.

### User Agent

La otra opción que tenemos disponible sería consultar el `User-Agent` para comprobar si se trata de un robot de búsqueda de Google. El proceso sería el siguiente:
  
Google ofrece un [listado completo](https://support.google.com/webmasters/answer/1061943?hl=es-419) de los `User-Agent` de todos sus robots, tanto de los de búsqueda como los asignados a otros servicios.

Por ejemplo, el `User-Agent` para el robot de búsqueda sería el siguiente:

    Googlebot/2.1 (+http://www.google.com/bot.html)

Tan sólo tendríamos que comparar para saber si es Googlebot o no. Rápido y sencillo. La única pega es que alguien podría suplantar a Googlebot usando el mismo valor por lo que la única opción fiable sería la primera.

## Problemas al bloquear a Googlebot

Google actualiza sus rangos de IPs con poca frecuencia, pero cuando ocurre debemos estar atentos si utilizamos CDNs o firewalls para asegurarnos de que entienden que se trata de `Googlebot` y no bloquean su acceso. En el caso de que nuestro sistema de seguridad bloquee al rastreador de Google por equivocación, suele generar caída en los rastreos (línea azul) y aumento del tiempo medio de respuesta (línea naranja). En la siguiente imagen podemos ver un ejemplo real en el que el CDN Akamai no actulizó rápidamente el listado de IPs, lo que provocó un problema al rastreo del sitio.

![image](https://github.com/user-attachments/assets/9a23ed67-dfe9-4cc6-83e3-4e40799753b9){:class="img-responsive"}

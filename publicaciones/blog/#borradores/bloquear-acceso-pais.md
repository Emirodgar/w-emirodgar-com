---
title: ¿Cómo bloquear el acceso a una web a determinados países?
description: 
lang: es_ES
author: emirodgar
sitemap: 0
feed: 0
folder: seo
layout: emirodgar_post
permalink: bloquear-acceso-pais

---

Dentro de la vertical de turismo es bastante habitual que los visitantes -dependiendo de su geolocalización- sean redireccionados a una versión idiomática y con unos precios establecidos para su mercado, impiendo que puedan cambiar estos valores. En este caso no buscamos una redirección sino más bien un bloqueo. 

Aunque es algo atípico, en ciertos momento podemos requerir limitar o bloquear el acceso a nuestra página web a visitantes de ciertos países. He visto algunas prácticas -a mi juicio erróneas- a nivel SEO por las que se busca bloquear el acceso a ciertos países donde la experiencia de carga de nuestra web es baja, para que los valores globales de las Core Web Vitals salgan reforzados. Para obtener las CWV, Google hace uso de los datos de campo (*field data*) basados en los accesos reales al sitio; si bloqueas los lentos, mejoras la puntuación global.

> Esto no se trata de bloquear el rastreo e indexación a Google, sino de bloquear el acceso de usuarios de ciertos países -con conexión lenta- para que no sean contabilizados en las CWV. 

Como he comentado antes, a nivel SEO implementar un bloqueo por país no es recomendable, no obstante, voy a explicar cómo podríamos llevarlo a cabo ya que el conocimiento no ocupa lugar.

## Bloquear a través de archivo de configuración

Prácticamente todos los servidores web (Apache, Nginx, CIDR, Juniper, Web.config, MikroTik, etc) disponen de un archivo de configuración desde el cuál podemos permitir o denegar el acceso por IP. 

Bastará con que sepamos cuál es el código a incluir y el rango de IPs asociados a un país. 

Si lo queremos más fácil, podemos hacer uso de la herramienta [visitor blocker](https://www.ip2location.com/free/visitor-blocker) donde tendremos que seguir los siguientes pasos:

1. Seleccionar el país o países a bloquear
2. Seleccionar la versión de IP (Ipv4 o Ipv6)
3. Seleccionar el servidor web (para generar el código adaptado al mismo)

El código exportado deberemos añadirlo al final del archivo de configuración; en el caso de Apache será en el fichero `.htaccess`.
<!--stackedit_data:
eyJoaXN0b3J5IjpbLTE5MTY3Mzc3ODIsLTU0ODUxMzk0MF19
-->
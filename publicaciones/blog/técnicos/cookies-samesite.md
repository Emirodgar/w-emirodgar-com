


# Cookies SameSite: guía para entender cómo funcionan

Las cookies son, a día de hoy, la forma más utilizada para guardar y mantener información entre un usuario y una o varias páginas web. Éstas se guardan en el navegador (Chrome, Firefox, Edge, etc.) y normalmente se usan para guardar sesiones, preferencias en aplicaciones o seguimiento de analítica web.

Se componen

    key=value

Con el objetivo de preservar la privacidad de los usuarios, los navegadores han ido evolucionando y siendo más restrictivos a la hora de aceptar cookies.


Cada cookie es un par clave = valor junto con una serie de atributos que controlan cuándo y dónde se usa esa cookie. Probablemente ya haya utilizado estos atributos para establecer cosas como fechas de vencimiento o indicar que la cookie solo debe enviarse a través de HTTPS. Los servidores configuran cookies enviando el encabezado Set-Cookie acertadamente llamado en su respuesta. Para todos los detalles, puede sumergirse en RFC6265bis, pero por ahora aquí hay una actualización rápida.

Supongamos que tiene un blog en el que desea mostrar una promoción "Novedades" a sus usuarios. Los usuarios pueden descartar la promoción y luego no la volverán a ver por un tiempo. Puede almacenar esa preferencia en una cookie, configurarla para que caduque en un mes (2,600,000 segundos) y solo enviarla a través de HTTPS. Ese encabezado se vería así:
<!--stackedit_data:
eyJoaXN0b3J5IjpbMTcxMzQ1ODU3MSw3MzA5OTgxMTZdfQ==
-->
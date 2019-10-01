---
title: Etiqueta canónica
description: 
image: https://emirodgar.com/cdn/images/og/estrategia-seo.png
date: 01/10/2019
author: Emirodgar
lang: es_ES
permalink: etiqueta-canonica

--- 

# Etiqueta canónica

El **contenido duplicado** siempre ha sido un problema para el SEO. Disponer de múltiples URLs para ofrecer el mismo acceso provoca que nuestra estrategia orgánica no esté consolidada y no seamos competitivos.

Si Google encuentra varias URLs duplicadas, establecerá una como canónica (predeterminada) y será ésta la que rastree con mayor frecuencia. Las demás quedarán en un segundo plano y, aunque es posible que sí las rastree, lo más seguro es que no posicionen.

## ¿Qué es contenido duplicado?

A menudo se tiende a pensar que **el contendido duplicado lo generan dos páginas idénticas** pero esto no tiene porqué ser así. Aunque exista diferente entre el contenido, si es poca o no es relevante, Google las considerará como duplicadas y por lo tanto **definirá una como canónica** frente al resto.

## ¿Qué es la etiqueta canónica?

Es la forma que tenemos de indicarle a Google cuál será la página canónica que debe rastrear e indexar con mayor frecuencia delegando a un segundo lugar el resto de posibles duplicadas.

**¿Es necesario que cada página tenga establecida una canónica?** no es necesario pero en ciertos casos sí es conveniente que lo establezcamos para asegurar un rastreo e indexación óptimo de las URLs de valor.

## Beneficios de usar la etiqueta canónica

- Definimos qué URL queremos que sea rastreada e indexada.
- Unificamos enlaces y popularidad en una única URL que mejorará por tanto su posicionamiento web.
- Para facilitar los análisis en plataformas como Google Search Console
- Para ahorrar tiempo de rastreo del robot de búsqueda en páginas duplicadas o con poco valor.

## Cómo implementar la etiqueta canonical

Aunque hay varias formas de indicar a Google que una URL es canónica, la más común suele ser añadir una etiqueta dentro de la cabecera de la página.
 
```html
<link rel="canonical" href="https://emirodgar.com" />
```

También se puede implementar como encabezado HTTP. Si quisiéramos establecer el atributo canonical para algo que no fuera una página web, por ejemplo un PDF, tendríamos que hacer uso de los encabezados HTTP.

```
Link: <http://emirodgar.com/informe.pdf>; rel="canonical"
```
<!--stackedit_data:
eyJoaXN0b3J5IjpbLTE1NzMyNzA1NTksNjY0ODgwNDczXX0=
-->
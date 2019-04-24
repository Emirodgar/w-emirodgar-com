---
title: 10 trucos para las hojas de cálculo de Google (Google Sheet)
description: Saca más provecho a tus hojas de cálculo de Google con estos trucos
lang: es_ES
author: Emirodgar
tags: SEO, Google, excel
date: 24/04/2019
image: https://emirodgar.com/publicaciones/img/lighthouse-automatic.png
permalink: trucos-hojas-calculo-google

---

# 10 trucos para las hojas de cálculo de Google

Desde que descubrí **Google Apps** soy un fan incondicional de todos sus servicios, en especial de Google Sheets. 

Versátiles, accesibles. Os explico una serie de trucos para sacar un mayor provecho a las hojas de cálculo de Google.

## 1- Crea una hoja desde el navegador

Si estás haciendo uso de Google Chrome y estás logado en tu cuenta de Google, batará con que teclées en la barra de direcciones ```sheets.new``` para crear y abrir una nueva hoja de cálculo. Rápido y efectivo.

## 2- Usa combinaciones de teclas

Si trabajas frecuentemente en hojas de cálculo, el conocer las combinaciones de teclas te ayudará a avanzar mucho más rápido. El [listado de combinaciones de teclas para Google Sheets](https://support.google.com/docs/answer/181110?p=spreadsheets_shortcuts&visit_id=636916984300300429-799695081&rd=1) es bastante amplio así que os dejo las que considero más relevantes:

 1. Insertar enlace (ctrl + k)
 2. Quitar formato (ctrl + \)
 3. Pegar sólo valores (ctrl + may + v)
 4. Dar formato de fecha (ctrl + may + 3)
 5. Dar formato de moneda (ctrl + may + 4)
 6. Insertar una nota (may + f2)
 7. Insertar un comentario (ctrl + alt + m)

A través de las [macros de Google Sheets](https://developers.google.com/apps-script/guides/sheets/macros) podríamos generar nuestras propias combinaciones de teclas. 

## 3- Traduce a otros idiomas

Si trabajas en varios idiomas bastará con que utilices la función [GoogleTranslate](https://support.google.com/docs/answer/3093331?hl=es) para traducir de forma rápida a múltiples idiomas. Especificamos el contenido a traducir, el idioma de origen y el idioma que queremos obtener de la siguiente forma:

```=GOOGLETRANSLATE("hola";"es";"en")```

## 4- Importa datos de otras hojas de cálculo

Todos sabemos que podamos integrar información de una pestaña a otra pero Google también nos permite interactuar con información de otras hojas de cálculo a través de la función [ImportRange](https://support.google.com/docs/answer/3093340?hl=es).

```=IMPORTRANGE("https://docs.google.com/spreadsheets/d/19F`dfgV14";  "Pestaña!A1:A15")```

Para que esto funcione hay que conectar las hojas una única vez. Cuando utilicemos la función nos solicitará dicho permiso para conectarlas. A partir de ahí podremos importar tanta información como queramos sin ningún impedimento.

## 5- Importa datos de otras páginas web

¿Te imaginas poder importar listas de información de otras páginas? es tan sencillo como hacer uso de la función [ImportHTML](https://support.google.com/docs/answer/3093339?hl=es) de la siguiente manera:

```=IMPORTHTML("https://es.wikipedia.org/wiki/Anexo:Capitales_de_provincia_de_Espa%C3%B1a_por_poblaci%C3%B3n";"table";1)```

También podríamos importar información desde un [fichero XML](https://support.google.com/docs/answer/3093342) o un [feed RSS](https://support.google.com/docs/answer/3093337).

## 6- Extiende una fórmula a todo un rango

La mayoría de gente suele arrastrar una fórmula por todo el rango donde quiere que funcione. Si hacemos un cambio en la misma tendremos que volver a arrastrar la fórmula una y otra vez. Una opción más eficiente sería utilizar [ArrayFormula](https://support.google.com/docs/answer/3093275?hl=es) para definir -en una única celda- el comportamiento que queramos en dicho rango

```=ArrayFormula(TRIM(C1:C50))```

## 7- Normaliza y valida el contenido

Para mí hay cuatro funciones básicas que nos ayudarán a que el texto de nuestras hojas de cálculo esté normalizado:

 1. ```Upper```: todo a maýusculas
 2. ```Lower:``` todo a minúsculas
 3. ```Proper```: mayúscula la primera letra de cada palabra
 4. ```Trim```: eliminar espacios en blanco al principio y al final de una cadena

Por otro lado, si queremos validar ciertos campos, podemos hacer uso de las funciones por defecto. Las que más utilizo son:

 -  ```ISEMAIL```: para determinar si un campo es un email válido o no.
 - ```ISURL```: para determinar si un campo es una dirección web válida.
 -  ```ESTEXTO```: para determinar si un campo contiene sólo texto.

## 8- Haz uso de gráficas de control (sparkline)

El apoyo visual siempre es importante aunque generar gráficos sin un objetivo concreto puede que no aporte nada. Google sheets nos permite crear mini gráficos que se representan en una celda gracias a la función [Sparkline](https://support.google.com/docs/answer/3093289).

Una forma simple y fácil de integrar la parte visual sin perder control analítico.

## 9 - Exporta tus datos a PDF o JSON

Toda tu hoja de datos puede ser accedida desde fuera o bien podemos exportar su contenido en dos format
<!--stackedit_data:
eyJoaXN0b3J5IjpbMTQ5NDIzMzc4OSwxNDc2MDMxNzksLTE4NT
gyMTI4ODQsNzY1NTcyMDM3LC0zMTY5ODIzMDNdfQ==
-->
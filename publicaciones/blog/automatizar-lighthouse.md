---
title: Automatizar análisis de Lighthouse para múltiples páginas
description: Optimiza tu tiempo y automatiza el rendimiento de múltiples URLs dentro de tu sitio web
lang: es_ES
author: Emirodgar
tags: SEO, Google, performance
date: 16/04/2019
image: https://emirodgar.com/publicaciones/img/lighthouse-automatic.png
permalink: automatizar-analisis-lighthouse

---

# # Analiza el tiempo de carga de tu web de forma automática con Lighthouse

Lighthouse es una  [herramienta gratuita de Google](https://emirodgar.com/[https://developers.google.com/web/tools/lighthouse/?hl=es](https://developers.google.com/web/tools/lighthouse/?hl=es))  para poder analizar una web en base a rendimiento, accesibilidad, mejores prácticas y SEO.

> Actualmente podemos utilizarlo a través de [PageSpeed]([https://developers.google.com/speed/pagespeed/insights/?hl=es](https://developers.google.com/speed/pagespeed/insights/?hl=es)), [Web.dev](https://web.dev) o como extensión del navegador pero siempre nos limita a analizar URLs de forma individual.

En este artículo os enseñaré cómo podemos **automatizar** el proceso de análisis con Lightouse **para múltiples URLs**. Los pasos son los siguientes:

 1. [Instalamos Lighthouse en nuestro ordenador](#instalacion)
 2. [Ejecutamos múltiples análisis](#analisis)
 3. [Cargamos los datos para su análisis](#carga)
 4. [Exportamos los datos a la web](#exportar)

Un buen tiempo de carga es un  [factor SEO](https://emirodgar.com/factores-seo)  relevante que nos ayudará a **mejorar posicionamiento web** y favorecer la experiencia de nuestros visitantes, especialmente a aquellos que lo hacen a través de dispositivos móviles.


## 1- <a name="instalacion"></a> Instalamos Lighthouse en nuestro ordenador

El primer paso será instalar en nuestro ordenador Nodej.js, npm y Lighthouse. Para los dos primeros,  [seguiremos estas instrucciones](https://emirodgar.com/[https://www.npmjs.com/get-npm](https://www.npmjs.com/get-npm)).

Aunque en la guía oficial hacen referencia a  **lighthouse**  yo os recomiendo hacer uso de  **lighthouse-batch**  para poder analizar múltiples URLs a la vez.

Una vez que tengamos npm instalado, abrimos una consola de Windows (cmd.exe) y ejecutamos el siguiente comando:

```
npm install -g lighthouse-batch

```
Esperamos a que termine la instalación y tendremos todo listo para comenzar a analizar.

## 2- <a name="analisis"></a> Ejecutamos múltiples análisis

Ahora ya podemos generar tantos análisis como queramos. El comando que debemos usar será el siguiente. Os dejo un enlace hacia la  [documentación completa de lighthouse-batch](https://emirodgar.com/[https://github.com/mikestead/lighthouse-batch](https://github.com/mikestead/lighthouse-batch)).

```
lighthouse-batch -s [url1],[url2],[urlN] -g --out C:/[ruta-donde-exportar]

```

Lo que yo he hecho ha sido sacar todas las URLs del  [sitemap XML](https://emirodgar.com/sitemap.xml)  y crear un fichero .bat para analizar todas ellas a través del comando anterior.

> La salida por defecto de los informes es  **JSON**  pero se puede modificar

Por último, creo una [tarea en Windows](https://answers.microsoft.com/es-es/windows/forum/all/aprende-a-usar-el-programador-de-tareas-de-windows/015b8362-95be-4460-ac51-a0917e4a2d4b) para que se ejecute este fichero .bat todos los días a la misma hora. De esta forma todas las URLs serán analizadas cada día.

## 3- <a name="carga"></a>Cargamos los datos para su análisis

Si todo ha ido bien, los informes han sido generados en nuestro ordenador por lo que el siguiente paso será subirlos a internet de tal modo que sean accesibles para su análisis. Para ello haré uso de Google Sheets.

He creado otro fichero .bat que se lanza 30 minutos después -así me aseguro de que han terminado todos los informes- y que sube los resultados a mi página web [https://emirodgar.com/rendimiento/json/emirodgar_com_.report.json](https://emirodgar.com/rendimiento/json/emirodgar_com_.report.json).

Una vez accesibles, importo los ficheros JSON en Google Sheets haciendo uso de la librería  [ImportJSON](https://emirodgar.com/[https://github.com/bradjasper/ImportJSON](https://github.com/bradjasper/ImportJSON)).

![](https://i.imgur.com/IrL1alS.png)

El resultado es el que podéis ver en la imagen anterior. Cada URL tiene su propio análisis en el que podemos identificar mediante colores su puntuación.

> Dejo el [template de Google Sheets](https://docs.google.com/spreadsheets/d/1whDp-4iFdMzHZiX0zg9_cndFdHpFS1xI_RHINBFr_E8/edit?usp=sharing) que he utilizado para que podáis hacer una copia (Archivo > Crear una copia)

## 4- <a name="exportar"></a>Exportamos los datos a la web

Con esto ya tendríamos diariamente el análisis del rendimiento web de todas y cada una de las URLs que forman nuestro sitio web. No obstante, si quisiéramos mostrar los resultados en nuestra página web podríamos hacerlo importando directamente los ficheros JSON o directamente desde la hoja de cálculo que hemos creado. Yo he creado la  [página de rendimiento](https://emirodgar.com/rendimiento)  para poder visualizar en cada momento el estado de mi sitio web.

Lo que he hecho ha sido acceder a la hoja excel de Google donde realizo los análisis y extraer la información que me interesa para mostrarla en dicha página.

### 4.1- Publicar hoja de cálculo de Google

Para que esto funcione tendremos que [publicar nuestra hoja](https://support.google.com/docs/answer/183965?co=GENIE.Platform%3DDesktop&hl=es) y compartirla para todo el mundo. CUna vez lista podrá ser accedida de la siguiente forma:

```
https://spreadsheets.google.com/feeds/list/[ID] /1/public/values?alt=json

```

El ID será el que aparezca en nuestra URL y el contenido, en nuestro caso, será exportado de nuevo en JSON.

```
https://docs.google.com/spreadsheets/d/[ID]/edit#gid=0

```
### 4.2- Mostrar datos en la página web

Una vez que tengamos accesible los resultados de nuestra hoja de cálculo utilizaremos jQuery para recuperarlos y mostrarlos como quedamos.

```
$.getJSON(url, function(data) {

    var entry = data.feed.entry;
    $.each(entry, function(index, item) {

        if ((this.gsx$performance.$t !== 'Score') && (this.gsx$_cn6ca.$t !== 'Summary')) {

            var d = new Date(this.updated.$t);
            var e = formatDate(d);

            var score = this.gsx$performance.$t.replace("%", "");
            var color = "green";

            if (score <= 44)
                color = "red";
            else if (score < 74)
                color = "#A0522D";

           $('.results').prepend('<tr><td style="text-align:left;">' + this.gsx$_cn6ca.$t + '</td><td style="color:' + color + '">' + this.gsx$performance.$t + '</td><td>' + this.gsx$_cpzh4.$t + '</td><td>' + this.gsx$_cre1l.$t + '</td><td>' + this.gsx$_chk2m.$t + '</td><td>' + this.gsx$_ciyn3.$t + '</td><td>' + this.gsx$seo.$t + '</td><td>' + e + '</td></tr>');
        } 
    });
});
....
</script>

<div class="results"></div>
```

El código anterior es un ejemplo y sólo muestra una parte de la información que recibimos. A partir de aquí y con los conocimientos obtenidos podemos modificar y adaptar este proyecto a nuestras necesidades.
<!--stackedit_data:
eyJoaXN0b3J5IjpbLTE0ODgzNzUyMjIsLTExNDg4MDQ1MDksLT
E0ODgwOTg2NjQsMTM1OTAyNjkyMl19
-->
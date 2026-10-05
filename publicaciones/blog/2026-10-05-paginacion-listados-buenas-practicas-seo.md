---
title: Paginación en listados, buenas prácticas SEO para no perder rastreo ni indexación
description: Cómo hacer una paginación que Google pueda rastrear y que el usuario agradezca. URLs, enlaces, canonical, noindex, scroll infinito, botón de cargar más y errores habituales en categorías y listados.
image: https://emirodgar.com/cdn/images/og/estrategia-seo.png
layout: emirodgar_post
author: Emirodgar
lang: es_ES
sitemap: 1
feed: 1
date: 05-10-2026
folder: seo
permalink: paginacion-listados-buenas-practicas-seo

---

La paginación parece un tema menor hasta que revisas un ecommerce, un blog o un portal de noticias con miles de URLs y ves que **los productos o artículos de la página 4 en adelante no se rastrean, no se indexan o aparecen duplicados**. Casi siempre el origen es una paginación mal planteada.

En este post te cuento cómo plantearla para que funcione bien para el usuario y para los rastreadores, y qué errores veo con más frecuencia.

## Qué ha cambiado: rel="prev" y rel="next" ya no sirven

Durante años se recomendó marcar la secuencia con `rel="prev"` y `rel="next"`. Google anunció en 2019 que llevaba tiempo sin usarlos. Puedes mantenerlos (otros buscadores pueden aprovecharlos y no hacen daño), pero **no son lo que hace que tu paginación funcione**.

Lo que Google trata es cada página paginada como una página más, y las descubre por los enlaces. De ahí salen casi todas las buenas prácticas.

## Buenas prácticas

### 1. Cada página debe tener su propia URL

Tanto `/categoria/?page=2` como `/categoria/page/2/` valen. Lo importante es que sea una URL única y estable que se pueda cargar directamente, compartir y rastrear.

Evita paginar con fragmentos (`/categoria#page=2`): Google ignora lo que va detrás de la almohadilla, así que para él esa página no existe. Lo expliqué en [URLs con almohadilla y SEO](https://emirodgar.com/url-almohadilla-seo).

### 2. Enlaces reales con `<a href>`

Es el punto donde más se falla en sitios con JavaScript. Google sigue enlaces, no clics.

```html
<!-- Correcto -->
<a href="/categoria/?page=3">3</a>

<!-- Incorrecto: Google no lo sigue -->
<span onclick="cargarPagina(3)">3</span>
<a href="#" data-page="3">3</a>
```

Si la paginación depende de un framework, comprueba que el HTML inicial ya incluye esos enlaces. Tienes cómo hacerlo en [CSR vs SSR](https://emirodgar.com/csr-vs-ssr-rastreadores-javascript) y en [cómo rastrear e indexar páginas con JavaScript](https://emirodgar.com/rastrear-javascript).

### 3. Canonical autorreferenciado en cada página

Cada página paginada se canoniza a sí misma: la página 2 apunta a la página 2, la 3 a la 3.

El error clásico es canonizar todas a la página 1 pensando que así se concentra la autoridad. Lo que ocurre es que le dices a Google que las páginas 2, 3 y 4 son la misma que la 1, y **los productos o artículos que solo aparecen ahí pueden dejar de descubrirse**.

Si usas parámetros de ordenación o filtro (`?orden=precio`), canoniza a la versión sin parámetro. Lo cuento en [parámetros en URLs y SEO](https://emirodgar.com/parametros-url-seo).

### 4. No pongas noindex a las páginas 2 y siguientes

Es otro reflejo habitual: "son contenido duplicado, las saco del índice". Dos problemas:

- Con el tiempo Google trata un `noindex` mantenido como si fuera también `nofollow`, y deja de seguir los enlaces de esas páginas. Los elementos que solo se enlazan desde ahí quedan huérfanos.
- Las páginas paginadas no son duplicados: cada una lista elementos distintos.

Tampoco las bloquees en robots.txt. Si quieres entender por qué estas dos medidas no son equivalentes, está en [bloqueo por robots.txt vs noindex](https://emirodgar.com/bloqueo-robotstxt-noindex).

### 5. Elimina la URL duplicada de la página 1

Si `/categoria/` y `/categoria/?page=1` devuelven lo mismo, tienes dos URLs para una página. Redirige `?page=1` a la URL base con una 301, o canonízala, y no enlaces nunca a la versión con `page=1` desde el paginador.

### 6. Devuelve un 404 en las páginas que no existen

Si una categoría tiene 8 páginas y alguien (o un bot) pide `?page=57`, la respuesta debe ser un 404, no un 200 con el listado vacío ni una redirección a la página 1. Los 200 vacíos generan *soft 404* y gastan rastreo.

### 7. Títulos y descripciones sin repetir tal cual

No hace falta reescribir el title de cada página, pero sí conviene diferenciarlas, por ejemplo añadiendo "Página 2" al final. Evita que 40 páginas de una categoría tengan el mismo title y la misma meta description sin ningún matiz.

El H1 puede mantenerse igual, y el texto SEO de categoría (si lo hay) suele quedarse solo en la página 1.

### 8. Paginador claro y con buen enlazado

Un paginador con solo "Anterior" y "Siguiente" obliga a Googlebot a recorrer la lista de una en una: para llegar al producto de la página 30 necesita 30 saltos. Mejor un paginador que enlace a:

- La primera y la última página.
- Un rango de páginas alrededor de la actual.
- Anterior y siguiente.

Así reduces la profundidad de clics. Y para los elementos importantes, no dependas solo de la paginación: enlázalos desde la home, desde categorías destacadas o desde otros contenidos. Si quieres revisar cómo está tu arquitectura, mira cómo [auditar el enlazado interno](https://emirodgar.com/auditoria-enlazado-interno).

### 9. Si usas scroll infinito o "cargar más", mantén una paginación por debajo

El scroll infinito es cómodo, pero un bot no hace scroll ni pulsa botones. La solución es una paginación con URLs reales como base, y la carga progresiva como mejora para el usuario:

- Cada bloque de contenido tiene su URL paginada accesible directamente.
- Los enlaces a esas URLs existen en el HTML, aunque el usuario no los use.
- Al hacer scroll, la URL de la barra se actualiza con la API History (`pushState`) a la página que se está viendo.

Es lo que recomienda Google en su [guía de scroll infinito](https://developers.google.com/search/docs/specialty/ecommerce/pagination-and-incremental-page-loading).

### 10. Sobre las páginas "ver todo"

Una página única con todos los elementos puede funcionar si es pequeña y carga rápido. Si tiene cientos de productos, es más pesada, empeora los Core Web Vitals y el usuario no la usa. En ese caso, pagina.

## Errores frecuentes, resumidos

| Error | Consecuencia |
|---|---|
| Paginación con `#` o con JavaScript sin `<a href>` | Google no descubre las páginas 2 y siguientes |
| Canonical de todas las páginas a la página 1 | Elementos de páginas profundas sin descubrir |
| `noindex` en la página 2 en adelante | Se deja de seguir los enlaces y quedan huérfanos |
| `?page=1` indexable | Duplicado de la página 1 |
| 200 en páginas fuera de rango | Soft 404 y rastreo desperdiciado |
| Solo "Anterior" y "Siguiente" | Contenido a mucha profundidad de clics |
| Scroll infinito sin URLs de respaldo | El bot solo ve el primer bloque |

## Cómo comprobarlo en tu web

1. **Rastrea la categoría con Screaming Frog**, con y sin renderizado de JavaScript, y comprueba si encuentra las mismas páginas paginadas. Si con "Solo texto" faltan páginas, el paginador depende de JS.
2. **Revisa el canonical y la indexabilidad** de las páginas 2, 3 y siguientes en el propio rastreo.
3. **Mira la profundidad de clics** de tus productos o artículos. Los que están a más de 4 o 5 niveles suelen rastrearse peor.
4. **Inspecciona una URL paginada en Search Console** y comprueba que está indexada y que la canónica elegida por Google es la tuya.
5. **Prueba una página fuera de rango** y comprueba que devuelve un 404.

## Conclusiones

- Google ya no usa `rel="prev"` y `rel="next"`: trata cada página paginada como una URL normal y la descubre por los enlaces.
- Cada página: URL propia, enlaces `<a href>` reales, canonical autorreferenciado e indexable.
- No canonices todo a la página 1 ni pongas `noindex` a las siguientes. Es la forma más habitual de dejar contenido fuera del índice sin darse cuenta.
- Si usas scroll infinito o "cargar más", mantén por debajo una paginación con URLs reales.
- Revisa la profundidad de clics: si un producto solo se llega desde la página 40, ayúdalo con enlaces desde otros sitios.

Si tienes un listado grande, empieza por una prueba sencilla: rastréalo sin JavaScript y mira hasta qué página llega el rastreador.

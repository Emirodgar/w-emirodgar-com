---
title: Publicaciones
description: Listado de publicaciones sobre SEO, IA aplicada y transformación digital
lang: es_ES
layout: emirodgar_post
author: Emirodgar
image: https://emirodgar.com/cdn/images/og/marketing-digital.png
permalink: publicaciones

---

Listado de publicaciones sobre SEO, IA aplicada y transformación digital


<nav class="pub-categorias" aria-label="Categorías de publicaciones">
  <span class="pub-categorias__label"><b>Explora por tema</b>:</span>
  <ul class="pub-categorias__lista">
    <li><a href="https://emirodgar.com/publicaciones-seo">SEO Técnico</a></li>
    <li><a href="https://emirodgar.com/publicaciones-analitica">Analítica &amp; Datos</a></li>
    <li><a href="https://emirodgar.com/publicaciones-ia">IA &amp; Agentes</a></li>
    <li><a href="https://emirodgar.com/publicaciones-geo">GEO &amp; Transformación Digital</a></li>
    <li><a href="https://emirodgar.com/publicaciones-programacion">Recursos Técnicos</a></li>
	  <li><a href="https://emirodgar.com/publicaciones-marketing">Marketing</a></li>
	  <li><a href="https://emirodgar.com/publicaciones-estrategicas">Estratégicos</a></li>
	  <li><a href="https://emirodgar.com/publicaciones-offtopic">Offtopic</a></li>
  </ul>
</nav>

## Últimas publicaciones

Las 10 publicaciones más recientes, incluyendo tanto artículos nuevos como los últimos actualizados.

<div id="pl-latest-list" class="pl-latest-list">
<noscript>Activa JavaScript para ver aquí las publicaciones más recientes. Mientras tanto, puedes consultar <a href="#todas-las-publicaciones">todas las publicaciones</a> en la tabla de abajo.</noscript>
</div>

<h2 id="todas-las-publicaciones">Todas las publicaciones</h2>

Busca por título o categoría, o consulta la lista completa ordenada por tema y fecha.

<div class="pl-search-wrap">
  <input type="search" id="pl-search-input" class="pl-search-input" placeholder="Buscar por título o categoría..." aria-label="Buscar publicaciones" autocomplete="off">
  <div id="pl-count" class="pl-count"></div>
</div>

<div class="pl-table-wrap">
<table class="pl-table">
  <thead>
    <tr><th>Categoría</th><th>Título</th><th>Fecha</th></tr>
  </thead>
{% assign pubs = site.pages | where_exp: "p", "p.title and p.date" %}
{% assign pubs = pubs | where_exp: "p", "p.folder == 'seo' or p.folder == 'analitica' or p.folder == 'ia' or p.folder == 'geo' or p.folder == 'programacion' or p.folder == 'marketing' or p.folder == 'estrategicos' or p.folder == 'offtopic'" %}
{% assign cat_slugs = "seo,analitica,ia,geo,programacion,marketing,estrategicos,offtopic" | split: "," %}
{% assign cat_names = "SEO,Analítica,IA,GEO,Programación,Marketing,Estratégicos,Offtopic" | split: "," %}
  <tbody id="pl-table-body">
{% for slug in cat_slugs %}{% assign idx = forloop.index0 %}{% assign cat_name = cat_names[idx] %}{% assign cat_pubs = pubs | where_exp: "p", "p.folder == slug" %}{% for p in cat_pubs %}    <tr data-cat="{{ cat_name }}" data-date="{{ p.date }}" data-modified="{{ p.date_modified }}"><td class="pl-col-cat"><span class="pl-badge-cat">{{ cat_name }}</span></td><td class="pl-col-title"><a href="{{ p.url }}">{{ p.title }}</a></td><td class="pl-col-date">{{ p.date }}</td></tr>
{% endfor %}{% endfor %}  </tbody>
</table>
</div>

<p id="pl-no-results" class="pl-no-results" style="display:none;">No se han encontrado publicaciones con ese criterio de búsqueda.</p>

<style>
.pl-latest-list { display: flex; flex-direction: column; margin: 12px 0 32px; border-top: 1px solid #e6e6e6; }
.pl-latest-item { display: block; padding: 14px 0; border-bottom: 1px solid #e6e6e6; text-decoration: none; color: inherit; }
.pl-latest-item:hover .pl-latest-title { color: #36a749; text-decoration: underline; }
.pl-latest-eyebrow { display: block; font-family: Roboto, sans-serif; font-size: 12px; font-weight: 700; text-transform: uppercase; letter-spacing: .05em; color: #888; margin-bottom: 4px; }
.pl-latest-title { display: block; font-size: 16px; font-weight: 600; color: #333; line-height: 1.4; }

.pl-search-wrap { position: sticky; top: 0; background: #fff; padding: 14px 0 10px; z-index: 5; border-bottom: 1px solid #eee; margin-bottom: 4px; }
.pl-search-input { width: 100%; box-sizing: border-box; padding: 12px 16px; font-size: 16px; border: 1px solid #ccc; border-radius: 6px; font-family: Roboto, sans-serif; }
.pl-search-input:focus { outline: none; border-color: #36a749; box-shadow: 0 0 0 3px rgba(54,167,73,.15); }
.pl-count { font-size: 13px; color: #888; margin-top: 8px; font-family: Roboto, sans-serif; }

.pl-table-wrap { margin-top: 8px; }
.pl-table { width: 100%; border-collapse: collapse; font-family: Roboto, sans-serif; font-size: 15px; }
.pl-table thead th { text-align: left; font-size: 12px; text-transform: uppercase; letter-spacing: .05em; color: #888; padding: 8px 10px; border-bottom: 2px solid #ddd; }
.pl-table tbody td { padding: 10px; border-bottom: 1px solid #eee; vertical-align: top; }
.pl-table tbody tr:hover { background: #fafafa; }
.pl-col-date { white-space: nowrap; color: #777; font-size: 13px; text-align: right; width: 140px; }
.pl-col-cat { width: 110px; }
.pl-col-title a { color: #333; text-decoration: none; font-weight: 600; }
.pl-col-title a:hover { color: #36a749; text-decoration: underline; }

.pl-badge-cat { display: inline-block; font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: .04em; padding: 3px 8px; border-radius: 4px; background: #eef5ef; color: #2e8b3d; white-space: nowrap; }

.pl-no-results { padding: 24px 0; color: #888; text-align: center; }

@media (max-width: 700px) {
  .pl-table thead { display: none; }
  .pl-table, .pl-table tbody, .pl-table tr, .pl-table td { display: block; width: auto; }
  .pl-table tr { border: 1px solid #eee; border-radius: 6px; padding: 10px 12px; margin-bottom: 10px; }
  .pl-table td { border: none; padding: 3px 0; text-align: left; width: auto; }
  .pl-col-date { text-align: left; }
}
</style>

<script>
(function () {
  var MESES = ['ene', 'feb', 'mar', 'abr', 'may', 'jun', 'jul', 'ago', 'sep', 'oct', 'nov', 'dic'];

  function parseDate(str) {
    if (!str) { return null; }
    var parts = str.split(/[-\/]/);
    if (parts.length !== 3) { return null; }
    var d = parseInt(parts[0], 10), m = parseInt(parts[1], 10), y = parseInt(parts[2], 10);
    if (!d || !m || !y) { return null; }
    var date = new Date(y, m - 1, d);
    return isNaN(date.getTime()) ? null : date;
  }

  function formatDate(date) {
    return date.getDate() + ' ' + MESES[date.getMonth()] + ' ' + date.getFullYear();
  }

  function normalize(str) {
    return (str || '').toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '');
  }

  var tbody = document.getElementById('pl-table-body');
  var rows = tbody ? Array.prototype.slice.call(tbody.querySelectorAll('tr')) : [];
  if (!rows.length) { return; }

  var items = rows.map(function (tr) {
    var published = parseDate(tr.getAttribute('data-date'));
    var modified = parseDate(tr.getAttribute('data-modified'));
    var updated = !!(modified && published && modified.getTime() > published.getTime());
    return {
      tr: tr,
      cat: tr.getAttribute('data-cat'),
      published: published,
      latestDate: updated ? modified : published,
      updated: updated
    };
  }).filter(function (it) { return it.published; });

  // Reordena las filas ya renderizadas: categoría (orden de aparición) + fecha descendente
  var byCat = {}, catOrder = [];
  items.forEach(function (it) {
    if (!byCat[it.cat]) { byCat[it.cat] = []; catOrder.push(it.cat); }
    byCat[it.cat].push(it);
  });
  catOrder.forEach(function (cat) {
    byCat[cat].sort(function (a, b) { return b.latestDate - a.latestDate; });
  });
  var ordered = [];
  catOrder.forEach(function (cat) { ordered = ordered.concat(byCat[cat]); });
  ordered.forEach(function (it) {
    it.tr.querySelector('.pl-col-date').textContent = formatDate(it.latestDate) + (it.updated ? ' (act.)' : '');
    tbody.appendChild(it.tr);
  });

  // Últimas 10 publicaciones (nuevas o actualizadas)
  var latest = items.slice().sort(function (a, b) { return b.latestDate - a.latestDate; }).slice(0, 10);
  var latestWrap = document.getElementById('pl-latest-list');
  if (latestWrap) {
    latestWrap.innerHTML = '';
    latest.forEach(function (it) {
      var link = it.tr.querySelector('a');
      var a = document.createElement('a');
      a.href = link.getAttribute('href');
      a.className = 'pl-latest-item';

      var eyebrow = document.createElement('span');
      eyebrow.className = 'pl-latest-eyebrow';
      eyebrow.textContent = it.cat + ' · ' + (it.updated ? 'Actualizado' : 'Publicado') + ' el ' + formatDate(it.latestDate);

      var title = document.createElement('span');
      title.className = 'pl-latest-title';
      title.textContent = link.textContent;

      a.appendChild(eyebrow);
      a.appendChild(title);
      latestWrap.appendChild(a);
    });
  }

  // Buscador en vivo
  var input = document.getElementById('pl-search-input');
  var counter = document.getElementById('pl-count');
  var noResults = document.getElementById('pl-no-results');
  var total = ordered.length;

  function updateCount(n) {
    if (counter) { counter.textContent = n + ' de ' + total + ' publicaciones'; }
  }
  updateCount(total);

  if (input) {
    input.addEventListener('input', function () {
      var q = normalize(input.value.trim());
      var visible = 0;
      ordered.forEach(function (it) {
        var match = !q || normalize(it.tr.textContent).indexOf(q) !== -1;
        it.tr.style.display = match ? '' : 'none';
        if (match) { visible++; }
      });
      updateCount(visible);
      if (noResults) { noResults.style.display = visible === 0 ? '' : 'none'; }
    });
  }
})();
</script>



<!--stackedit_data:
eyJoaXN0b3J5IjpbMjA1MzgxMDQ3OCwtMjk1MDM4NTQzLDIwOD
M3NzE3NTcsMTE0OTE5ODMxLC02NDMxNzkxMThdfQ==
-->

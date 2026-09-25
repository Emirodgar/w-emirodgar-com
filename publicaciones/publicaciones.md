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

<h2 id="todas-las-publicaciones">Todas las publicaciones</h2>

Busca por título o categoría, o consulta la lista completa ordenada por fecha, de más reciente a más antigua.

<div class="pl-search-wrap">
  <input type="search" id="pl-search-input" class="pl-search-input" placeholder="Buscar por título o categoría..." aria-label="Buscar publicaciones" autocomplete="off">
  <div id="pl-count" class="pl-count"></div>
</div>

<div class="pl-table-wrap">
<table class="pl-table">
  <thead>
    <tr><th>Categoría</th><th>Título</th><th>Fecha</th></tr>
  </thead>
  <tbody id="pl-table-body">
{% for page in site.pages %}{% if page.title != null and page.date != null and page.folder == "seo" %}    <tr data-cat="SEO" data-date="{{ page.date }}" data-modified="{{ page.date_modified }}"><td class="pl-col-cat"><span class="pl-badge-cat">SEO</span></td><td class="pl-col-title"><a href="{{ page.url }}">{{ page.title }}</a></td><td class="pl-col-date">{{ page.date }}</td></tr>
{% endif %}{% endfor %}
{% for page in site.pages %}{% if page.title != null and page.date != null and page.folder == "analitica" %}    <tr data-cat="Analítica" data-date="{{ page.date }}" data-modified="{{ page.date_modified }}"><td class="pl-col-cat"><span class="pl-badge-cat">Analítica</span></td><td class="pl-col-title"><a href="{{ page.url }}">{{ page.title }}</a></td><td class="pl-col-date">{{ page.date }}</td></tr>
{% endif %}{% endfor %}
{% for page in site.pages %}{% if page.title != null and page.date != null and page.folder == "ia" %}    <tr data-cat="IA" data-date="{{ page.date }}" data-modified="{{ page.date_modified }}"><td class="pl-col-cat"><span class="pl-badge-cat">IA</span></td><td class="pl-col-title"><a href="{{ page.url }}">{{ page.title }}</a></td><td class="pl-col-date">{{ page.date }}</td></tr>
{% endif %}{% endfor %}
{% for page in site.pages %}{% if page.title != null and page.date != null and page.folder == "geo" %}    <tr data-cat="GEO" data-date="{{ page.date }}" data-modified="{{ page.date_modified }}"><td class="pl-col-cat"><span class="pl-badge-cat">GEO</span></td><td class="pl-col-title"><a href="{{ page.url }}">{{ page.title }}</a></td><td class="pl-col-date">{{ page.date }}</td></tr>
{% endif %}{% endfor %}
{% for page in site.pages %}{% if page.title != null and page.date != null and page.folder == "programacion" %}    <tr data-cat="Programación" data-date="{{ page.date }}" data-modified="{{ page.date_modified }}"><td class="pl-col-cat"><span class="pl-badge-cat">Programación</span></td><td class="pl-col-title"><a href="{{ page.url }}">{{ page.title }}</a></td><td class="pl-col-date">{{ page.date }}</td></tr>
{% endif %}{% endfor %}
{% for page in site.pages %}{% if page.title != null and page.date != null and page.folder == "marketing" %}    <tr data-cat="Marketing" data-date="{{ page.date }}" data-modified="{{ page.date_modified }}"><td class="pl-col-cat"><span class="pl-badge-cat">Marketing</span></td><td class="pl-col-title"><a href="{{ page.url }}">{{ page.title }}</a></td><td class="pl-col-date">{{ page.date }}</td></tr>
{% endif %}{% endfor %}
{% for page in site.pages %}{% if page.title != null and page.date != null and page.folder == "estrategicos" %}    <tr data-cat="Estratégicos" data-date="{{ page.date }}" data-modified="{{ page.date_modified }}"><td class="pl-col-cat"><span class="pl-badge-cat">Estratégicos</span></td><td class="pl-col-title"><a href="{{ page.url }}">{{ page.title }}</a></td><td class="pl-col-date">{{ page.date }}</td></tr>
{% endif %}{% endfor %}
{% for page in site.pages %}{% if page.title != null and page.date != null and page.folder == "offtopic" %}    <tr data-cat="Offtopic" data-date="{{ page.date }}" data-modified="{{ page.date_modified }}"><td class="pl-col-cat"><span class="pl-badge-cat">Offtopic</span></td><td class="pl-col-title"><a href="{{ page.url }}">{{ page.title }}</a></td><td class="pl-col-date">{{ page.date }}</td></tr>
{% endif %}{% endfor %}
  </tbody>
</table>
</div>

<p id="pl-no-results" class="pl-no-results" style="display:none;">No se han encontrado publicaciones con ese criterio de búsqueda.</p>

<style>
.pub-categorias { margin: 18px 0 28px; }
.pub-categorias__label { display: block; margin-bottom: 10px; font-family: Roboto, sans-serif; font-size: 14px; color: #555; }
.pub-categorias__lista { list-style: none; margin: 0; padding: 0; display: flex; flex-wrap: wrap; gap: 8px; }
.pub-categorias__lista li { margin: 0; }
.pub-categorias__lista a { display: inline-block; padding: 8px 16px; border-radius: 999px; background: #f0f0f0; border: 1px solid #e0e0e0; color: #333; text-decoration: none; font-family: Roboto, sans-serif; font-size: 14px; font-weight: 600; transition: background-color .2s ease, color .2s ease, border-color .2s ease; }
.pub-categorias__lista a:hover { background: #333; border-color: #333; color: #fff; text-decoration: none; }

.pl-search-wrap { position: sticky; top: 0; background: #fff; padding: 14px 0 10px; z-index: 5; border-bottom: 1px solid #eee; margin-bottom: 4px; }
.pl-search-input { width: 100%; box-sizing: border-box; padding: 12px 16px; font-size: 16px; border: 1px solid #ccc; border-radius: 6px; font-family: Roboto, sans-serif; }
.pl-search-input:focus { outline: none; border-color: #36a749; box-shadow: 0 0 0 3px rgba(54,167,73,.15); }
.pl-count { font-size: 13px; color: #888; margin-top: 8px; font-family: Roboto, sans-serif; }

.pl-table-wrap { margin-top: 8px; }
.pl-table { width: 100%; border-collapse: collapse; font-family: Roboto, sans-serif; font-size: 15px; }
.pl-table thead th { text-align: left; font-size: 12px; text-transform: uppercase; letter-spacing: .05em; background: #f2f2f2; color: #333; padding: 10px; border-bottom: 2px solid #ccc; border-top: 1px solid #ccc; }
.pl-table tbody td { padding: 10px; border-bottom: 1px solid #eee; vertical-align: top; }
.pl-table tbody tr:hover { background: #fafafa; }
.pl-col-date { white-space: nowrap; color: #777; font-size: 13px; text-align: right; width: 140px; }
.pl-col-cat { width: 110px; }
.pl-col-title a { color: #333; text-decoration: none; font-weight: 400; }
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

  // Reordena las filas ya renderizadas por fecha descendente (última publicación o modificación primero)
  var ordered = items.slice().sort(function (a, b) { return b.latestDate - a.latestDate; });
  ordered.forEach(function (it) {
    it.tr.querySelector('.pl-col-date').textContent = formatDate(it.latestDate) + (it.updated ? ' (act.)' : '');
    tbody.appendChild(it.tr);
  });

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

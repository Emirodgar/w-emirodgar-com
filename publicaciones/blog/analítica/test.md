---
toc: 1
permalink: test

---

# 10 trucos para comenzar con Google Analytics

dfdfd fsd otra cosa!! probando otra vez más

## Test  123456789

MIO - TAGS: {{ page.tags }}


<ul>
{% for page in site.pages %}
{% if page.title != null  %}
	{% if page.folder== "auditoria" %}
	  <li><a href="{{ page.url }}">{{ page.title }}</a></li>
	{% endif %}
{% endif %}
{% endfor %}
</ul>

{% for page in site.pages %}
    {% if page.sitemap == 1 %}
    <url>
      <loc>{{ site.url }}{{ page.url | remove: "index.html" }}</loc>
      {% if page.sitemap.lastmod %}
        <lastmod>{{ page.sitemap.lastmod | date: "%Y-%m-%d" }}</lastmod>
      {% elsif page.date %}
        <lastmod>{{ page.date | date_to_xmlschema }}</lastmod>
      {% else %}
        <lastmod>{{ site.time | date_to_xmlschema }}</lastmod>
      {% endif %}
      {% if page.sitemap.changefreq %}
        <changefreq>{{ page.sitemap.changefreq }}</changefreq>
      {% else %}
        <changefreq>monthly</changefreq>
      {% endif %}
      {% if page.sitemap.priority %}
        <priority>{{ page.sitemap.priority }}</priority>
      {% else %}
        <priority>0.3</priority>
      {% endif %}
    </url>
	{% endif %}
  {% endfor %}

OTRO

{% for page in site.pages %}
  {% unless page.sitemap.exclude == "yes" or page.name == "feed.xml" or page.name == "redirects.json" or page.url == "inbound-marketing/publicacion" or page.url == "inbound-marketing/general" or page.url == "inbound-marketing/twitter" or page.url == "assets/css/style.css"  %}
    <url>
      <loc>{{page.url}}</loc>     
    </url>
    {% endunless %}
  {% endfor %}
<!--stackedit_data:
eyJoaXN0b3J5IjpbODE0MTIyOTcyLDEyMjk0MTM1NzIsLTIwNj
MxMTE3MjYsNDM5OTc0NTMzLDM2NzU1MTk1NywtNjY2ODY5NDA4
LDIwNTU1NTc5NzUsLTEzNTIxMDc3MzcsMTUzNjk1MDE2LC01NT
EzMDYwMDMsLTE2Nzk1ODQyNDEsMjIyMTgzOTUyLDEwODI4MzQ2
NzIsMTQwOTYyNDM4NiwyMTM5ODI1MjAzLDc0NzA1MjQ5MywtMT
czMDk1NjcwNiwtMTc1NDkwNzU4MiwxNzAyNjk4MTE1LDE3MDI2
OTgxMTVdfQ==
-->
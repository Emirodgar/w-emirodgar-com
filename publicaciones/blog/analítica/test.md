---
toc: 1
tags: test
permalink: test

---

# 10 trucos para comenzar con Google Analytics

dfdfd fsd otra cosa!! probando otra vez más

## Test  12345678

MIO - TAGS: {{ page.tags }}


<ul>
{% for page in site.pages %}
{% if page.title != null  %}
	{% if page.url != "/404.html" %}
	{% if page.folder== "auditoría" %}
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
eyJoaXN0b3J5IjpbLTg1OTMyNjI1LC0yMDYzMTExNzI2LDQzOT
k3NDUzMywzNjc1NTE5NTcsLTY2Njg2OTQwOCwyMDU1NTU3OTc1
LC0xMzUyMTA3NzM3LDE1MzY5NTAxNiwtNTUxMzA2MDAzLC0xNj
c5NTg0MjQxLDIyMjE4Mzk1MiwxMDgyODM0NjcyLDE0MDk2MjQz
ODYsMjEzOTgyNTIwMyw3NDcwNTI0OTMsLTE3MzA5NTY3MDYsLT
E3NTQ5MDc1ODIsMTcwMjY5ODExNSwxNzAyNjk4MTE1LDg0MjQx
NTczMF19
-->
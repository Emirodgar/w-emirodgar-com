---
toc: 1
permalink: test

---

# 10 trucos para comenzar con Google Analytics

dfdfd fsd otra cosa!! probando otra vez más

## Test  12345

MIO

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
eyJoaXN0b3J5IjpbMzY3NTUxOTU3LC02NjY4Njk0MDgsMjA1NT
U1Nzk3NSwtMTM1MjEwNzczNywxNTM2OTUwMTYsLTU1MTMwNjAw
MywtMTY3OTU4NDI0MSwyMjIxODM5NTIsMTA4MjgzNDY3MiwxND
A5NjI0Mzg2LDIxMzk4MjUyMDMsNzQ3MDUyNDkzLC0xNzMwOTU2
NzA2LC0xNzU0OTA3NTgyLDE3MDI2OTgxMTUsMTcwMjY5ODExNS
w4NDI0MTU3MzAsLTE0NDQyNTExNTMsLTI3MjUyNjc1OSw3NTM0
MDYwMTZdfQ==
-->
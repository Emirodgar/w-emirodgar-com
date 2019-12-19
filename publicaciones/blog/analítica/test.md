---
toc: 1
sitemap: 1
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
eyJoaXN0b3J5IjpbLTE0MTY0MjAzODcsMzY3NTUxOTU3LC02Nj
Y4Njk0MDgsMjA1NTU1Nzk3NSwtMTM1MjEwNzczNywxNTM2OTUw
MTYsLTU1MTMwNjAwMywtMTY3OTU4NDI0MSwyMjIxODM5NTIsMT
A4MjgzNDY3MiwxNDA5NjI0Mzg2LDIxMzk4MjUyMDMsNzQ3MDUy
NDkzLC0xNzMwOTU2NzA2LC0xNzU0OTA3NTgyLDE3MDI2OTgxMT
UsMTcwMjY5ODExNSw4NDI0MTU3MzAsLTE0NDQyNTExNTMsLTI3
MjUyNjc1OV19
-->
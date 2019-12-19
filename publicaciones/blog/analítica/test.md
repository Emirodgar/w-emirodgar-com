---
toc: 1
permalink: test

---

# 10 trucos para comenzar con Google Analytics

dfdfd fsd otra cosa!! probando otra vez más

## Test  12

{% for page in site.pages %}
  {% unless page.sitemap.exclude == "yes" or page.name == "feed.xml" or page.name == "redirects.json" or page.url == "inbound-marketing/publicacion" or page.url == "inbound-marketing/general" or page.url == "inbound-marketing/twitter" or page.url == "assets/css/style.css"  %}
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
    {% endunless %}
  {% endfor %}
<!--stackedit_data:
eyJoaXN0b3J5IjpbMTczNTA2Mjc2NiwxNTM2OTUwMTYsLTU1MT
MwNjAwMywtMTY3OTU4NDI0MSwyMjIxODM5NTIsMTA4MjgzNDY3
MiwxNDA5NjI0Mzg2LDIxMzk4MjUyMDMsNzQ3MDUyNDkzLC0xNz
MwOTU2NzA2LC0xNzU0OTA3NTgyLDE3MDI2OTgxMTUsMTcwMjY5
ODExNSw4NDI0MTU3MzAsLTE0NDQyNTExNTMsLTI3MjUyNjc1OS
w3NTM0MDYwMTYsLTEwMjQ4MDM2NDYsLTczOTk5MzQyNywtMjAy
MDcxNTg2OV19
-->
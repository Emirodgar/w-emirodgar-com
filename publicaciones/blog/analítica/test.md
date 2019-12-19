---
toc: 1
permalink: test

---

# 10 trucos para comenzar con Google Analytics

dfdfd fsd otra cosa!! probando otra vez más

## Test  1

{% for page in site.pages %}
   {% unless page.sitemap.exclude == "yes" or page.name == "feed.xml" or page.name == "redirects.json" or page.name == "inbound-marketing/publicacion" or page.name == "inbound-marketing/general" or page.name == "inbound-marketing/twitter" or page.name == "assets/css/style.css"  %}
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
eyJoaXN0b3J5IjpbLTExNTc3MjM4NTYsLTU1MTMwNjAwMywtMT
Y3OTU4NDI0MSwyMjIxODM5NTIsMTA4MjgzNDY3MiwxNDA5NjI0
Mzg2LDIxMzk4MjUyMDMsNzQ3MDUyNDkzLC0xNzMwOTU2NzA2LC
0xNzU0OTA3NTgyLDE3MDI2OTgxMTUsMTcwMjY5ODExNSw4NDI0
MTU3MzAsLTE0NDQyNTExNTMsLTI3MjUyNjc1OSw3NTM0MDYwMT
YsLTEwMjQ4MDM2NDYsLTczOTk5MzQyNywtMjAyMDcxNTg2OV19

-->
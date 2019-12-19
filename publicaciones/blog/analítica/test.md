---
toc: 1
permalink: test

---

# 10 trucos para comenzar con Google Analytics

dfdfd fsd otra cosa!! probando otra vez más

## Test  1

{% for page in site.pages %}
    {% unless page.sitemap.exclude == "yes" or page.name == "feed.xml" or page.name == "redirects.json"  %}
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
eyJoaXN0b3J5IjpbLTU1MTMwNjAwMywtMTY3OTU4NDI0MSwyMj
IxODM5NTIsMTA4MjgzNDY3MiwxNDA5NjI0Mzg2LDIxMzk4MjUy
MDMsNzQ3MDUyNDkzLC0xNzMwOTU2NzA2LC0xNzU0OTA3NTgyLD
E3MDI2OTgxMTUsMTcwMjY5ODExNSw4NDI0MTU3MzAsLTE0NDQy
NTExNTMsLTI3MjUyNjc1OSw3NTM0MDYwMTYsLTEwMjQ4MDM2ND
YsLTczOTk5MzQyNywtMjAyMDcxNTg2OV19
-->
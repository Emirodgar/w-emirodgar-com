---
toc: 1
permalink: test

---

# 10 trucos para comenzar con Google Analytics

dfdfd fsd otra cosa!! probando otra vez más

## Test 




{% for page in site.pages %}
    {% unless page.sitemap.exclude == "yes" or page.name == "feed.xml" %}
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
eyJoaXN0b3J5IjpbMjIyMTgzOTUyLDEwODI4MzQ2NzIsMTQwOT
YyNDM4NiwyMTM5ODI1MjAzLDc0NzA1MjQ5MywtMTczMDk1Njcw
NiwtMTc1NDkwNzU4MiwxNzAyNjk4MTE1LDE3MDI2OTgxMTUsOD
QyNDE1NzMwLC0xNDQ0MjUxMTUzLC0yNzI1MjY3NTksNzUzNDA2
MDE2LC0xMDI0ODAzNjQ2LC03Mzk5OTM0MjcsLTIwMjA3MTU4Nj
ldfQ==
-->
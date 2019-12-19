---
toc: 1
permalink: test

---

# 10 trucos para comenzar con Google Analytics

dfdfd fsd otra cosa!! probando otra vez más

## Test 



<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
	<channel>
		<title>{{ site.name | xml_escape }}</title>
		<description>{% if site.description %}{{ site.description | xml_escape }}{% endif %}</description>		
		<link>{{ site.url }}</link>
		<atom:link href="{{ site.url }}/feed.xml" rel="self" type="application/rss+xml" />
		{% for page in site.pages %}
			<item>
				<title>{{ page.title | xml_escape }}</title>
				<description>{{ page.content | xml_escape }}</description>
				<pubDate>{{ page.date | date: "%a, %d %b %Y %H:%M:%S %z" }}</pubDate>
				<link>{{ site.url }}{{ page.url }}</link>
				<guid isPermaLink="true">{{ site.url }}{{ page.url }}</guid>
			</item>
		{% endfor %}
	</channel>
</rss>


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
eyJoaXN0b3J5IjpbLTE4OTk0NzQ5OTAsMjIyMTgzOTUyLDEwOD
I4MzQ2NzIsMTQwOTYyNDM4NiwyMTM5ODI1MjAzLDc0NzA1MjQ5
MywtMTczMDk1NjcwNiwtMTc1NDkwNzU4MiwxNzAyNjk4MTE1LD
E3MDI2OTgxMTUsODQyNDE1NzMwLC0xNDQ0MjUxMTUzLC0yNzI1
MjY3NTksNzUzNDA2MDE2LC0xMDI0ODAzNjQ2LC03Mzk5OTM0Mj
csLTIwMjA3MTU4NjldfQ==
-->
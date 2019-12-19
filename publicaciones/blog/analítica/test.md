---
toc: 1
permalink: test

---

# 10 trucos para comenzar con Google Analytics

dfdfd fsd otra cosa!! probando otra vez más

## 1 - Define un objetivo global


{% for post in site.posts limit:10 %}
			<item>
				<title>{{ post.title | xml_escape }}</title>
				<description>{{ post.content | xml_escape }}</description>
				<pubDate>{{ post.date | date: "%a, %d %b %Y %H:%M:%S %z" }}</pubDate>
				<link>{{ site.url }}{{ post.url }}</link>
				<guid isPermaLink="true">{{ site.url }}{{ post.url }}</guid>
			</item>
		{% endfor %}
<!--stackedit_data:
eyJoaXN0b3J5IjpbMTQwOTYyNDM4NiwyMTM5ODI1MjAzLDc0Nz
A1MjQ5MywtMTczMDk1NjcwNiwtMTc1NDkwNzU4MiwxNzAyNjk4
MTE1LDE3MDI2OTgxMTUsODQyNDE1NzMwLC0xNDQ0MjUxMTUzLC
0yNzI1MjY3NTksNzUzNDA2MDE2LC0xMDI0ODAzNjQ2LC03Mzk5
OTM0MjcsLTIwMjA3MTU4NjldfQ==
-->
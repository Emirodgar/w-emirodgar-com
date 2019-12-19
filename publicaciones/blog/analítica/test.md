---
toc: 1
permalink: test

---

# 10 trucos para comenzar con Google Analytics

dfdfd fsd otra cosa!! probando otra vez más

## 1 - Define un objetivo global

```html
<channel>
    <title>{{ site.name | xml_escape }}</title>
    <description>{{ site.description | xml_escape }}</description>
    <link>{{ site.url }}</link>
    <atom:link href="{{ site.url }}/feed.xml" rel="self" type="application/rss+xml" />
    {% for post in site.posts limit:10 %}
      <item>
        <title>{{ post.title | xml_escape }}</title>
        <description>{{ post.content | xml_escape }}</description>
        <pubDate>{{ post.date | date: "%a, %d %b %Y %H:%M:%S %z" }}</pubDate>
        <link>{{ site.url }}/{{ post.url }}</link>
        <guid isPermaLink="true">{{ site.url }}/{{ post.url }}</guid>
      </item>
    {% endfor %}
  </channel>
```
<!--stackedit_data:
eyJoaXN0b3J5IjpbMTk3NzQ0ODI4MCwxNDA5NjI0Mzg2LDIxMz
k4MjUyMDMsNzQ3MDUyNDkzLC0xNzMwOTU2NzA2LC0xNzU0OTA3
NTgyLDE3MDI2OTgxMTUsMTcwMjY5ODExNSw4NDI0MTU3MzAsLT
E0NDQyNTExNTMsLTI3MjUyNjc1OSw3NTM0MDYwMTYsLTEwMjQ4
MDM2NDYsLTczOTk5MzQyNywtMjAyMDcxNTg2OV19
-->
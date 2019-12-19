---
toc: 1
permalink: test

---

# 10 trucos para comenzar con Google Analytics

dfdfd fsd otra cosa!! probando otra vez más

## Test  12345

{% for page in site.pages %}
  {% unless page.sitemap.exclude == "yes" or page.name == "feed.xml" or page.name == "redirects.json" or page.url == "inbound-marketing/publicacion" or page.url == "inbound-marketing/general" or page.url == "inbound-marketing/twitter" or page.url == "assets/css/style.css"  %}
    <url>
      <loc>{{page.url}}</loc>     
    </url>
    {% endunless %}
  {% endfor %}
<!--stackedit_data:
eyJoaXN0b3J5IjpbLTY2Njg2OTQwOCwyMDU1NTU3OTc1LC0xMz
UyMTA3NzM3LDE1MzY5NTAxNiwtNTUxMzA2MDAzLC0xNjc5NTg0
MjQxLDIyMjE4Mzk1MiwxMDgyODM0NjcyLDE0MDk2MjQzODYsMj
EzOTgyNTIwMyw3NDcwNTI0OTMsLTE3MzA5NTY3MDYsLTE3NTQ5
MDc1ODIsMTcwMjY5ODExNSwxNzAyNjk4MTE1LDg0MjQxNTczMC
wtMTQ0NDI1MTE1MywtMjcyNTI2NzU5LDc1MzQwNjAxNiwtMTAy
NDgwMzY0Nl19
-->
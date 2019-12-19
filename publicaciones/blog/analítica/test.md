---
toc: 1
permalink: test

---

# 10 trucos para comenzar con Google Analytics

dfdfd fsd otra cosa!! probando otra vez más

## Test  1234

{% for page in site.pages %}
  {% unless page.sitemap.exclude == "yes" or page.name == "feed.xml" or page.name == "redirects.json" or page.url == "inbound-marketing/publicacion" or page.url == "inbound-marketing/general" or page.url == "inbound-marketing/twitter" or page.url == "assets/css/style.css"  %}
    <url>
      <loc>{page.url}</loc>     
    </url>
    {% endunless %}
  {% endfor %}
<!--stackedit_data:
eyJoaXN0b3J5IjpbMjA1NTU1Nzk3NSwtMTM1MjEwNzczNywxNT
M2OTUwMTYsLTU1MTMwNjAwMywtMTY3OTU4NDI0MSwyMjIxODM5
NTIsMTA4MjgzNDY3MiwxNDA5NjI0Mzg2LDIxMzk4MjUyMDMsNz
Q3MDUyNDkzLC0xNzMwOTU2NzA2LC0xNzU0OTA3NTgyLDE3MDI2
OTgxMTUsMTcwMjY5ODExNSw4NDI0MTU3MzAsLTE0NDQyNTExNT
MsLTI3MjUyNjc1OSw3NTM0MDYwMTYsLTEwMjQ4MDM2NDYsLTcz
OTk5MzQyN119
-->
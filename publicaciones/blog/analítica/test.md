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
      <loc>{{page.url}}</loc>     
    </url>
    {% endunless %}
  {% endfor %}
<!--stackedit_data:
eyJoaXN0b3J5IjpbLTEzNTI0ODU2MDcsMjA1NTU1Nzk3NSwtMT
M1MjEwNzczNywxNTM2OTUwMTYsLTU1MTMwNjAwMywtMTY3OTU4
NDI0MSwyMjIxODM5NTIsMTA4MjgzNDY3MiwxNDA5NjI0Mzg2LD
IxMzk4MjUyMDMsNzQ3MDUyNDkzLC0xNzMwOTU2NzA2LC0xNzU0
OTA3NTgyLDE3MDI2OTgxMTUsMTcwMjY5ODExNSw4NDI0MTU3Mz
AsLTE0NDQyNTExNTMsLTI3MjUyNjc1OSw3NTM0MDYwMTYsLTEw
MjQ4MDM2NDZdfQ==
-->
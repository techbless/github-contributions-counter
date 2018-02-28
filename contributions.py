from bs4 import BeautifulSoup
from urllib.request import urlopen


url = 'https://github.com/Yunbin-Chang'

html = urlopen(url)
soup = BeautifulSoup(html, 'html.parser')

rects = soup.find_all("rect")


json = "["
for rect in rects:
  json += "\n    {\n" + '        "date" : "' + rect.get('data-date') + '"' + " ,\n" + '        "count" : "' + rect.get('data-count') + '"' + "\n    },"

json = json[:-1]
json += "\n]"
print(json)
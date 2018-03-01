from bs4 import BeautifulSoup
from urllib.request import urlopen
from flask import Flask

app = Flask(__name__)

@app.route("/contribution/<uname>")
def contribution(uname):
  url = 'https://github.com/' + uname

  html = urlopen(url)
  soup = BeautifulSoup(html, 'html.parser')

  rects = soup.find_all("rect")


  json = "["
  for rect in rects:
    json += '\n    {\n        "date" : "' + rect.get('data-date') + '" ,\n        "count" : "' + rect.get('data-count') + '"\n    },'
    
  json = json[:-1]
  json += "\n]"
  return json

if __name__ == "__main__":
  app.run(host="0.0.0.0")
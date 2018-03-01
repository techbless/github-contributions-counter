from bs4 import BeautifulSoup
from urllib.request import urlopen
from flask import Flask
import datetime

app = Flask(__name__)

@app.route("/contributions/<uname>")
def contributions(uname):
  
  return getContributionsJSON(uname)

@app.route("/contributions/weekly/<uname>")
def contributionsWeekly(uname):
  rects = getContributionsElement(uname)
  sun = 0
  mon = 0 
  tue = 0
  wed = 0
  thu = 0
  fri = 0
  sat = 0

  for rect in rects:
    dt = rect.get('data-date')
    count = int(rect.get('data-count'))
    year, month, day = (int(x) for x in dt.split('-'))
    ans = datetime.date(year, month, day)
    dayOfWeek = ans.strftime("%A")

    if dayOfWeek == "Sunday":
      sun += count
    elif dayOfWeek == "Monday":
      mon += count
    elif dayOfWeek == "Tuesday":
      tue += count
    elif dayOfWeek == "Wednesday":
      wed += count
    elif dayOfWeek == "Thursday":
      thu += count
    elif dayOfWeek == "Friday":
      fri += count
    elif dayOfWeek == "Saturday":
      sat += count
    
  json = "{ "\
            "\"Sunday\" : \"%s\", "\
            "\"Monday\" : \"%s\", "\
            "\"Tuesday\" : \"%s\", "\
            "\"Wednesday\" : \"%s\", "\
            "\"Thursday\" : \"%s\", "\
            "\"Friday\" : \"%s\", "\
            "\"Saturday\" : \"%s\""\
          " }" % (str(sun), str(mon), str(tue), str(wed), str(thu), str(fri), str(sat))


  return json


def getContributionsJSON(uname):
  rects = getContributionsElement(uname)

  json = "["
  for rect in rects:
    if rect.get('data-count') != "0":
      json += "\n    {\n        \"date\" : \"%s\",\n        \"count\" : \"%s\"\n    }," % (rect.get('data-date'), rect.get('data-count'))
    
  json = json[:-1]
  json += "\n]"
  return json

def getContributionsElement(uname):
  url = 'https://github.com/' + uname

  html = urlopen(url)
  soup = BeautifulSoup(html, 'html.parser')

  rects = soup.find_all("rect")
  return rects

if __name__ == "__main__":
  app.debug = False
  app.run(host="0.0.0.0")

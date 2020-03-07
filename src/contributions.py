from bs4 import BeautifulSoup
import requests
import datetime
import json
import time


# From Chris Yunbin Chang as developer of this API, saying that This API never guarantee any errorneous, 
# mis-working, damaging server, anything which can ouccur while using this API.

# If you want to know how this API works or how to use this API, visit my Github.(https://github.com/Yunbin-Chang/Github-Contributions-API)
# DON'T FORGET TO PRESS STAR BUTTON. THANK YOU 3

# MIT License
# Copyright (c) 2018 Chris Yunbin Chang

class Contribution():
  monthDict = {
    1: "January",
    2: "Febuary",
    3: "March",
    4: "April",
    5: "May",
    6: "June",
    7: "July",
    8: "August",
    9: "September",
    10: "October",
    11: "November",
    12: "December"
  }

  weekTable = {
    0: "Sunday",
    1: "Monday",
    2: "Tuesday",
    3: "Wednesday",
    4: "Thursday",
    5: "Friday",
    6: "Saturday"
  }

  def getContributionsDaily(self, uname):  
    res_list = []
    rects = self.getContributionsElement(uname)

    if rects == "404":
      return "USER NOT FOUND"
    
    for rect in rects:
      if rect.get('data-count') != "0":
        dic = {
          rect.get('data-date'): rect.get('data-count')
        }
        res_list.append(dic)

    return json.dumps(res_list)

  def getContributionsWeekly(self, uname):
    rects = self.getContributionsElement(uname)

    if rects == "404":
      return "USER NOT FOUND"

    week = [0, 0, 0, 0, 0, 0, 0]

    for rect in rects:
      dt = rect.get('data-date')
      count = int(rect.get('data-count'))
      year, month, day = (int(x) for x in dt.split('-'))
      ans = datetime.date(year, month, day)
      dayOfWeek = ans.strftime("%A")

      if dayOfWeek == "Sunday":
        week[0] += count
      elif dayOfWeek == "Monday":
        week[1] += count
      elif dayOfWeek == "Tuesday":
        week[2] += count
      elif dayOfWeek == "Wednesday":
        week[3] += count
      elif dayOfWeek == "Thursday":
        week[4] += count
      elif dayOfWeek == "Friday":
        week[5] += count
      elif dayOfWeek == "Saturday":
        week[6] += count
        
    res = []
    d = 0
    for day_count in week:
      dic = {
        self.weekTable[d]: day_count
      }
      res.append(dic)
      d += 1
    
    return json.dumps(res)

  def getContributionsMonthly(self, uname):
    rects = self.getContributionsElement(uname)

    if rects == "404":
      return "USER NOT FOUND"

    monthOf = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]

    for rect in rects:
      dt = rect.get('data-date')
      count = int(rect.get('data-count'))
      month = int(dt.split('-')[1])

      for n in range(1, 13):
        if month == n:
          monthOf[n] += count

    monthDict = {
      1: "January",
      2: "Febuary",
      3: "March",
      4: "April",
      5: "May",
      6: "June",
      7: "July",
      8: "August",
      9: "September",
      10: "October",
      11: "November",
      12: "December"
    }

    res = []
    m = 0
    for month in monthOf:
      if m != 0:
        dic = {
          monthDict[m]: str(month)
        }
        res.append(dic)
      m += 1

    return json.dumps(res)

  def getContributionsRatio(self, uname):
    try:
      url = 'https://github.com/' + uname
      html = requests.get(url).text
      soup = BeautifulSoup(html, 'lxml')

      ov_graph = soup.find("div", {'class': 'js-activity-overview-graph-container'})
      return ov_graph.get('data-percentages').replace(' ', '_').lower()  # already json
    except:
      return "NOT PUBLIC DATA"

  # **Notice** [This function is real slow, must be improved]
  def getContributionsElement(self, uname):
    url = 'https://github.com/' + uname

    #html = urlopen(url)
    html = requests.get(url).text
    
    soup = BeautifulSoup(html, 'lxml')
    rects = soup.find_all("rect")
    if rects:
      return rects
    else:
      return "404"
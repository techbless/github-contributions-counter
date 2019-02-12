# Github-Contributions-API

## Status

[![Travis](https://img.shields.io/jenkins/s/https/jenkins.qa.ubuntu.com/view/Precise/view/All%20Precise/job/precise-desktop-amd64_default.svg)]() [![apm](https://img.shields.io/apm/l/vim-mode.svg)]()


## What you need before starting

  * BeautifulSoup4
  * Python3
  * Virtual Environment(recommended)
  * library[requests, json, lxml]
  
  
## How to run

  1. clone the repository into your API server.
  2. make a python vertual environment.
  3. get into the vertualenv
  4. import contributions.py in the code in which you will use API.
  5. use the function such as "getContributionsDaily("Yunbin-Chang")"
  
  * The availiable function list is below.
  

	
## How to Import API
  * Use Below Code
   ```python
    import contributions as ct
   ```
   
## How to Call Function
  * Use Below Code
   ```python
    print(ct.getContributionsDaily("USER NAME HERE"))
   ```
   
## Function for API

  #### `getContributionsDaily("USER NAME HERE")`

  * this provides a json data contains how many contributed in a day with a contributed date.
      ignoring a no contributed date.
  * JSON Example
  
   ```json
    [
      {
          "date" : "2017-02-27",
          "count" : "2"
      },
      {
          "date" : "2017-02-28",
          "count" : "10"
      }
    ]
   ```
   above json data ignored many contributing-date beacause the json is too big to write here.  
   check out -> [Yunbin-Chang-Daily.JSON](https://github.com/Yunbin-Chang/Github-Contributions-API/blob/master/sample-json/Yunbin-Chang-Daily.JSON)
     
  #### `getContributionsWeekly("USER NAME HERE")`
  
  * this provides a json data contains how many contributed during last year and is counted by day of week
  * JSON Example
    
  ```json
  { "Sunday" : "50", "Monday" : "25", "Tuesday" : "57", "Wednesday" : "33", "Thursday" : "14", "Friday" : "15", "Saturday" : "18" }
  ```
  If you want to find out more, check out -> [Yunbin-Chang-Weekly.JSON](https://github.com/Yunbin-Chang/Github-Contributions-API/blob/master/sample-json/Yunbin-Chang-Weekly.JSON)
    
  
  #### `getContributionsMonthly("Yunbin-Chang")`

  * this provides a json data contains how many contributed during last year and is counted by month of year
  * JSON Example
  
  ```json
  { "January" : "58", "Febuary" : "102", "March" : "16", "April" : "0", "May" : "0", "June" : "0", "July" : "2","August" : "6","September" : "0","October" : "8","November" : "17","December" : "10" }
  ```
    
 If you want to find out more, check out -> [Yunbin-Chang-Monthly.JSON](https://github.com/Yunbin-Chang/Github-Contributions-API/blob/master/sample-json/Yunbin-Chang-Monthly.JSON)
 
 

## Range of Data

	about last 1 year from now when you make a request for data.
  
  
## How does it works

  This API parse a contributions data from https://github.com/(some-user-name)

  Especially from below parts of the page.

![img/contribution-rect](https://github.com/Yunbin-Chang/Github-Contributions-API/blob/master/img/contribution-rects.PNG)

  each code for above color-filled rectangles is formatted as

  ```html
    <rect class="day" width="10" height="10" x="?" y="?" fill="#ebedf0" data-count="<counting>" data-date="yyyy-mm-dd"/>
  ```

  so the API parses from these parts and arrange and decorate with json and respond to request.


## Contributions

  We welcome contributions, but some Rules:
  
   * please keep the master branch working.
   * Generally, We prefer for you to add new features or fix bugs rather than refactoring, or deleting)

## How to Keep in Touch

	hw@yunbin.kr
	
## Should Notice This

	From Chris Yunbin Chang as developer of this API, saying that This API never guarantee any errorneous, mis-working, damaging server, anything which can ouccur while using this API.

## License

	MIT License

	Copyright (c) 2018 Chris Yunbin Chang

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all
	copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	SOFTWARE.

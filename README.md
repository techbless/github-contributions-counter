# Github-Contributions-API

## Status

[![Travis](https://img.shields.io/jenkins/s/https/jenkins.qa.ubuntu.com/view/Precise/view/All%20Precise/job/precise-desktop-amd64_default.svg)]() [![apm](https://img.shields.io/apm/l/vim-mode.svg)]()


## What you need before starting(_out-dated_)

  * BeautifulSoup4
  * Python3  
  * library[requests, json, lxml]   
  * Virtual Environment(recommended)

	
## How to Import API
  * Use Below Code
   ```python
    import contributions as ct
   ```
   
## How to invoke Method
  * Use Below Code
   ```python
    print(ct.getContributionsDaily("USER NAME HERE"))
   ```
   
## Methods

  #### `getContributionsDaily("USER NAME HERE")`
  * This provides a json containing the number of times a given user contributed to github in a day during the year, ignoring a not contributed date.
  * JSON Example
  
   ```json
   {
     "2019-03-03":"2",
     "2019-03-11":"2",
     "2019-09-08":"1",
     ...
   }

   ```
   check out -> [techbless.daily.json](https://github.com/Yunbin-Chang/Github-Contributions-API/blob/master/sample-json/techbless.daily.json)
     
  #### `getContributionsWeekly("USER NAME HERE")`
  * This provides a json containing the number of times a given user contributed to github during the year, counted by day of week
  * JSON Example
    
  ```json
  {
    "Sunday":95,
    "Monday":129,
    "Tuesday":89,
    "Wednesday":187,
    "Thursday":126,
    "Friday":117,
    "Saturday":87
  }
  ```
  If you want to find out more, check out -> [techbless.weekly.json](https://github.com/Yunbin-Chang/Github-Contributions-API/blob/master/sample-json/techbless.weekly.json)
    
  
  #### `getContributionsMonthly("Yunbin-Chang")`

  * This provides a json containing the number of times a given user contributed to github in a month during the year.
  * JSON Example
  
  ```json
  {
    "January":"371",
    "Febuary":"130",
    "March":"56",
    "April":"0",
    "May":"0",
    "June":"0",
    "July":"0",
    "August":"0",
    "September":"101",
    "October":"22",
    "November":"57",
    "December":"93"
  }
  ```
    
 If you want to find out more, check out -> [techbless.monthly.json](https://github.com/Yunbin-Chang/Github-Contributions-API/blob/master/sample-json/techbless.monthly.json)
 
 
  #### `getContributionsRatio("Yunbin-Chang")`

  * This provides a json containing the ratio of contribution types   
  * `types`: commits, pull_requests, issues, code_reviews
  * JSON Example
  
  ```json
  {
    "commits":97,
    "pull_requests":2,
    "issues":1,
    "code_review":0
  }
  ```
    
 If you want to find out more, check out -> [techbless.ratio.json](https://github.com/Yunbin-Chang/Github-Contributions-API/blob/master/sample-json/techbless.ratio.json)
 
 

## Range of Data

	about last 1 year from now when you make a request for data.
  
  
## How does it works

  This Library parses a contributions data from https://github.com/(some-user-name)

  Especially from below parts of the page.

![img/contribution-rect](https://github.com/Yunbin-Chang/Github-Contributions-API/blob/master/img/contribution-rects.PNG)

  Each code for above color-filled rectangles is formatted as

  ```html
    <rect class="day" width="10" height="10" x="?" y="?" fill="#ebedf0" data-count="<counting>" data-date="yyyy-mm-dd"/>
  ```

  so The library parses from these parts and arrange and decorate with json and respond to request.


## Contributions

  We welcome contributions, but some Rules:
  
   * please keep the master branch working.

## How to Keep in Touch

	yunbin@hansung.ac.kr
	
## Should Notice This

	From Chris Yunbin Chang as developer of this Library, saying that This Library never guarantee any errorneous, mis-working, damaging server, anything which can ouccur while using this Library.

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

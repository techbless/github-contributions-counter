from contributions import *
####### REQUIRED #######
# Flask, contributions #
########################
from flask import Flask
 
app = Flask(__name__)
 
ct = Contribution()

@app.route('/contribution/day/<username>')
def day(username):
    return str(ct.getContributionsDaily(username))

@app.route('/contribution/week/<username>')
def week(username):
    return str(ct.getContributionsWeekly(username))

@app.route('/contribution/month/<username>')
def month(username):
    return str(ct.getContributionsMonthly(username))

@app.route('/contribution/ratio/<username>')
def ratio(username):
    return str(ct.getContributionsRatio(username))

@app.route('/contribution/update/<username>')
def update(username):
    return str(ct.updateCacheOf(username))

 
if __name__ == '__main__':
    try:
        app.run()
    finally:
        ct.close()
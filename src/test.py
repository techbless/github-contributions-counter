# In the same directory, you can import here like the just below did.

from contributions import *


# This is only for identifying if API is working or Testing Something bizarre.

ct = Contribution()

print(ct.getContributionsDaily("techbless"))
print(ct.getContributionsWeekly("techbless"))
print(ct.getContributionsMonthly("techbless"))
print(ct.getContributionsRatio("techbless"))
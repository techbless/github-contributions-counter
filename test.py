# In the same directory, you can import here like the just below did.

from contributions import *


# This is only for identifying if API is working or Testing Something bizarre.

ct = Contribution()

print(ct.getContributionsDaily("Yunbin-Chang"))
print(ct.getContributionsWeekly("Yunbin-Chang"))
print(ct.getContributionsMonthly("Yunbin-Chang"))
print(ct.getContributionsRatio("Yunbin-Chang"))
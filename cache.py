class CacheStorage():
    
    STORAGE = {
            "day": 0,
            "week": 1,
            "month": 2,
            "ratio": 3
        }

    def __init__(self):
        self.cache = [{}, {}, {}, {}]

        print("Storage mounted!")

    def updateCache(self,where, uname, result):
        for i in range(0, 4):
            if self.STORAGE[where] == i:
                self.cache[i][uname] = result
                
    def createCache(self, where, uname, result):
        self.updateCache(where, uname, result)

    def getCache(self, where, uname):
        return self.cache[self.STORAGE[where]][uname]

    def checkCacheExistence(self, where, uname):
        if uname in self.cache[self.STORAGE[where]]:
            return True
        else:
            return False
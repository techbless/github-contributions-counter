import json
import datetime

class CacheStorage():
    
    STORAGE = {
            "day": 0,
            "week": 1,
            "month": 2,
            "ratio": 3
        }

    
    def __init__(self, *backup_file_name):
        if backup_file_name:
            try:
                with open(backup_file_name[0], mode='rt', encoding='utf-8') as f:
                    backup_json = f.read()
                    self.cache = json.loads(backup_json)
                print("Storage mounted from ", backup_file_name[0])
            except:
                self.mountStorage()
        else:
            self.mountStorage()

    def __del__(self):
        self.backUpCacheStorage()

    def mountStorage(self):
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

    def backUpCacheStorage(self):
        try:
            delete_targets = [':', ' ', '-']
            now = datetime.datetime.now()

            file_name = "storage_backup_%s" % (str(now))
            for target in delete_targets:
                file_name = file_name.replace(target, '')

            file_name = file_name[:-7] + ".json"
            with open(file_name, mode='wt', encoding='utf-8') as f:
                f.write(json.dumps(self.cache))
            print("Your cache storage is safely backuped!")
        except:
            print("Fail to backup your cache storage.")
        
        

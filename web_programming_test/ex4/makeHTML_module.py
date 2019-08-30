#-*- coding: utf-8 -*-
import os

path = os.path.dirname(__file__)
fileName = os.path.basename(__file__)

currentPathList = os.listdir(path)
currentPathList.remove(fileName)

tmpDic = {}

for targetName in currentPathList:
    tmpDic.clear()
    tmpList = os.listdir(path + os.path.sep + targetName)
    for fileName in tmpList:
        with open("{1}{0}{2}{0}{3}".format(os.path.sep, path, targetName, fileName), "r", encoding="utf-8") as reader:
            tmpDic[fileName] = reader.read()
    
    targetKey = targetName + ".html"
    targetHTML = tmpDic.pop(targetKey)

    for key in tmpDic:
        print("<{0}></{0}>".format(str.replace(key, ".html", "")), tmpDic[key])
        targetHTML = str.replace(targetHTML, "<{0}></{0}>".format(str.replace(key, ".html", "")), tmpDic[key])
    print(targetHTML)

    with open(path + os.path.sep + targetKey, "w", encoding="utf-8") as writer:
        writer.write(targetHTML)

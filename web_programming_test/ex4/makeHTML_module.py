import os

path = os.path.dirname(__file__)
fileName = os.path.basename(__file__)

currentPathList = os.listdir(path)
currentPathList.remove(fileName)

for targetName in currentPathList:
    tmpList = os.listdir(path + targetName)
    for fileName in tmpList:
        fileName


print(os.listdir(path + "/main/"))
main_module_str = ""
header_module_str = ""
with open(path + "/main/main_module.html", "r") as main_module_html:
    tmp = main_module_html.readline()
    while(tmp != ""):
        main_module_str += tmp
        tmp = main_module_html.readline()

with open(path + "/main/header_module.html", "r") as header_module_html:
    tmp = header_module_html.readline()
    while(tmp != ""):
        header_module_str += tmp
        tmp = header_module_html.readline()
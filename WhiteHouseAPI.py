import requests
import json

def getWhiteHouseInfo():
    productionkey="v5BaBaO1cbArudfMpSw0FINCWX1xMUuMvSiiD3O9"
    sandboxkey="EpcMTMuhsfgDcLa0GHntdovwZtOiMTv2t75CaHE0"
    Url="https://api.whitehouse.gov/v1/petitions.json?isPublic=1&isSignable=1&limit=20&signatureCountFloor=20000&status=open?api_key=v5BaBaO1cbArudfMpSw0FINCWX1xMUuMvSiiD3O9"
    data=requests.get(Url).text
    string=json.dumps(data)
    convertedtopython=json.loads(data)
    petitions=convertedtopython["results"]
    createresult(petitions)


def makeinteriordict(dictionary,item,title,url):
    resultdict=dict()

    resultdict["issue"]=item
    resultdict["petitions"]=[]


    pass


def createresult(array):
    result=dict()
    for petition in array:
        arrayofissue=givearrayofissues(petition["issues"])
        title=petition["title"]
        url=petition["url"]
        newarray=[title,url]
        for issues in arrayofissue:
            if issues in result:
                result[issues].append(newarray)
            else:
                result[issues]=[]
                result[issues].append(newarray)
    return json.dumps(result, indent=4, sort_keys=True)


def givearrayofissues(array):
    result=[]
    for item in array:
        result.append(item["name"])
    return result

getWhiteHouseInfo()
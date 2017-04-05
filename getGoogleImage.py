import requests
import json

def getGoogleImage(search):
	url="https://www.googleapis.com/customsearch/v1?searchType=image&key=AIzaSyCz-W30xQESTGC1HJXLmQNISgeWmCsQN-c&cx=004539666338750100807:ur38g12kgjc"
	query="&q="+search
	data=requests.get(url).text
	string=json.dumps(data)
	convertedtopython=json.loads(data)
	url=convertedtopython["items"][0]["image"]["contextLink"]
	result="{\n\"issue\": \""+search+",\n\"picture_url\": \""+url+"\"\n}"
	return result


# print(getGoogleImage("hello"))

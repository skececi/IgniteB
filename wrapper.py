import requests
import json
from events import *
from WhiteHouseAPI import *
from getGoogleImage import *

# Returns all issues with image url, petitions, and events for each issue
def getMultipleIssues():
	newDict = dict()
	results = json.loads(getWhiteHouseInfo())

	for x in results:

		issue = x
		imageURL = getURL(x)
		petitionList = results.get(x)
		eventList = json.loads(getEvents(x))
		events = eventList.get(x)

		temp_dict = {"issue:" : issue, "image_url:" : imageURL, "petitions:" : petitionList, "events:" : events}
		newDict[issue] = temp_dict

		# newDict[issue] = [issue, imageURL, petitionList, eventList]

	convertedJSON = json.dumps(newDict, indent=4, sort_keys=True)
	print (convertedJSON)
	return convertedJSON
	
	# entry for each issue = [issue, image_url, petitions, events]


def getImageUrl(issue):
	url="https://www.googleapis.com/customsearch/v1?searchType=image&key=AIzaSyCz-W30xQESTGC1HJXLmQNISgeWmCsQN-c&cx=004539666338750100807:ur38g12kgjc"
	query="&q="+search
	data=requests.get(url).text
	string=json.dumps(data)
	convertedtopython=json.loads(data)
	url=convertedtopython["items"][0]["image"]["contextLink"]
	return url











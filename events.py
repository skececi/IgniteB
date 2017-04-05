import requests
import json
from pprint import pprint
def getEvents(topic):
	myToken = 'W4SFWNBFPCE2AUSO2KJV'
	url = "https://www.eventbriteapi.com/v3/events/search/?token="+myToken+"&q="+topic
	# print(url)
	resp=requests.get(url)
	string = json.loads(resp.content)
	eventList=string["events"]
	newEventList=[]
	for i in range(min(10,len(eventList))):
		newEventList.append({"title": eventList[i]["name"]["text"], "link": eventList[i]["url"]})
		# print (eventList[i]["name"]["text"])
		# print (eventList[i]["url"])
	# pprint(eventList)
	# pprint(string)
	json_response={"issue": topic, "events": newEventList}
	#pprint(json_response)
	return json.dumps(json_response)

	
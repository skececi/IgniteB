$(function() {
    var allTopics = [];

    var scrapeUrl = "https://www.isidewith.com/polls/popular";

    $.ajax({
     url: scrapeUrl,
     dataType: 'text',
     success: function(data) {
          var elements = $("<div>").html(data)[0].getElementsByTagName("ul")[0].getElementsByTagName("li");
          for(var i = 0; i < elements.length; i++) {
               var theText = elements[i].firstChild.nodeValue;
               // Do something here
          }
     }
});








	var eventTopic1 = "Refugee";
	var eventTopic2 = "ISIS";
	var eventTopic3 = "Muslim Ban";
	$("#event1name").text(eventTopic1);

	$("#event2name").text(eventTopic2);

	$("#event3name").text(eventTopic3);

	// $.fn.eventbrite_attendees = function(config) {
 //    var defaults = {
 //      /* your eventbrite app_key is REQUIRED */
 //      app_key: 'TUJSNIT45QSQMCZ4CU',
 //      /* the event id is REQUIRED */
 //      eventTopic: 'Refugee',
 //      /* the css class of the UL container */
 //      container_class: 'attendee_list'
 //    };

 //    var options = $.extend({}, defaults, config);

 //    if (!options.app_key) {
 //      throw new Error('app_key is required');
 //    }
 //    if (!options.eventTopic) {
 //      throw new Error('eventTopicis required');
 //    }

 var myToken = 'W4SFWNBFPCE2AUSO2KJV';

 var eventTopic = 'Refugee';

    //use YQL to get the data cross-domain
    $.ajax({
    	url: "https://www.eventbriteapi.com/v3/events/search/?token="+myToken+"&q="+eventTopic1,
    	type: 'GET',
    	dataType: 'json',
    	success: function(json) {
    		var list = json.events;
    		for(var i=0; i<list.length;i++){
    			var currId = "#event1Rel" + i;
    			var linkId = "#event1Rel" + i + "link";
    			$(currId).text(list[i].name.text);
    			$(linkId).attr('href',list[i].url);
    		}

    	}
    });

    $.ajax({
    	url: "https://www.eventbriteapi.com/v3/events/search/?token="+myToken+"&q="+eventTopic2,
    	type: 'GET',
    	dataType: 'json',
    	success: function(json) {
    		var list = json.events;
    		for(var i=0; i<list.length;i++){
    			var currId = "#event2Rel" + i;
    			var linkId = "#event2Rel" + i + "link";
    			$(currId).text(list[i].name.text);
    			$(linkId).attr('href',list[i].url);
    		}

    	}
    });

    $.ajax({
    	url: "https://www.eventbriteapi.com/v3/events/search/?token="+myToken+"&q="+eventTopic3,
    	type: 'GET',
    	dataType: 'json',
    	success: function(json) {
    		var list = json.events;
    		for(var i=0; i<5;i++){
    			var currId = "#event3Rel" + i;
    			var linkId = "#event3Rel" + i + "link";
    			$(currId).text(list[i].name.text);
    			$(linkId).attr('href',list[i].url);
    		}

    	}
    });

});






var request = require("request");

request({
  uri: "https://api.whitehouse.gov/v1/petitions.json?limit=3&offset=0&createdBefore=1352924535&api_key=3CXkJFx0T3SYoIJST8DVcXqQIw71So83FhUJrUm8&isPublic=1",
  method: "GET",
  timeout: 10000,
  followRedirect: true,
  maxRedirects: 10
}, function(error, response, body) {
  console.log(body);
});
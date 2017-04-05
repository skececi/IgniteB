"use strict";

module.exports = (app) => {
  app.get("/", (_, res) => {
    res.send("Hello");
  });
	// app.get('/', function(req, res){ 
	// 	res.render('main.html');
	// });

	app.get('/page', function(req, res){ 
		res.render('page.html');
	});

	app.get('/about', function(req, res){ 
		res.render('about.html');
	});

	app.get('/test', function(req, res){ 
		res.render('test.html');
	});

};
"use strict";

const express = require("express");
const http = require("http");
const path = require('path');
const bodyParser = require("body-parser");

const { app: appConf } = require("./config");

const app = express();
const server = http.createServer(app);

server.listen(appConf.port);

app.set('views', path.join(__dirname, 'template'));
app.use(express.static(__dirname + '/template'));
app.use(express.static(path.join(__dirname, '/static')));

var engines = require('consolidate');


app.engine('html', engines.mustache);
app.set('view engine', 'html');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

require("./routes")(app);

console.log(`${appConf.name} running at port: ${appConf.port}`);

var firebase = require("firebase");
var config = {
  apiKey: "AIzaSyBFnyWH1RpOPdn_VhZYgnNgw77HhAOsPYc",
  authDomain: "ignite-3028c.firebaseapp.com",
  databaseURL: "https://ignite-3028c.firebaseio.com",
  storageBucket: "ignite-3028c.appspot.com",
};
firebase.initializeApp(config);
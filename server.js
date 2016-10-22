var path = require("path");
var express = require("express");
var logger = require("morgan");
var bodyParser = require("body-parser");

var app = express();  // make express app
var http = require('http').Server(app);

// set up the view engine
app.use(express.static(path.join(__dirname, '/assets/')));
//app.use(express.static(__dirname + '/assets'));
app.set("views", path.resolve(__dirname, "views")); // path to views
app.set("view engine", "ejs"); // specify our view engine

// manage our entries
var entries = [];
app.locals.entries = entries;

// set up the logger
app.use(logger("dev"));
app.use(bodyParser.urlencoded({ extended: false }));

// http GET (default and /new-entry)
app.get("/", function (request, response) {
  response.sendFile(path.join(__dirname + '/assets/index.html'));
});
app.get("/about", function (request, response) {
  response.sendFile(path.join(__dirname + '/assets/about.html'));
});
app.get("/contact", function (request, response) {
  response.sendFile(path.join(__dirname + '/assets/contact.html'));
});

app.get("/sem1", function (request, response) {
  response.sendFile(path.join(__dirname + '/assets/sem1.html'));
});

app.get("/new-entry", function (request, response) {
  response.render("new-entry");
});

app.get("/guestbook", function (request, response) {
  response.render("guestbook");
});

// http POST (INSERT)
app.post("/new-entry", function (request, response) {
  if (!request.body.title || !request.body.body) {
    response.status(400).send("Entries must have a title and a body.");
    return;
  }
  entries.push({
    title: request.body.title,
    content: request.body.body,
    published: new Date()
  });
  response.redirect("/guestbook");
});

// 404
app.use(function (request, response) {
  response.status(404).render("404");
});

// Listen for an application request on port 8081
http.listen(8081, function () {
  console.log('Guestbook app listening on http://127.0.0.1:8081/');
});

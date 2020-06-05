// <!-- "make reservation" button will be the POST request  -->

// dependancies

var express = require("express");
var path = require("path");

// set up the express app
var app = express();
var PORT = 4040;

// set up express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// array variables

var tables = [
  {
    customerName: "Brittanie",
    phoneNumber: "(310) 940-2409",
    customerEmail: "britt.barrett302@gmail.com",
    customerID: "brittbarrett302",
  },
];

var waitlist = [{}];

// html routes
app.get("/", function (req, res) {
  // res.send("homepage")
  res.sendFile(path.join(__dirname, "home.html"));
});

app.get("/reserve.html", function (req, res) {
  // res.send("reservation form")
  res.sendFile(path.join(__dirname, "reserve.html"));
});

app.get("/tables.html", function (req, res) {
  // res.send("reservation views")
  res.sendFile(path.join(__dirname, "tables.html"));
});

// data table routes
app.get("/api/tables", function (req, res) {
  return res.json(tables);
});

app.get("/api/waitlist", function (req, res) {
  return res.json(waitlist);
});

// port listener
app.listen(PORT, function () {
  console.log("App listening on PORT" + PORT);
});

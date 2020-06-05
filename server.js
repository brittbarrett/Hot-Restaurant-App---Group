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
    customerName: "",
    phoneNumber: "",
    customerEmail: "",
    customerID: "",
  },
];

var waitlist = [{}];

// html routes
app.get("/", function (req, res) {
  // res.send("homepage")
  res.sendFile(path.join(__dirname, "homepage.html"));
});

app.get("/reserveForm", function (req, res) {
  // res.send("reservation form")
  res.sendFile(path.join(__dirname, "reserveForm.html"));
});

app.get("/reserveViews", function (req, res) {
  // res.send("reservation views")
  res.sendFile(path.join(__dirname, "reserveViews.html"));
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

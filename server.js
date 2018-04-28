//Dependencies used

var express = require("express");
var path = require("path");
var bodyParser = require("body-parser");
var reservations = require('./data/reservationsData.js');

var tables = require("./data/tablesData.js")

//Setting up basic config for express

var app = express();

//Setting up initial port

var PORT = process.env.PORT || 3000;

//sets up express to handle data parsing

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//Handles routes.  Will change later
// require("./routes/apiRoutes")(app);
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

//Listener to "start" server
app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
});
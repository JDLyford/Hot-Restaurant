//adding path package 
var path = require("path");

//routing

module.exports = function(app) {
    app.get("/", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/index.html"));
    });
    app.get("/reservations", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/reservations.html"));
    });
    app.get("/tables", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/viewTables.html"));
    });
};

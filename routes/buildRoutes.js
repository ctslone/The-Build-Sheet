var db = require("../models");
module.exports = function (app) {
    app.post("/addpart", function(req,res) {
        db.Parts.create({})
    })
}
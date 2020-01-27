var db = require("../models");
module.exports = function (app) {
    app.post("/addpart", function(req,res) {
        db.Parts.create({part: req.body.part, link: req.body.link, partType: req.body.type, note: req.body.note, status: req.body.status}).catch(function(err) {
            if(err) {
                console.log(err)
            }
        })
    })
    
}
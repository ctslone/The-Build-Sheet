var db = require("../models");
module.exports = function (app) {
    app.post("/addpart", function(req,res) {
        db.Parts.create({part: req.body.part, link: req.body.link, partType: req.body.type, note: req.body.note, status: req.body.status}).catch(function(err) {
            if(err) {
                console.log(err)
            }
        })
    });
    
    app.get("/viewprogress", function(req, res) {
        db.Parts.find({status: "In Progress"}).then(function(showAllProgress) {
            res.render("index", {Parts: showAllProgress})
        })
    });

    app.get("/viewdone", function(req, res) {
        db.Parts.find({status: "Done"}).then(function(showAllDone) {
            res.render("index", {Parts: showAllDone})
        })
    });

    app.put("/movetoinprogress/:id", function(req, res) {
        db.Parts.findByIdAndUpdate({_id: req.params.id}, {$set: {status: "In Progress"}}, {useFindAndModify: false}).catch(function(err) {
            if(err) {
                console.log("Error: " + err)
            };
        })
    })

    app.put("/movetodone/:id", function(req, res) {
        db.Parts.findByIdAndUpdate({_id: req.params.id}, {$set: {status: "Done"}}, {useFindAndModify: false}).catch(function(err) {
            if(err) {
                console.log("Error: " + err)
            };
        })
    })

    app.delete("/deletepart/:id", function(req, res) {
        db.Parts.findByIdAndRemove({_id: req.params.id}, {useFindAndModify: false}).catch(function(err) {
            if(err) {
                console.log("Error: " + err)
            }
        })
    })
    
}
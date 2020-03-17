var db = require("../models");
module.exports = function (app) {
    app.post("/addPart", function(req,res) {
        db.Parts.create({part: req.body.part, link: req.body.link, partType: req.body.type, note: req.body.note, status: req.body.status})
        .catch(function(err) {
            if(err) {
                console.log(err)
            }
            return res
        })
    });
    
    app.get("/viewprogress", function(req, res) {
        db.Parts.find({status: "In Progress"})
        .then(function(showAllProgress) {
            res.render("progress", {Parts: showAllProgress})
        })
    });

    app.get("/viewdone", function(req, res) {
        db.Parts.find({status: "Done"})
        .then(function(showAllDone) {
            res.render("complete", {Parts: showAllDone})
        })
    });

    app.put("/movetodone/:id", function(req, res) {
        db.Parts.findByIdAndUpdate({_id: req.params.id}, {$set: {status: "To Do"}}, {useFindAndModify: false})
        .catch(function(err) {
            if(err) {
                console.log("Error: " + err)
            };
            return res
        })
    })

    app.put("/movetoinprogress/:id", function(req, res) {
        db.Parts.findByIdAndUpdate({_id: req.params.id}, {$set: {status: "In Progress"}}, {useFindAndModify: false})
        .catch(function(err) {
            if(err) {
                console.log("Error: " + err)
            };
            return res
        })
    })

    app.put("/movetocomplete/:id", function(req, res) {
        db.Parts.findByIdAndUpdate({_id: req.params.id}, {$set: {status: "Done"}}, {useFindAndModify: false})
        .catch(function(err) {
            if(err) {
                console.log("Error: " + err)
            };
            return res
        })
    })

    app.delete("/deletepart/:id", function(req, res) {
        db.Parts.findByIdAndRemove({_id: req.params.id}, {useFindAndModify: false})
        .catch(function(err) {
            if(err) {
                console.log("Error: " + err)
            }
            return res
        })
    })

    app.get("/filterby/:status/:type", function(req, res) {
        console.log("INSIEDE FILTER")
        db.Parts.find({
            status: req.params.status,
            partType: req.params.type
        }).then(function(data) {
            console.log("THIS IS DATA "+ data)
            // res.render("index", {Parts: data})
            switch (req.params.status) {
                case "To Do":
                    res.render("index", {Parts: data})
                break;
                case "In Progress":
                    res.render("progress", {Parts: data})
                break;
                case "Done":
                    res.render("complete", {Parts: data})
                break;
            }
        }) 
    })
    
}
var mongoose = require("mongoose");
// 
var Schema = mongoose.Schema;

var PartSchema = new Schema({
    part: {
        type: String,
        required: true,
    },
    link: {
        type: String,
        required: true
    },
    partType: {
        type: String,
        required: true
        // type of part, engine, suspension, audio, exterior, lighting etc
    },
    note: {
        type: Array,
    },
    status: {
        type: String,
        required: true
        // to do, in progress and done
    }

});

var Part = mongoose.model("Part", PartSchema);

module.exports = Part;
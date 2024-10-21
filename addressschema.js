const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    Address: {
        type: String,
        required: true
    },
    visitorIp: {
        type: String,
        required: true
    },
    visitedAt: {
        type: Date,
        default: Date.now
    }
});

const usermodel = mongoose.model('Visitor', userSchema);
module.exports = usermodel;

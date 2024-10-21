const mongoose = require("mongoose");

async function connect(){
    await mongoose.connect("mongodb+srv://singhalvansh74:abcd123@vansh.neojb.mongodb.net/Uplaod")
}

module.exports = connect;
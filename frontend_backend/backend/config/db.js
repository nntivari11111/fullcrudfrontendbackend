const mongoose = require("mongoose")
require('dotenv').config()

const connection = mongoose.connect(process.env.MONGOCONNECT) 
console.log(process.env.MONGOCONNECT)
module.exports = connection
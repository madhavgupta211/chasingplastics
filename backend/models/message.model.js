const mongoose = require("mongoose")
require("mongoose-type-url")
const Schema = mongoose.Schema
let Message = new Schema({
  email: {
    type: String,
    required: true,
  },
  firstname: {
    type: String,
    required: true,
  },
  lastname: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
})
module.exports = mongoose.model("Message", Message)

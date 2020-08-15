const mongoose = require("mongoose")
require("mongoose-type-url")
const Schema = mongoose.Schema
let Blog = new Schema({
  blog_title: {
    type: String,
  },
  blog_url: {
    type: mongoose.SchemaTypes.Url,
    required: true,
  },
  blog_date: {
    type: Date,
    default: Date.now,
  },
})
module.exports = mongoose.model("Blog", Blog)

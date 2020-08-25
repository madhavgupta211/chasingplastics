const mongoose = require("mongoose")
require("mongoose-type-url")
const Schema = mongoose.Schema
let Podcast = new Schema({
  podcast_title: {
    type: String,
  },
  podcast_url: {
    type: mongoose.SchemaTypes.Url,
    required: true,
  },
  podcast_date: {
    type: Date,
    default: Date.now,
  },
})
module.exports = mongoose.model("Podcast", Podcast)

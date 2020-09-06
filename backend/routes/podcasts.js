const express = require("express")
const app = express()
const bodyParser = require("body-parser")
const cors = require("cors")
const mongoose = require("mongoose")
let Podcast = require("../models/podcast.model")
const podcastRoutes = express.Router()
nodeMailer = require("nodemailer")

app.use(cors())
app.use(bodyParser.json())
require("dotenv").config()

const uri = process.env.DB
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
const connection = mongoose.connection
connection.once("open", function () {
  console.log("MongoDB database connection established successfully")
})

podcastRoutes.route("/").get(function (req, res) {
  Podcast.find(function (err, podcasts) {
    if (err) {
      console.log(err)
    } else {
      res.json(podcasts)
    }
  })
})

podcastRoutes.route("/:id").get(function (req, res) {
  let id = req.params.id
  Podcast.findById(id, function (err, podcast) {
    res.json(podcast)
  })
})

podcastRoutes.route("/latest/:num").get((req, res) => {
  let num = parseInt(req.params.num)
  Podcast.find(function (err, blogs) {
    if (err) {
      console.log(err)
    } else {
      res.json(blogs)
    }
  })
    .sort({ _id: 1 })
    .limit(num)
})
// podcastRoutes.route("/add").post(function (req, res) {
//   let podcast = new Podcast(req.body)
//   podcast
//     .save()
//     .then((podcast) => {
//       res.status(200).json({ podcast: "podcast added successfully" })
//     })
//     .catch((err) => {
//       res.status(400).send("adding new podcast failed")
//     })
// })

module.exports = podcastRoutes

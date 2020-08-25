const express = require("express")
const mongoose = require("mongoose")
let Blog = require("../models/blog.model")
const blogRoutes = express.Router()
nodeMailer = require("nodemailer")

require("dotenv").config()

const uri = process.env.DB
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
const connection = mongoose.connection
connection.once("open", function () {
  console.log("MongoDB database connection established successfully")
})

blogRoutes.route("/").get(function (req, res) {
  Blog.find(function (err, blogs) {
    if (err) {
      console.log(err)
    } else {
      res.json(blogs)
    }
  })
})

blogRoutes.route("/:id").get(function (req, res) {
  let id = req.params.id
  Blog.findById(id, function (err, blog) {
    res.json(blog)
  })
})

// blogRoutes.route("/add").post(function (req, res) {
//   let blog = new Blog(req.body)
//   blog
//     .save()
//     .then((blog) => {
//       res.status(200).json({ blog: "Blog added successfully" })
//     })
//     .catch((err) => {
//       res.status(400).send("adding new blog failed")
//     })
// })

module.exports = blogRoutes

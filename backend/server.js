const express = require("express")
const app = express()
const bodyParser = require("body-parser")
const cors = require("cors")
const mongoose = require("mongoose")
const PORT = 4000
let Blog = require("./blog.model")
let Podcast = require("./podcast.model")
const blogRoutes = express.Router()
const podcastRoutes = express.Router()
app.use(cors())
app.use(bodyParser.json())
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

blogRoutes.route("/update/:id").post(function (req, res) {
  blog.findById(req.params.id, function (err, blog) {
    if (!blog) res.status(404).send("data is not found")
    else blog.blog_title = req.body.blog_title
    blog.blog_url = req.body.blog_url
    blog.blog_date = req.body.blog_date
    blog
      .save()
      .then((blog) => {
        res.json("blog updated!")
      })
      .catch((err) => {
        res.status(400).send("Update not possible")
      })
  })
})

blogRoutes.route("/add").post(function (req, res) {
  let blog = new Blog(req.body)
  blog
    .save()
    .then((blog) => {
      res.status(200).json({ blog: "Blog added successfully" })
    })
    .catch((err) => {
      res.status(400).send("adding new blog failed")
    })
})

app.use("/blogs", blogRoutes)
app.listen(PORT, function () {
  console.log("Server is running on Port: " + PORT)
})

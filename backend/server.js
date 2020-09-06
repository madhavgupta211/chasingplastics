const express = require("express")
const app = express()
const bodyParser = require("body-parser")
const cors = require("cors")
const PORT = 4000
let Message = require("./models/message.model")
nodeMailer = require("nodemailer")

app.use("/admin", require("./admin"))
app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
require("dotenv").config()

app.post("/contact-us", function (req, res) {
  let message = new Message(req.body)
  message
    .save()
    .then((message) => {
      res.status(200).json({ message: "message sent successfully" })
    })
    .catch((err) => {
      res.status(400).json({ error: "message could not be saved" })
      console.log(err)
    })
})

const blogRoutes = require("./routes/blogs")
const podcastRoutes = require("./routes/podcasts")

app.use("/blogs", blogRoutes)
app.use("/podcasts", podcastRoutes)

app.listen(PORT, function () {
  console.log("Server is running on Port: " + PORT)
})

const express = require("express")
const app = express()
const bodyParser = require("body-parser")
const cors = require("cors")
const PORT = 4000
nodeMailer = require("nodemailer")

app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
require("dotenv").config()

app.post("/contact-us", function (req, res) {
  const id = process.env.ID
  const pass = process.env.PASS
  let transporter = nodeMailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      // should be replaced with real sender's account
      user: id,
      pass: pass,
    },
  })
  let mailOptions = {
    // should be replaced with real recipient's account
    to: "info.chasingplastic@gmail.com",
    from: req.body.email,
    subject: req.body.firstname + " " + req.body.lastname,
    text: req.body.message + "from " + req.body.email,
  }
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return console.log(error)
    }
    console.log("Message %s sent: %s", info.messageId, info.response)
  })
  res.status(200).json({ email: "emailed successfully" })
  // res.end()
})

const blogRoutes = require("./routes/blogs")
const podcastRoutes = require("./routes/podcasts")

app.use("/blogs", blogRoutes)
app.use("/podcasts", podcastRoutes)

app.listen(PORT, function () {
  console.log("Server is running on Port: " + PORT)
})

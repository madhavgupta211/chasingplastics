import React, { Component } from "react"
import "./home.css"
import Latest from "./Latest/latestComponent"
import Banner from "./Banner/bannerComponent"
import Title from "./Title/titleComponent"
import OurTeam from "./OurTeam/ourTeamComponent"
import Contact from "./Contact/contactComponent"
import Footer from "./Footer/footerComponent"

class Home extends Component {
  render() {
    return (
      <div>
        <Banner />
        <Title />
        <Latest />
        <OurTeam />
        <Contact />
        <Footer />
      </div>
    )
  }
}

export default Home

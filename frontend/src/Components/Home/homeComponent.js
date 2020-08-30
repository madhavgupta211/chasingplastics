import React, { Component } from "react"
import "./home.css"
import Latest from "./Latest/latestComponent"
import Banner from "./Banner/bannerComponent"
import Title from "./Title/titleComponent"
import OurTeam from "./OurTeam/ourTeamComponent"
import Contact from "./Contact/contactComponent"
import Footer from "./Footer/footerComponent"
import Header from "../Header/headerComponent"
import Player from "./Player/playerComponent";

class Home extends Component {
  render() {
    return (
      <div>
        <Header />
        <Banner name = "banner" />
        <Title name = "title"/>
        <Player name = "player" />
        <OurTeam name = "ourteam" />
        <Contact name = "contact" />
        <Footer />
      </div>
    )
  }
}

export default Home

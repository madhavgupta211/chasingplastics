import React, { Component } from 'react';
import "./home.css";
import OurTeam from './OurTeam/ourTeamComponent';
import Banner from './Banner/bannerComponent';
import Title from './Title/titleComponent'; 

class Home extends Component {
  render() {
    return(
      <div>
        <Banner />
        <Title />
        <OurTeam />
      </div>
    );
  }
}

export default Home;

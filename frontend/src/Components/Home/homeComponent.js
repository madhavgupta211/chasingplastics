import React, { Component } from 'react';
import "./home.css";
import OurTeam from './OurTeam/ourTeamComponent';
import Banner from './Banner/bannerComponent';

class Home extends Component {
  render() {
    return(
      <div>
        <Banner />
        <OurTeam />
      </div>
    );
  }
}

export default Home;

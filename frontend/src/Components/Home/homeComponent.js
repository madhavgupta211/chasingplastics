import React, { Component } from 'react';
import "./home.css";
import Latest from './Latest/latestComponent';
import Banner from './Banner/bannerComponent';
import Title from './Title/titleComponent'; 

class Home extends Component {
  render() {
    return(
      <div>
        <Banner />
        <Title />
        <Latest />
      </div>
    );
  }
}

export default Home;

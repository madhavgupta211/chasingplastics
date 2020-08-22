import React, {Component} from 'react';
import './ourTeam.css';
import { Button } from 'reactstrap';

const arnav = require("../../../shared/arnav.png");
const sanjana = require("../../../shared/sanjana.png");

class OurTeam extends Component {
  render() { 
    return(
      <div className = "ourteam-bg">
          <div className = "row title-row my-auto">
            <div className = "col-12 latest-heading-row team-header">  
              <h1 className = "title-header">The Hosts</h1>
            </div>
            <div className = "col-12 mx-0 px-0">
              <button className = "team-button-1"><img src = {arnav} className = "team-picture"/></button>
              <button className = "team-button-2"><img src = {sanjana} className = "team-picture"/></button>
              <div className = "col-12 mt-3">&nbsp;</div>
              <div className = "col-10 offset-1 arnav-desc team-content-1">
                <h2 className = "team-name">Arnav Gupta</h2>
                <h4 className = "team-designation">Founder/Host</h4>
                <h6 className = "team-content text-left mt-4 mb-4 py-4 px-4 col-12 col-md-10 offset-md-1 offset-lg-2 col-lg-8">Arnav is a management consultant and a finance guru.
                 He has advised clients on growth strategy and green impact projects across Asia, the Middle East, and Africa.
                  His passion for saving the oceans began from his first dive underwater. Having had the opportunity to live and
                   work in Bangkok for over a year, he has visited some of the most beautiful dive sites in South East Asia and wants 
                   to chase plastics to conserve these sites so you can see them as well.</h6>
              </div>
              <div className = "col-10 offset-1 sanjana-desc team-content-2">
                <h2 className = "team-name">Sanjana Teje</h2>
                <h4 className = "team-designation">Founder/Host</h4>
                <h6 className = "team-content text-left mt-4 mb-4 py-4 px-4 col-12 col-md-10 offset-md-1 offset-lg-2 col-lg-8">Sanjana has worked with multiple Fortune 100 companies on supply chain 
                and operations initiatives in the United States and India. From traveling 8000 km across India to learn from social enterprises 
                to working at a production plant, a distribution center, and a planning hub, she is inspired to chase plastics as she envisions 
                sustainable and efficient supply chains.</h6>
              </div>
              <div className = "col-12 mt-3">&nbsp;</div>
            </div>
          </div>
      </div>
    );
  }
};

export default OurTeam;
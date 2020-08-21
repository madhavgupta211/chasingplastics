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
              <h1 className = "title-header">Our Team</h1>
            </div>
            <div className = "col-12 mx-0 px-0">
              <button className = "team-button-1"><img src = {arnav} className = "team-picture"/></button>
              <button className = "team-button-2"><img src = {sanjana} className = "team-picture"/></button>
            </div>
          </div>
      </div>
    );
  }
};

export default OurTeam;
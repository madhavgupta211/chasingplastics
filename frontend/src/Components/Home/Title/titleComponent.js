import React, { Component } from 'react';
import "./title.css";

const tiles = require("../../../shared/Component 2 – 1.png");

class Title extends Component {
  render() {
    return(
      <div className = "title-bg"  name = {this.props.name}>
        <div className = "container title-container">
          <div className = "row title-row my-auto">
            <div className = "col-12 col-lg-5 title-img-col">
              <img className = "tiled-image" src = { tiles } />
            </div>
            <div className = "col-12 offset-lg-1 col-lg-6 align-self-center">
              <h1 className = "text-center text-lg-left pt-4 pt-lg-0 title-header">Chasing Plastics</h1>
              <h4 className = "text-center text-lg-left title-text pt-2 pb-5 pb-lg-0">Join us on a journey around the globe as we chase
               plastics from source to sink and learn the truth about the plastic problem. The problem is everywhere from our kitchens 
               to the ocean floor, and whether you have no idea what it is or you are heavily invested in sustainability, this is for you.
                We look forward to creating this change for a better tomorrow with you all. By chasing our dreams, by chasing righteousness,
                 and by chasing plastics. </h4>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Title;
import React, { Component } from 'react';
import "./title.css";

const tiles = require("../../../shared/Component 2 – 1.png");

class Title extends Component {
  render() {
    return(
      <div className = "title-bg">
        <div className = "container title-container">
          <div className = "row title-row my-auto">
            <div className = "col-12 col-md-6 col-lg-5 title-img-col">
              <img className = "tiled-image" src = { tiles } />
            </div>
            <div className = "col-12 col-md-6 offset-lg-1 col-lg-6 align-self-center">
              <h1 className = "text-center text-md-left pt-4 pt-md-0 title-header">Title you want</h1>
              <h4 className = "text-center text-md-left title-text pt-2">Sed at urna a massa sodales euismod. Sed quis aliquam nisl.
               Nullam hendrerit purus lacus, sed viverra dolor mollis sit amet. Quisque scelerisque ornare nisi, nec 
               porttitor arcu egestas sed. Nam cursus vitae metus dictum egestas. Fusce </h4>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Title;
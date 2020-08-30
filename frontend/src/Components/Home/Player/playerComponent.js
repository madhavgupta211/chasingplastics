import React, { Component } from 'react';

class Player extends Component {
  
  componentDidMount() {
    const script = document.createElement("script");
    script.src = 'https://www.buzzsprout.com/1316284.js?container_id=buzzsprout-large-player-1316284&player=large';
    script.async = true;
    script.type = 'text/javascript';
    script.charset = 'utf-8';
    document.body.appendChild(script);
  }
  
  render() {
    return(
      <div className = "container">
        <div className = "row justify-content-center">
          <div className = "col-12" id='buzzsprout-large-player-1316284'></div>
        </div>
      </div>
    );
  }
}

export default Player;
import React, { Component } from 'react';
import "./banner.css";
import { Button } from 'reactstrap';

class Banner extends Component {
  render() {
    return(
      <div className = "banner-bg" name = {this.props.name}>
        <div className = "row banner-row my-auto mx-auto">
          <div className = "col-7 crystal-column">
            <div className = "crystal-square">
              {/* <div className = "green-square">
              </div> */}
              {/* <div className = "py-4 pl-4 pr-5">
                <h1 className = "text-left crystal-heading">An evironment conservation podcast</h1>
              </div>
              <div className = "pb-4 pl-4 pr-3">
                <h4 className = "text-left crystal-sub-text">Lorem ipsum dolor sit amet, 
                consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                 Ut enim ad minim veniam, quis nostrud exercitation</h4>
              </div>
              <div className = "text-left pl-4">
                <Button color = "link" className = "p-0 crystal-button">Read More</Button>
              </div> */}
            </div>
          </div>
          <div className = "col-5 mt-auto align-self-end podcast-green-column">
            <div className = "podcast-green-square float-right">
              <div className = "px-4 pt-3 pb-2">
                <h2 className = "text-left podcast-green-heading">the podcast</h2>
              </div>
              <div className = "px-4 pb-3">
                <h6 className = "text-left podcast-green-sub-text">Listen to the latest episode and subscribe to all.</h6>
              </div>
              <div className = "text-left px-4 pb-4">
                <Button color = "link" className = "btn podcast-green-button">Listen now</Button>
              </div>
              <div className = "px-4 pt-1">
                <h6 className = "text-left podcast-green-sub-text">Subscribe to our podcast via:</h6>
              </div>
              <div className = "pl-4 pr-1 pb-3 text-left">
                <a className = "d-inline podcast-green-link">iTunes,</a>
                <a className = "d-inline podcast-green-link">Stitcher,</a>
                <a className = "d-inline podcast-green-link">Google Podcast,</a><br/>
                <a className = "d-inline podcast-green-link">Spotify</a>
              </div>
            </div>
          </div>
          <div className = "col-12 crystal-column-small">
            <div className = "crystal-small-square mx-auto" >
              {/* <div className = "pt-3 pb-2 pl-4 pr-5">
                <h4 className = "text-left crystal-heading-small">An evironment conservation podcast</h4>
              </div>
              <div className = "pb-2 pl-4 pr-3">
                <h6 className = "text-left crystal-sub-text-small">Lorem ipsum dolor sit amet, 
                consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                 Ut enim ad minim veniam, quis nostrud exercitation</h6>
              </div>
              <div className = "text-left pl-4 pb-2">
                <Button color = "link" className = "p-0 crystal-button-small">Read More</Button>
              </div> */}
            </div>
            <div className = "mt-4 mb-4 podcast-green-square-small text-left mx-auto">
              <div className = "px-4 pt-2 pb-2">
                <h4 className = "text-left podcast-green-heading">the podcast</h4>
              </ div>
              <div className = "px-4 pb-2">
                <h4 className = "text-left podcast-green-sub-text">Listen to the latest episode and subscribe to all.</h4>
              </div>
              <div className = "text-left px-4 pb-3">
                <Button color = "link" className = "btn podcast-green-button-small">Listen now</Button>
              </div>
              <div className = "px-4 pt-1">
                <h4 className = "text-left podcast-green-sub-text">Subscribe to our podcast via:</h4>
              </div>
              <div className = "pl-4 pb-3 text-left">
                <a className = "d-inline podcast-green-link-small"><h4 className = "green-link-small">iTunes,</h4></a>
                <a className = "d-inline podcast-green-link-small"><h4 className = "green-link-small">Stitcher,</h4></a>
                <a className = "d-inline podcast-green-link-small"><h4 className = "green-link-small">Google Podcast</h4></a>
                <a className = "d-inline podcast-green-link-small"><h4 className = "green-link-small">,Spotify</h4></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Banner;
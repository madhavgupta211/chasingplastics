import React, { Component } from "react";
import "./latest.css";
import { Button, Card, CardImg, CardTitle, CardBody, CardText, CardImgOverlay } from "reactstrap";

const photo1 = require("../../../shared/trialman-1.jpg");
const photo2 = require("../../../shared/trialwoman-1.jpeg");
const speaker = require("../../../shared/speaker.jpg");
const newsletter = require("../../../shared/Group-laughing.jpg");

class Latest extends Component {
  render() {
    return (
      <div className = "latest-bg">
        <div className = "container">
          <div className = "row title-row my-auto">
            <div className = "col-12 latest-heading-row">
              <h1 className = "title-header">Latest from us</h1>
            </div>
            <div className = "d-none d-md-block col-md-6 col-lg-4">
              <Card className = "col-12 my-2 mx-2 latest-sm-card">
                <CardImg top className = "latest-sm-card-img" src = {newsletter} alt = "newsletter-image"></CardImg>
                <CardImgOverlay className = "latest-black-bg pt-3">
                  <CardTitle className = "text-left latest-card-black-title">The July Newsletter is out</CardTitle>
                  <CardText className = "text-left latest-card-black-text">Catch up on everything! Read now</CardText>
                </CardImgOverlay>
              </Card>
              <Card className = "col-12 my-2 mx-2 latest-sm-card">
                <CardBody className = "pt-2">
                  <CardTitle className = "text-left latest-card-light-title">Giving back what we borrowed</CardTitle>
                  <CardText className = "text-left latest-card-light-text">Imperdiet erat Pellentes habitant.</CardText>
                </CardBody>
              </Card>
              <Card className = "d-block d-lg-none col-12 my-2 mx-2 latest-sm-card">
                <CardImg top className = "latest-sm-card-img" src = {newsletter} alt = "newsletter-image"></CardImg>
                <CardImgOverlay className = "latest-black-bg pt-3">
                  <CardTitle className = "text-left latest-card-black-title">The July Newsletter is out</CardTitle>
                  <CardText className = "text-left latest-card-black-text">Catch up on everything! Read now</CardText>
                </CardImgOverlay>
              </Card>
            </div>
            <div className = "col-12 col-md-6 col-lg-4 justify-content-center">
              <Card className = "col-10 offset-1 col-md-12 my-2 mx-md-1 latest-card">
                <CardImg top className = "latest-card-img" src = {speaker} alt = "season 5 img"></CardImg>
                <CardBody className = "pt-2">
                  <CardTitle className = "text-left latest-card-title">Season 5 is here</CardTitle>
                  <CardText className = "text-left latest-card-text">Nullam non massa dapibus, malesuada nisi sit amet, imperdiet erat.
                   Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
                  </CardText>
                </CardBody>
              </Card>
              <Card className = "d-block d-lg-none col-10 offset-1 col-md-12 my-2 mx-md-1 latest-sm-card">
                <CardBody className = "pt-2">
                  <CardTitle className = "text-left latest-card-light-title">Giving back what we borrowed</CardTitle>
                  <CardText className = "text-left latest-card-light-text">Imperdiet erat Pellentes habitant.</CardText>
                </CardBody>
              </Card>
            </div>
            <div className = "d-block d-md-none d-lg-block col-12 col-lg-4">
              <Card className = "col-10 offset-1 col-md-12 my-2 mx-md-2 latest-sm-card">
                <CardBody className = "pt-2">
                  <CardTitle className = "text-left latest-card-light-title">Giving back what we borrowed</CardTitle>
                  <CardText className = "text-left latest-card-light-text">Imperdiet erat Pellentes habitant.</CardText>
                </CardBody>
              </Card>
              <Card className = "col-10 offset-1 col-md-12 my-2 mx-md-2 latest-sm-card">
                <CardImg top className = "latest-sm-card-img" src = {newsletter} alt = "newsletter-image"></CardImg>
                <CardImgOverlay className = "latest-black-bg pt-3">
                  <CardTitle className = "text-left latest-card-black-title">The July Newsletter is out</CardTitle>
                  <CardText className = "text-left latest-card-black-text">Catch up on everything! Read now</CardText>
                </CardImgOverlay>
              </Card>
            </div>
            <div className = "col-12">
              <Button className = "latest-read-more">Read More</Button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Latest;

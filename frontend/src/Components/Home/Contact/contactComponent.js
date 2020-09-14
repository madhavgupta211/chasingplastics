import React, { Component } from "react"
import { Card, CardBody, Row, Col, Label, Button, CardText } from "reactstrap"
import "./contact.css"
import { Control, LocalForm } from "react-redux-form"
import baseUrl from "../../../baseUrl"
var Recaptcha = require("react-recaptcha")

class Contact extends Component {
  constructor(props) {
    super(props)
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      message: "",
      isVerified: false,
    }
  }

  handleSubmit = (values) => {
    if (this.state.isVerified) {
      console.log(values)
      fetch(baseUrl + "/contact-us", {
        method: "POST",
        body: JSON.stringify(values),
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        credentials: "include",
      })
        .then(
          (response) => {
            if (response.status === 200) {
              alert(
                "Thank you for your message. We are excited for you to join our network of chasers"
              )
              return response
            } else {
              var error = new Error(
                "Error " + response.status + ": " + response.statusText
              )
              error.response = response
              throw error
            }
          },
          (error) => {
            throw error
          }
        )
        .catch((error) => {
          console.log("post Contacts", error.message)
        })
      // window.location.reload(false)
    } else {
      alert("Please verify that you are a human :)")
    }
  }

  verifyCallback = (response) => {
    if (response) {
      this.setState({
        isVerified: true,
      })
    }
  }

  captchaLoaded = () => {
    console.log("Captcha loaded")
  }

  render() {
    return (
      <div className="contact-bg" name={this.props.name}>
        <div className="container">
          <div className="row title-row my-auto">
            <div className="col-12 col-lg-5 latest-heading-row justify-content-end contact-margin d-block d-lg-flex">
              <div className="my-auto">
                <h1 className="title-header text-center text-lg-left col-12 mb-5 mb-lg-4">
                  Get In Touch
                </h1>
                <Card className="contact-info-card col-12">
                  <CardBody>
                    <CardText className="text-left my-3">
                      <h6 className="contact-info-text">
                        <span className="fa fa-lg fa-envelope my-2 mr-2"></span>
                        info.chasingplastic@gmail.com
                      </h6>
                      {/* <h6 className = "contact-info-text">
                        <span className = "fa fa-lg fa-phone my-2 mr-2 pr-1"></span>12534-678-91
                      </h6> */}
                      <h6 className="contact-info-text-pink mt-4">
                        Send us a message. We will try to get back to you as
                        soon as possible
                      </h6>
                    </CardText>
                  </CardBody>
                </Card>
              </div>
            </div>
            <div className="col-12 offset-xl-1 col-lg-7 col-xl-6 contact-card-margin">
              <Card className="contact-card mb-5 mb-lg-0">
                <CardBody>
                  <LocalForm
                    model="contact"
                    onSubmit={(values) => this.handleSubmit(values)}
                    autoComplete="off"
                  >
                    <Row className="form-group">
                      <Col xs={12} className="text-center text-lg-left">
                        <Label className="contact-label" htmlFor="firstname">
                          First Name
                        </Label>
                      </Col>
                      <Col>
                        <Control.text
                          model=".firstname"
                          className="contact-input form-control text-center text-lg-left"
                          name="firstname"
                          id="firstname"
                        />
                      </Col>
                    </Row>
                    <Row className="form-group">
                      <Col xs={12} className="text-center text-lg-left">
                        <Label className="contact-label" htmlFor="lastname">
                          Last Name
                        </Label>
                      </Col>
                      <Col>
                        <Control.text
                          model=".lastname"
                          className="contact-input form-control text-center text-lg-left"
                          name="lastname"
                          id="lastname"
                        />
                      </Col>
                    </Row>
                    <Row className="form-group">
                      <div className="col-12 text-center text-lg-left">
                        <Label className="contact-label" htmlFor="emailid">
                          Email Id
                        </Label>
                      </div>
                      <Col>
                        <Control.text
                          model=".email"
                          className="contact-input form-control text-center text-lg-left"
                          name="email"
                          id="email"
                          placeholder="abc@xyz.com"
                        />
                      </Col>
                    </Row>
                    <Row className="form-group">
                      <Col xs={12} className="tect-center text-lg-left">
                        <Label className="contact-label" htmlFor="message">
                          Message
                        </Label>
                      </Col>
                      <Col>
                        <Control.textarea
                          model=".message"
                          className="contact-input form-control text-center text-lg-left"
                          rows="5"
                          name="emailid"
                          id="emailid"
                          placeholder="Ask anything. Go on now.."
                        />
                      </Col>
                    </Row>
                    <Row className="form-group">
                      <Col>
                        <Recaptcha
                          sitekey="6LdJasUZAAAAALCU0QdYTQ7Xd_l3TXyhaj_IJ3ey"
                          render="explicit"
                          onloadCallback={this.captchaLoaded}
                          verifyCallback={this.verifyCallback}
                        />
                      </Col>
                    </Row>
                    <Row className="form-group">
                      <Col className="text-center text-lg-left">
                        <Button type="submit" className="contact-submit-button">
                          Submit
                        </Button>
                      </Col>
                    </Row>
                  </LocalForm>
                </CardBody>
              </Card>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Contact

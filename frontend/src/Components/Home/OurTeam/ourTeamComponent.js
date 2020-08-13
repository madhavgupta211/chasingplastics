import React, { Component } from "react"
import "./ourTeam.css"
import {
  Card,
  Button,
  CardImg,
  CardTitle,
  CardSubtitle,
  CardBody,
  Container,
  Row,
  Col,
} from "reactstrap"

const photo1 = require("../../../shared/trialman-1.jpg")
const photo2 = require("../../../shared/trialwoman-1.jpeg")

class OurTeam extends Component {
  render() {
    return (
      <Container>
        <Row className="heading">
          <Col>Meet Our Hosts</Col>
        </Row>

        <Row>
          <Col>
            <Card>
              <CardImg
                top
                width="100%"
                src={photo1}
                alt="Card image cap"
                className="hostimg"
              />
              <CardBody className="hostcard">
                <CardTitle className="hostname">Arnav</CardTitle>
                <CardSubtitle className="hostdesc">
                  BITS Pilani, Batch of 2015
                </CardSubtitle>
                <Button>Button</Button>
              </CardBody>
            </Card>
          </Col>

          <Col>
            <Card>
              <CardImg
                top
                width="100%"
                src={photo2}
                alt="Card image cap"
                className="hostimg"
              />
              <CardBody className="hostcard">
                <CardTitle className="hostname">Sanjana</CardTitle>
                <CardSubtitle className="hostdesc">
                  BITS Pilani, Batch of 2016
                </CardSubtitle>
                <Button>Button</Button>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
      //   <Card>
      //     <CardImg top width="100%" src="/assets/318x180.svg" alt="Card image cap" />
      //     <CardBody>
      //       <CardTitle>Card title</CardTitle>
      //       <CardSubtitle>Card subtitle</CardSubtitle>
      //       <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
      //       <Button>Button</Button>
      //     </CardBody>
      //   </Card>
    )
  }
}

export default OurTeam

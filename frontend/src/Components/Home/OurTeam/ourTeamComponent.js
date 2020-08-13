import React, { Component } from "react"
import "./ourTeam.css"
import { CardImg, Container, Row, Col } from "reactstrap"

const photo1 = require("../../../shared/trialman-1.jpg")
const photo2 = require("../../../shared/trialwoman-1.jpeg")

class OurTeam extends Component {
  render() {
    return (
      <Container>
        <Row className="heading">
          <Col>Meet Our Hosts</Col>
        </Row>

        <Row xs="2">
          <Col>
            <div className="host-card">
              <img src={photo1} alt="Card image cap" className="host-image" />
            </div>
            <div className="host-body">
              <div className="host-name">Arnav</div>
              <div className="host-description">Founder/Host</div>
            </div>
          </Col>

          <Col>
            <div className="host-card">
              <img src={photo2} alt="Card image cap" className="host-image" />
            </div>
            <div className="host-body">
              <div className="host-name">Sanjana</div>
              <div className="host-description">Founder/Host</div>
            </div>
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

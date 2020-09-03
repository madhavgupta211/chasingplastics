import React, { Component } from 'react';
import { Navbar, NavbarBrand, Nav, NavItem, Button, NavbarToggler } from 'reactstrap';
import { CSSTransition } from 'react-transition-group';
import "./header.css";
import { Link } from 'react-scroll';

const insta = require("../../shared/insta logo.png");
const spotify = require("../../shared/spotify logo.png");

class Header extends Component {
  constructor(props) {
    super(props);
    this.toggleNav = this.toggleNav.bind(this);
    this.state = {
      isNavOpen: false
    };
  }
  
  toggleNav = () => {
    this.setState({
      isNavOpen: !this.state.isNavOpen
    });
  }
  
  render() {
    return(
      <Navbar light expand = "lg fixed-top">
        <div className = "container">
          <NavbarBrand className = "mr-0">
            <Link className = "navbar-logo" to = '/home'>CHASING PLASTICS</Link>
          </NavbarBrand>
          <a href = "https://www.instagram.com/chasingplastics/" target = "_blank" className="ml-auto mb-0 pb-0 nav-redirect-link">
            <img src = {spotify} className = "d-block d-lg-none nav-redirects"/>
          </a>&nbsp;
          <a href = "https://www.instagram.com/chasingplastics/" target = "_blank" className="mb-0 pb-0 nav-redirect-link">
            <img src = {insta} className = "d-block d-lg-none nav-redirects"/>&nbsp;
          </a>
          <NavbarToggler onClick = {this.toggleNav} className = " btn btn-primary n-toggler">
            <span className = "fa fa-lg fa-bars pb-1"></span>
          </NavbarToggler>
          <Nav navbar className = "ml-auto mr-auto d-none d-lg-block">
            <NavItem className = "mx-2 text-left text-lg-center my-2 my-md-0 d-inline">
              <Link className = "navbar-link" 
              to = "banner"
              spy={true}
              smooth={true}
              offset={0}
              duration= {500}>Home</Link>
            </NavItem>
            <NavItem className = "mx-2 text-left text-lg-center my-2 my-md-0 d-inline">
              <Link className = "navbar-link" 
              to = "title"
              spy={true}
              smooth={true}
              offset={0}
              duration= {500}>About</Link>
            </NavItem>
            <NavItem className = "mx-2 text-left text-lg-center my-2 my-md-0 d-inline">
              <Link className = "navbar-link" 
              to = "player"
              spy={true}
              smooth={true}
              offset={0}
              duration= {500}>Podcast</Link>
            </NavItem>
            <NavItem className = "mx-2 text-left text-lg-center my-2 my-md-0 d-inline">
              <Link className = "navbar-link" 
              to = "ourteam"
              spy={true}
              smooth={true}
              offset={0}
              duration= {500}>The Hosts</Link>
            </NavItem>
            <NavItem className = "mx-2 text-left text-lg-center my-2 my-md-0 d-inline">
              <Link className = "navbar-link" 
              to = "contact"
              spy={true}
              smooth={true}
              offset={0}
              duration= {500}>Contact</Link>
            </NavItem>
          </Nav>
          <a href = "https://www.instagram.com/chasingplastics/" target = "_blank" className="mb-0 pb-0 nav-redirect-link">
            <img src = {insta} className = "d-none d-lg-block nav-redirects"/>&nbsp;
          </a>
          <a href = "https://open.spotify.com/show/0QOQzgkDBJqgGbGtNkqsbr" target = "_blank" className="mb-0 pb-0 nav-redirect-link">
            <img src = {spotify} className = "d-none d-lg-block nav-redirects"/>
          </a>
          <CSSTransition
            in = {this.state.isNavOpen}
            timeout = {500}
            classNames = "slide"
            mountOnEnter = {true}
            unmountOnExit = {true}
          >
            <div class = "pop-up-navbar">
              <div className = "row">
                <div className = "col-12 text-right">
                  <Button onClick = {this.toggleNav} className = "btn btn-primary pop-up-close my-2 mr-3">
                    <span className = "fa fa-lg fa-times cross"></span>
                  </Button>
                </div>
              </div>
                <div className = "row row-pop-up align-items-center">
                    <div className = "col-12 text-center">
                      <Link className = "pop-up-link" 
                      onClick = {this.toggleNav}
                      to = "banner"
                      spy={true}
                      smooth={true}
                      offset={0}
                      duration= {500}><h1>Home</h1></Link>
                    </div>
                </div>
                <div className = "row row-pop-up align-items-center">
                    <div className = "col-12 text-center">
                      <Link className = "pop-up-link" 
                      onClick = {this.toggleNav}
                      to = "title"
                      spy={true}
                      smooth={true}
                      offset={0}
                      duration= {500}><h1>About</h1></Link>
                    </div>
                </div>
                <div className = "row row-pop-up  align-items-center">
                    <div className = "col-12 text-center">
                      <Link className = "pop-up-link" 
                      onClick = {this.toggleNav}
                      to = "player"
                      spy={true}
                      smooth={true}
                      offset={0}
                      duration= {500}><h1>Podcast</h1></Link>
                    </div>
                </div>
                <div className = "row row-pop-up align-items-center">
                    <div className = "col-12 text-center">
                      <Link className = "pop-up-link" 
                      onClick = {this.toggleNav}
                      to = "ourteam"
                      spy={true}
                      smooth={true}
                      offset={0}
                      duration= {500}><h1>The Hosts</h1></Link>
                    </div>
                </div>
                <div className = "row row-pop-up align-items-center">
                    <div className = "col-12 text-center">
                      <Link className = "pop-up-link" 
                      onClick = {this.toggleNav}
                      to = "contact"
                      spy={true}
                      smooth={true}
                      offset={0}
                      duration= {500}><h1>Contact</h1></Link>
                    </div>
                </div>
            </div>
          </CSSTransition>
        </div>
      </Navbar>
    );
  }
}

export default Header;

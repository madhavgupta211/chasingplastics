import React, { Component } from 'react';
import { Navbar, NavbarBrand, Nav, NavItem, Input, Button, Form, FormGroup, NavbarToggler, Collapse } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
import "./header.css";

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
            <NavLink className = "navbar-logo" to = '/home'>CHASING PLASTICS</NavLink>
          </NavbarBrand>
          <img src = {spotify} className = "d-block d-lg-none nav-redirects ml-auto"/>&nbsp;
          <img src = {insta} className = "d-block d-lg-none nav-redirects"/>&nbsp;
          <NavbarToggler onClick = {this.toggleNav} className = " btn btn-primary n-toggler">
            <span className = "fa fa-lg fa-bars pb-1"></span>
          </NavbarToggler>
          <Nav navbar className = "ml-auto mr-auto d-none d-lg-block">
            <NavItem className = "mx-2 text-left text-lg-center my-2 my-md-0 d-inline">
              <NavLink className = "navbar-link" to = "/home">Home</NavLink>
            </NavItem>
            <NavItem className = "mx-2 text-left text-lg-center my-2 my-md-0 d-inline">
              <NavLink className = "navbar-link" to = "/blog">Blog</NavLink>
            </NavItem>
            <NavItem className = "mx-2 text-left text-lg-center my-2 my-md-0 d-inline">
              <NavLink className = "navbar-link" to = "/podcast">Podcast</NavLink>
            </NavItem>
            <NavItem className = "mx-2 text-left text-lg-center my-2 my-md-0 d-inline">
              <NavLink className = "navbar-link" to = "/home">The Hosts</NavLink>
            </NavItem>
            <NavItem className = "mx-2 text-left text-lg-center my-2 my-md-0 d-inline">
              <NavLink className = "navbar-link" to = "/home">Contact</NavLink>
            </NavItem>
          </Nav>
          <img src = {spotify} className = "d-none d-lg-block nav-redirects"/>&nbsp;
          <img src = {insta} className = "d-none d-lg-block nav-redirects"/>
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
                      <NavLink className = "pop-up-link" to = "/home" ><h1>Home</h1></NavLink>
                    </div>
                </div>
                <div className = "row row-pop-up align-items-center">
                    <div className = "col-12 text-center">
                      <NavLink className = "pop-up-link" to = "/blog" ><h1>Blog</h1></NavLink>
                    </div>
                </div>
                <div className = "row row-pop-up  align-items-center">
                    <div className = "col-12 text-center">
                      <NavLink className = "pop-up-link" to = "/podcast" ><h1>Podcast</h1></NavLink>
                    </div>
                </div>
                <div className = "row row-pop-up align-items-center">
                    <div className = "col-12 text-center">
                      <NavLink className = "pop-up-link" to = "/home" ><h1>The Hosts</h1></NavLink>
                    </div>
                </div>
                <div className = "row row-pop-up align-items-center">
                    <div className = "col-12 text-center">
                      <NavLink className = "pop-up-link" to = "/home" ><h1>Contact</h1></NavLink>
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

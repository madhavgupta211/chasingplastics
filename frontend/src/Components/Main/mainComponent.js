import React, { Component } from 'react';
import { withRouter, Switch, Route, Redirect } from 'react-router-dom';
import Header from '../Header/headerComponent';
import Home from '../Home/homeComponent';
import Blog from '../Blog/blogComponent';
import Podcast from '../Podcast/podcastComponent';


class Main extends Component {
  render() {
    return(
      <div>
        <Header />
        <Switch>
          <Route path = "/home" component = {Home} />
          <Route path = "/podcast" component = {Podcast} />
          <Route path = "/blog" component = {Blog} />
          <Redirect to = "/home" /> 
        </Switch>
      </div>
    );
  }
}

export default withRouter(Main);
import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "./pages/home/HomePage";
import AboutPage from "./pages/about/AboutPage";
import NotFound from "./pages/notFound/NotFound";

class Routes extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/about" component={AboutPage} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;

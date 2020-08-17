import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "./pages/home/HomePage";
import AboutPage from "./pages/about/AboutPage";
import LoginPage from "./pages/login/LoginPage";
import NotFound from "./pages/notFound/NotFound";
import RegisterPage from "./pages/register/RegisterPage";
import CategoryPage from "./pages/category/CategoryPage";
import ProductPreviewPage from "./pages/productPreview/ProductPreviewPage";

class Routes extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/:slug" exact component={CategoryPage} />
          <Route
            path="/product/:slug"
            exact
            component={ProductPreviewPage}
          />
          <Route path="/about" component={AboutPage} />
          <Route path="/register" component={RegisterPage} />
          <Route path="/login" component={LoginPage} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;

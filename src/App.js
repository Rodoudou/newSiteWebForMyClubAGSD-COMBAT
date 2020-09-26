import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Nav from "./components/nav";
import Menu from './components/menu'
import Home from './containers/home';
import Contact from './containers/contact';
import Footer from './components/footer'
import Inscription from "./containers/inscription";

import "./App.css";

function App() {
  return (
    <Router>
      <Nav/>
      <Menu/>
      <Switch>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route path="/contact">
          <Contact/>
        </Route>
        <Route path="/inscription">
          <Inscription/>
        </Route>
      </Switch>
      <Footer/>
    </Router>
  );
}

export default App;

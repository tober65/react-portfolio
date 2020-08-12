import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Infopage from './components/Infopage';
import Portfoliopage from './components/Portfoliopage';
import Contactpage from "./components/Contactpage";

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Link to="/">Home</Link>
          <br />
          <Link to="/contact">Contact</Link>
          <br />
          <Link to="/portfolio">Portfolio</Link>
          <hr />
          <Switch>
            <Route exact path="/">
              <Infopage />
            </Route>
            <Route path="/contact">
              <Contactpage />
          </Route>
            <Route path="/portfolio">
              <Portfoliopage />
            </Route>
          </Switch>
        </div>
      </Router>

      <hr />
      Copyright 2020 Timothy Ober


    </div>
  );
}

export default App;

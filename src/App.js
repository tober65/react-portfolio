import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Infopage from './components/Infopage';
import Portfoliopage from './components/Portfoliopage';
import Contactpage from "./components/Contactpage";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Header />
          <Switch>
            <Route exact path={["/", "/react-portfolio"]}>
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
      <Footer />
      


    </div>
  );
}

export default App;

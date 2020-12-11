import "./App.css";
import React, { useState } from "react";
import { Route, BrowserRouter as Router } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/navBar";
import MarketPlace from "./components/marketPlace/MarketPlace";
import BackOffice from "./components/backOffice/BackOffice";
import Footer from "./components/footer";

function App() {
  return (
    <div className='App'>
      <Router>
        <NavBar />
        <Route path='/market'>
          <MarketPlace />
        </Route>
        <Route path='/backoffice' exact>
          <BackOffice />
        </Route>
        <Footer />
      </Router>
    </div>
  );
}

export default App;

import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import About from "./About";
import Contact from "./Contact";
import Default from "./Default";
import Navbar from "./Navbar";
import Footer from "./Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <Switch>
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/" component={Default} />
        </Switch>
      </div>
      <Footer />
    </div>
  );
}

export default App;

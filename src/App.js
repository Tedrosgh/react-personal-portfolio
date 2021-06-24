import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import "./App.scss";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import Home from "./views/Home/Home";
import Contact from "./views/Contact/Contact";
import Profile from "./views/Profile/Profile";
import Service from "./views/Service/Service";

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Switch>
        <Route exact path="/">
          <div className="App">
            <h1>React Personal Portfolio</h1>
            <Home />
          </div>
        </Route>
        <Route exact path="/contact">
          <div className="contact">
            <h1>Contact</h1>
            <Contact />
          </div>
        </Route>
        <Route path="/profile">
          <div className="profile">
            <h1>Profile</h1>
            <Profile />
          </div>
        </Route>
        <Route path="/service">
          <div className="service">
            <h1>Services</h1>
            <Service />
          </div>
        </Route>
        <Redirect exact path="/" />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;

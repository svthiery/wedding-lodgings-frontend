import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ReactLoading from "react-loading";
import "../App.css";

import Header from "./Header";
import MainVideo from "./MainVideo";
import About from "./About";
import Map from "./Map";
import Pricing from "./Pricing";
import Buildings from "./Buildings";
import BuildingPage from "./BuildingPage";
import RoomPage from "./RoomPage";

function App() {
  return (
    <div className="app">
      <Router>
        <Header></Header>
        <Switch>
          <Route path="/">
            <MainVideo></MainVideo>
            <About></About>
            <Map></Map>
            <Pricing></Pricing>
            <Buildings></Buildings>
          </Route>
          {/* Come back and create shortened names of buildings to use for resources here */}
          <Route path="/:buildingId">
            <BuildingPage></BuildingPage>
          </Route>
          <Route path="/:roomId">
            <RoomPage></RoomPage>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

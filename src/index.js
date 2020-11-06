import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";

import "assets/scss/material-kit-react.scss?v=1.8.0";

//import Components from "views/Components/Components.js";

import LandingPage from "views/LandingPage/LandingPage.js";
import ProfilePage from "views/ProfilePage/ProfilePage.js";
import LoginPage from "views/LoginPage/LoginPage.js";
import LocationPage from "views/LocationPage/LocationPage.js";
import SchedulePage from "views/SchedulePage/SchedulePage.js";
import HistoryPage from "views/HistoryPage/HistoryPage.js";
import AboutUsPage from "views/AboutUsPage/AboutUsPage.js";
import DealsPage from "views/DealsPage/DealsPage.js";
import StandingsPage from "views/StandingsPage/StandingsPage.js";
import SeasonStatsPage from "views/SeasonStatsPage/SeasonStatsPage";

var hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
    <Switch>
      <Route path="/aboutus" component={AboutUsPage} />
      <Route path="/history" component={HistoryPage} />

      <Route path="/deals" component={DealsPage} />
      <Route path="/location" component={LocationPage} />
      <Route path="/schedule" component={SchedulePage} />
      <Route path="/standings" component={StandingsPage} />
      <Route path="/seasonstats" component={SeasonStatsPage} />

      <Route path="/landing-page" component={LandingPage} />
      <Route path="/profile-page" component={ProfilePage} />
      <Route path="/login-page" component={LoginPage} />

      <Route path="/" component={LandingPage} />
    </Switch>
  </Router>,
  document.getElementById("root")
);

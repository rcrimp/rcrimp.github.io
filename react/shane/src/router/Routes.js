import React from "react";
import Preview from "../views/Preview";
import HomeOne from "../views/all-home-version/HomeOne";
import HomeTwo from "../views/all-home-version/HomeTwo";
import HomeThree from "../views/all-home-version/HomeThree";
import HomeFour from "../views/all-home-version/HomeFour";
import NotFound from "../views/NotFound";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const Routes = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={Preview} />
          <Route path="/home-one" component={HomeOne} />
          <Route path="/home-two" component={HomeTwo} />
          <Route path="/home-three" component={HomeThree} />
          <Route path="/home-four" component={HomeFour} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    </>
  );
};

export default Routes;

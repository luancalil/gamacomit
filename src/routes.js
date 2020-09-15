import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from "./pages/Home/Home";
import Repositorios from "./pages/Repositorios/Repositorios";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home}></Route>
        <Route path="/repositorios" component={Repositorios}></Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;

import React, { Component } from "react";

import { Switch, Route, Link } from "react-router-dom";

export default props => {
  const { routes } = props;

  const Routes = routes.map((route, index) => {
    return (
      <Route key={index} exact={route.exact} path={route.path}>
        {route.component}
      </Route>
    );
  });

  return (
    <div>
      <Switch>{Routes}</Switch>
    </div>
  );
};

import React from "react";
import { Redirect, Route } from "react-router-dom";

function InitialRoute({ component: Component, ...restOfProps }) {
  let currentUser = localStorage.getItem("user");

  return (
    <Route
      {...restOfProps}
      render={(props) =>
        !currentUser ? <Component {...props} /> : <Redirect to="/dashboard" />
      }
    />
  );
}

export default InitialRoute;

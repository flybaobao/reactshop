import React from "react";
import { Redirect, Route } from "react-router-dom";

const PrivateRoute = ({ component: Component, ...rest }) => {
  <Route
    {...rest}
    render={(props) =>
      Boolean(localStorage["isLogin"]) ? (
        <Component {...props}></Component>
      ) : (
        <Redirect
          to={{
            pathname: "/login",
            state: { from: props.location },
          }}
        ></Redirect>
      )
    }
  ></Route>;
};
export { PrivateRoute };

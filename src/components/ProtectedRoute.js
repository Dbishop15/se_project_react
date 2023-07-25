// import { useContext } from "react";
import React from "react";
import { Redirect, Route } from "react-router-dom";

function ProtectedRoute({ children, isLoggedIn, ...props }) {
  return (
    <Route {...props}>{isLoggedIn ? children : <Redirect to={"/"} />}</Route>
  );
}
export default ProtectedRoute;

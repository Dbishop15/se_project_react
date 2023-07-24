// import { useContext } from "react";
import React from "react";
import { Redirect, Route } from "react-router-dom";
// import CurrentUserContext from "../contexts/CurrentUserContext";

function ProtectedRoute({ children, isLoggedIn, ...props }) {
  // const { isLoggedIn } = useContext(CurrentUserContext);
  return (
    <Route {...props}>{isLoggedIn ? children : <Redirect to={"/"} />}</Route>
  );
}
export default ProtectedRoute;

import { useContext } from "react";
import React from "react";
import { Redirect, Route } from "react-router-dom";
import CurrentUserContext from "../contexts/CurrentUserContext";

function ProtectedRoute({ children, ...props }) {
  const { loggedIn } = useContext(CurrentUserContext);
  return (
    <Route {...props}>{loggedIn ? children : <Redirect to={"/"} />}</Route>
  );
}
export default ProtectedRoute;

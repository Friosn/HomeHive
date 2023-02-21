import React from "react";
import { Outlet, Navigate } from "react-router";

const PrivateRoute = () => {
  const loggedIn = false;

  return loggedIn ? <Outlet /> : <Navigate to={"/sign-in"} />;
};

export default PrivateRoute;

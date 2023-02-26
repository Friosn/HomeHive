import React from "react";
import { Outlet, Navigate } from "react-router";
import { useAuthStatus } from "../hooks/useAuthStatus";
import SpinnerCSS from "./SpinnerCSS";
import SpinnerSVG from "./SpinnerSVG";

const PrivateRoute = () => {
  const { loggedIn, loading } = useAuthStatus();

  if (loading) {
    return <SpinnerCSS />;
  }

  return loggedIn ? <Outlet /> : <Navigate to={"/sign.in"} />;
};

export default PrivateRoute;

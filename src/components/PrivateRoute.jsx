import React from "react";
import { Outlet, Navigate } from "react-router";
import { useAuthStatus } from "../hooks/useAuthStatus";
import SpinnerCSS from "./SpinnerCSS";
import SpinnerSVG from "./SpinnerSVG";

const PrivateRoute = () => {
  const { loggedIn, loadingChecking } = useAuthStatus();

  if (loadingChecking) {
    return <SpinnerSVG />;
  }

  return loggedIn ? <Outlet /> : <Navigate to={"/profile"} />;
};

export default PrivateRoute;

import { getAuth, onAuthStateChanged } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router";

const NavBar = () => {
  const [pageState, setPageState] = useState("Sign in");
  const location = useLocation();
  /* console.log(location.pathname); */
  const navigate = useNavigate();

  //we'll get the auth to handle when we are authenticated in the app or we need to sign in (for the dynamism of the app)
  const auth = getAuth();
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setPageState("Profile");
      } else {
        setPageState("Sign in");
      }
    });
  }, [auth]);
  function pathRoute(route) {
    if (route === location.pathname) return true;
  }
  return (
    <header className="bg-white border-b shadow-sm sticky top-0 z-40">
      <nav className="flex justify-between items-center px-3 max-w-6xl max-h-64">
        <div>
          <img
            src="https://res.cloudinary.com/dfrmvbvdc/image/upload/v1675175894/Business%20Projects/HomeHive/02-definitive_juggoi.png"
            alt="logo"
            className="h-8 cursor-pointer"
            onClick={() => navigate("/")}
          />
        </div>
        <div>
          <ul className="flex space-x-10">
            <li
              className={`cursor-pointer py-3 text-sm font-semibold text-gray-500 border-b-[3px] border-b-transparent ${
                pathRoute("/") && "text-black border-b-orange-500"
              }`}
              onClick={() => navigate("/")}
            >
              Home
            </li>
            <li
              className={`cursor-pointer py-3 text-sm font-semibold text-gray-500 border-b-[3px] border-b-transparent ${
                pathRoute("/offers") && "text-black border-b-orange-500"
              }`}
              onClick={() => navigate("/offers")}
            >
              Offers
            </li>
            <li
              className={`cursor-pointer py-3 text-sm font-semibold text-gray-500 border-b-[3px] border-b-transparent ${
                (pathRoute("/sign-in") || pathRoute("/profile")) &&
                "text-black border-b-orange-500"
              }`}
              onClick={() => navigate("/profile")}
            >
              {pageState}
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;

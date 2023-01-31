import React from "react";
import { useLocation, useNavigate } from "react-router";

const NavBar = () => {
  const location = useLocation();
  /* console.log(location.pathname); */
  const navigate = useNavigate();
  function pathRoute(route) {
    if (route === location.pathname) return true;
  }
  return (
    <header className="bg-white border-b shadow-sm sticky top-0">
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
                pathRoute("/") && "text-black border-b-orange-400"
              }`}
              onClick={() => navigate("/")}
            >
              Home
            </li>
            <li
              className={`cursor-pointer py-3 text-sm font-semibold text-gray-500 border-b-[3px] border-b-transparent ${
                pathRoute("/offers") && "text-black border-b-orange-400"
              }`}
              onClick={() => navigate("/offers")}
            >
              Offers
            </li>
            <li
              className={`cursor-pointer py-3 text-sm font-semibold text-gray-500 border-b-[3px] border-b-transparent ${
                pathRoute("/sign-in") && "text-black border-b-orange-400"
              }`}
              onClick={() => navigate("/sign-in")}
            >
              Sign in
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;

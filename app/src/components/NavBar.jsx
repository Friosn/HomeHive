import React from "react";

const NavBar = () => {
  return (
    <div>
      <header>
        <nav class="flex justify-between items-center px-3 max-w-6xl mx-auto max-h-64">
          <div>
            <img
              src="https://res.cloudinary.com/dfrmvbvdc/image/upload/v1675103792/Business%20Projects/HomeHive/svg-xml_base64_PHN2ZyBkYXRhLXYtMmNiNTdkYTA9IiIgdmVyc2lvbj0iMS4wIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvM-removebg-preview-trimmy_fcpb2f.png"
              alt="logo"
              class=""
            />
          </div>
          <div>
            <ul class="flex space-x-10">
              <li>Home</li>
              <li>Offers</li>
              <li>Sign in</li>
            </ul>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default NavBar;

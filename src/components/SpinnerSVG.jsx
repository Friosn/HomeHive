import React from "react";

import spinnerSquare from "../assets/svg/spinnerSquare.svg";
const SpinnerSVG = () => {
  return (
    <div className="bg-black bg-opacity-50 flex items-center jsutify-center fixed left-0 right-0 bottom-0 z-50">
      <div>
        <img src={spinnerSquare} alt="Loading..." className=" h-24" />
      </div>
    </div>
  );
};

export default SpinnerSVG;

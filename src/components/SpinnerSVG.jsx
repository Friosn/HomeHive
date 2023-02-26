import React from "react";
import spinner from "../assets/svg/spinner.svg";
import spinnerSquare from "../assets/svg/spinnerSquare.svg";
const SpinnerSVG = () => {
  return (
    <div>
      <div>
        <img src={spinnerSquare} alt="Loading..." className=" h-24" />
      </div>
    </div>
  );
};

export default SpinnerSVG;

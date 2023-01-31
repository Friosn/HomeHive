import React from "react";

import { FcGoogle } from "react-icons/fc";

const Auth = () => {
  return (
    <button className="flex items-center justify-center w-full bg-red-700 text-white px-7 py-3 uppercase text-sm font-medium shadow-md hover:bg-red-800 hover:shadow-lg active:bg-red-900 active:shadow-xl transition duration-200 ease-in-out rounded">
      <FcGoogle className="text-2xl bg-white rounded-full mr-2" />
      Continue with Google
    </button>
  );
};

export default Auth;

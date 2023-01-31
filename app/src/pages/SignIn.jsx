import React, { useState } from "react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

const SignIn = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [showPass, setShowPass] = useState(false);
  const { email, password } = formData;
  function onChange(e) {
    setFormData((previousState) => ({
      ...previousState,
      [e.target.id]: e.target.value,
    }));
  }

  return (
    <section className="">
      <h1 className="text-3xl text-center mt-6 font-bold">Sign In</h1>
      <div className="flex justify-center flex-wrap items-center px-6 py-12 max-w-6xl mx-auto">
        <div className="md:w-[67%] lg:w-[50%] mb-12 md:mb-6">
          <img
            src="https://res.cloudinary.com/dfrmvbvdc/image/upload/v1675181014/Business%20Projects/HomeHive/maria-oswalt-itDHJmDTO4I-unsplash_uv3odi.jpg"
            alt="welcome"
            className="w-full rounded-2xl"
          />
        </div>
        <div className="w-full md:w-[67%] lg:w-[40%] lg:ml-10">
          <form className="">
            <div>
              <input
                type="email"
                id="email"
                value={email}
                onChange={onChange}
                placeholder="Email address"
                className="w-full rounded px-4 py-2 text-xl text-gray-700 bg-white border-gray-300 transition ease-in-out"
              />
            </div>
            <div className="relative">
              <input
                type={showPass ? "text" : "password"}
                id="password"
                value={password}
                onChange={onChange}
                className="w-full ring-2 rounded-2xl"
              />
              {showPass ? (
                <AiFillEyeInvisible className="absolute right-3 top-3 text-xl cursor-pointer" />
              ) : (
                <AiFillEye className="absolute right-3 top-3 text-xl cursor-pointer" />
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default SignIn;

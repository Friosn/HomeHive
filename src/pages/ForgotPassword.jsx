import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import GAuth from "../components/GAuth";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");

  function onChange(e) {
    setEmail(e.target.value);
  }

  async function onSubmit(e) {
    e.preventDefault();
    try {
      const auth = getAuth();
      await sendPasswordResetEmail(auth, email);
      toast.success("Email successfully sent");
    } catch (error) {
      toast.error("We could not find the email address");
    }
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
          <form onSubmit={onSubmit}>
            <div>
              <input
                type="email"
                id="email"
                value={email}
                onChange={onChange}
                placeholder="Email address"
                className="w-full rounded px-4 py-2 text-xl text-gray-700 bg-white border-gray-300 transition ease-in-out mb-6"
              />
            </div>

            <div className="flex justify-between mt-3 whitespace-nowrap text-sm sm:text-lg">
              <p className="mb-6">
                <Link
                  to={"/sign-up"}
                  className="hover:text-[color:var(--bright-yw)] transition duration-200 ease-in-out ml-1" //Testing with variable theme (not definitive)
                >
                  Register here
                </Link>
              </p>

              <p>
                <Link
                  to={"/sign-in"}
                  className="hover:text-[color:var(--highlight-warm)] transition duration-200 ease-in-out" //Testing with variable theme (not definitive)
                >
                  Sign in instead
                </Link>
              </p>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white px-7 py-3 text-sm font-medium uppercase rounded shadow-md hover:bg-blue-700 transition duration-200 ease-in-out hover:shadow-xl active:bg-blue-800"
            >
              Send reset password
            </button>
          </form>

          <div className="my-4 items-center flex before:border-t  before:flex-1 before:border-gray-400 after:border-t  after:flex-1 after:border-gray-400">
            <p className="text-center font-semibold mx-4">OR</p>
          </div>
          <GAuth />
        </div>
      </div>
    </section>
  );
};

export default ForgotPassword;

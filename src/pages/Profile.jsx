import React, { useState } from "react";

const Profile = () => {
  const [formData, setFormData] = useState({
    name: "Fran",
    email: "fran@gmail.com",
  });

  const { name, email } = formData;
  return (
    <>
      <section className="max-w-6xl mx-auto flex justify-center items-center flex-col">
        <h1 className="text-3xl text-center mt-6 font-bold">My Profile</h1>
        <div className="w-full md:w-[50] mt-6 px-3">
          <form>
            {/* Name Input */}
            <input
              type="text"
              id="profileName"
              value={name}
              disabled
              className=" mb-4 w-full px-4 py-2 text-xl text-gray-700 bg-white border border-gray-300 rounded transition ease-in-out"
            />
            {/* Email Input */}
            <input
              type="text"
              id="profileName"
              value={email}
              disabled
              className=" mb-4 w-full px-4 py-2 text-xl text-gray-700 bg-white border border-gray-300 rounded transition ease-in-out"
            />
          </form>
        </div>
      </section>
    </>
  );
};

export default Profile;

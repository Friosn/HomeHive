import { getAuth, updateProfile } from "firebase/auth";
import React, { useState } from "react";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../firebase";

const Profile = () => {
  const auth = getAuth();
  const navigate = useNavigate();
  const [editProfile, setEditProfile] = useState(false);
  const [formData, setFormData] = useState({
    name: auth.currentUser.displayName,
    email: auth.currentUser.email,
  });
  const { name, email } = formData;

  const logOut = () => {
    auth.signOut();
    navigate("/sign-in");
  };

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  };

  async function onSubmit() {
    try {
      if (auth.currentUser.displayName !== name) {
        //here we update the name in the firebase auth
        await updateProfile(auth.currentUser, {
          displayName: name,
        });
        //NOW we need to update the name in the firestore

        const docRef = doc(db, "users", auth.currentUser.uid);
        await updateDoc(docRef, {
          name: name,
        });
      }
      toast.success("Profile successfully updated");
    } catch (error) {
      toast.error("Could not save the changes on the profile");
    }
  }
  return (
    <>
      <section className="max-w-6xl mx-auto flex justify-center items-center flex-col">
        <h1 className="text-3xl text-center mt-6 font-bold">My Profile</h1>
        <div className="w-full md:w-[50] mt-6 px-3">
          <form>
            {/* Name Input */}
            <input
              type="text"
              id="name"
              value={name}
              disabled={!editProfile}
              onChange={onChange}
              className={`mb-6 w-full px-4 py-2 text-xl text-gray-700 bg-white border border-gray-300 rounded transition ease-in-out ${
                editProfile && "bg-red-100 focus:bg-red-200"
              }`}
            />
            {/* Email Input */}
            <input
              type="text"
              id="profileName"
              value={email}
              disabled
              className=" mb-6 w-full px-4 py-2 text-xl text-gray-700 bg-white border border-gray-300 rounded transition ease-in-out"
            />

            <div className="flex justify-between whitespace-nowrap text-sm sm:text-lg mb-6">
              <p
                onClick={() => {
                  editProfile && onSubmit();
                  setEditProfile((prevState) => !prevState);
                }}
                className="text-blue-600 flex items-center hover:text-blue-800 transition duration-200 ease-in-out cursor-pointer"
              >
                {editProfile ? "Apply changes" : "Edit your profile"}
              </p>
              <p
                onClick={logOut}
                className="text-red-600 flex items-center hover:text-red-800 transition duration-200 ease-in-out cursor-pointer"
              >
                Sign out
              </p>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default Profile;

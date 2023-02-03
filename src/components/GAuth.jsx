import React from "react";

import { FcGoogle } from "react-icons/fc";

import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { toast } from "react-toastify";
import { doc, getDoc, setDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../firebase";
import { Navigate, useNavigate } from "react-router";

const GAuth = () => {
  const navigate = useNavigate();
  async function onGoogleClick() {
    try {
      const auth = getAuth();
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      const user = result.user;

      //we gotta check if the user does already exist!
      const docRef = doc(db, "users", user.uid); //we need to compare the uid of the user with the uid's of the collection in firebase, so we do this reference

      const docSnap = await getDoc(docRef); //now this is going to retur a promise, it's gonna check all the docs in the collection, and if it's an uid avaiable, it's gonna be saved on "getDoc"
      if (!docSnap.exists()) {
        await setDoc(docRef, {
          name: user.displayName,
          email: user.email,
          timestamp: serverTimestamp(),
        });
      }
      toast.success("Successfully logged in!");
      navigate("/");
    } catch (error) {
      toast.error("There was an error with the Google Authentication");
    }
  }
  return (
    <button
      type="button"
      onClick={onGoogleClick}
      className="flex items-center justify-center w-full bg-red-700 text-white px-7 py-3 uppercase text-sm font-medium shadow-md hover:bg-red-800 hover:shadow-lg active:bg-red-900 active:shadow-xl transition duration-200 ease-in-out rounded"
    >
      <FcGoogle className="text-2xl bg-white rounded-full mr-2" />
      Continue with Google
    </button>
  );
};

export default GAuth;

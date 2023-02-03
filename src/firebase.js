// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
  apiKey: "AIzaSyB7NTbHpCrxB4r186eIHFHKTGMTrIqyDsQ",
  authDomain: "homehive-173a4.firebaseapp.com",
  projectId: "homehive-173a4",
  storageBucket: "homehive-173a4.appspot.com",
  messagingSenderId: "186751173649",
  appId: "1:186751173649:web:1a31b6568e7c04ea0f1db0",
};

initializeApp(firebaseConfig);
export const db = getFirestore();

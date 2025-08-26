// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDaiNwi8m91P4ZkY1kdtboWBzJ56Z6C188",
  authDomain: "gpt-flix-a37cb.firebaseapp.com",
  projectId: "gpt-flix-a37cb",
  storageBucket: "gpt-flix-a37cb.firebasestorage.app",
  messagingSenderId: "582559430806",
  appId: "1:582559430806:web:db787bf3035be888e6eab7",
  measurementId: "G-5196YV4XZ9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
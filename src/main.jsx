import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCt5DM4p_cb7owTve_-AQVWm_CPDT5kf-M",
  authDomain: "gorras-mk.firebaseapp.com",
  projectId: "gorras-mk",
  storageBucket: "gorras-mk.appspot.com",
  messagingSenderId: "989200089139",
  appId: "1:989200089139:web:f14b6b7686d6cd8eef2346",
};

// Initialize Firebase
initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById("root")).render(<App />);

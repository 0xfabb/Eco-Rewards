import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
    apiKey: "AIzaSyCjWhfwxaFOFo5aOWYDTYYroUkarF33UmA",
    authDomain: "eco-rewards-63f12.firebaseapp.com",
    projectId: "eco-rewards-63f12",
    storageBucket: "eco-rewards-63f12.firebasestorage.app",
    messagingSenderId: "281124723510",
    appId: "1:281124723510:web:bea5e4d1e683498934b197",
    measurementId: "G-D8QXW51HM4",
    databaseURL:"https://eco-rewards-63f12-default-rtdb.firebaseio.com",
  };

  export const app = initializeApp(firebaseConfig);
  export const auth = getAuth(app);
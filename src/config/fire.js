import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAtmeiVkBdgGUqfjKIKFy-43z5fEmsN-P8",
  authDomain: "finals-firebase.firebaseapp.com",
  databaseURL: "https://finals-firebase-default-rtdb.firebaseio.com",
  projectId: "finals-firebase",
  storageBucket: "finals-firebase.appspot.com",
  messagingSenderId: "703594898874",
  appId: "1:703594898874:web:fcc7e4a53fdc4d18bda983"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
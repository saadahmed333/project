import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword,createUserWithEmailAndPassword  } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAvuAsNy5Cl84s_IIcrkxjU41CezLZ7jEQ",
    authDomain: "cydo-media.firebaseapp.com",
    projectId: "cydo-media",
    storageBucket: "cydo-media.appspot.com",
    messagingSenderId: "863554123581",
    appId: "1:863554123581:web:f70663c64a0e8d7aaff754",
    measurementId: "G-PKELSFENF9"
  };

const app = initializeApp(firebaseConfig);
export {getAuth , signInWithEmailAndPassword, createUserWithEmailAndPassword }
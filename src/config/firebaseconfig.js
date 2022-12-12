// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB9yvqaMSDBgiqcdTDif9stE-QgHT-kMGI",
  authDomain: "block-app-576a1.firebaseapp.com",
  projectId: "block-app-576a1",
  storageBucket: "block-app-576a1.appspot.com",
  messagingSenderId: "625954638400",
  appId: "1:625954638400:web:bfc8378a1829ad2dc76da5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export {getAuth , signInWithEmailAndPassword}
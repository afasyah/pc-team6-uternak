// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAMIdyaBpyEsgoHxE_flzKVSeIktgMRFf4",
  authDomain: "uternak-9a8b2.firebaseapp.com",
  projectId: "uternak-9a8b2",
  storageBucket: "uternak-9a8b2.appspot.com",
  messagingSenderId: "913373662943",
  appId: "1:913373662943:web:b4d9ad4635f95b92ec636a",
  measurementId: "G-WHZZ9K7CHP",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBxSRH4jUBU3n5MZufNE9S_iIQqpWSJaVs",
  authDomain: "doc-d-fe9f2.firebaseapp.com",
  projectId: "doc-d-fe9f2",
  storageBucket: "doc-d-fe9f2.appspot.com",
  messagingSenderId: "537311715950",
  appId: "1:537311715950:web:670c3f25ef8d895a06bc7f",
  measurementId: "G-2G3343H9Z8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
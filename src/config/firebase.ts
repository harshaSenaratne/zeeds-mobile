// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDTzIMv901rKwo6PTNB8X-zu7O3DOUNKFg",
  authDomain: "zeeds-app-9c2fc.firebaseapp.com",
  projectId: "zeeds-app-9c2fc",
  storageBucket: "zeeds-app-9c2fc.appspot.com",
  messagingSenderId: "976521892930",
  appId: "1:976521892930:web:6e5b591a0ec2c8f69109db",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;

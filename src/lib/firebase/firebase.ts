// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCjUUbGx_btw7CmL7mcDXaurPwjFKfzz7U",
  authDomain: "olaberglundxyz.firebaseapp.com",
  projectId: "olaberglundxyz",
  storageBucket: "olaberglundxyz.appspot.com",
  messagingSenderId: "365245000118",
  appId: "1:365245000118:web:e733b376d0d75aad103917",
  measurementId: "G-8WMXT65C56"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app)
export const provider = new GoogleAuthProvider();
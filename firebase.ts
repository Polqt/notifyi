// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA1ndKz4QXx7L7dr63-BTCd4qNUXR2VBtI",
  authDomain: "notifyi-44faa.firebaseapp.com",
  projectId: "notifyi-44faa",
  storageBucket: "notifyi-44faa.firebasestorage.app",
  messagingSenderId: "749280966816",
  appId: "1:749280966816:web:1f0f9621817cbd6879b1c5",
  measurementId: "G-WY4NP24L1F"
};

// Initialize Firebase
const app = getApps.length === 0 ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore(app);
const analytics = getAnalytics(app);

export { db };
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAUhhATiEXHGHBpq3Znllb1VZKRpiwx_6k",
  authDomain: "the-news-dragon-client-6bbed.firebaseapp.com",
  projectId: "the-news-dragon-client-6bbed",
  storageBucket: "the-news-dragon-client-6bbed.appspot.com",
  messagingSenderId: "1052477217349",
  appId: "1:1052477217349:web:03ae3e788aab7415a6612c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app
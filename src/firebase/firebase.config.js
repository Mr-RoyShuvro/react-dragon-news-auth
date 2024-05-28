// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBB0kCtf01XpNG0_eUoTb6tyVaup1dyGUc",
  authDomain: "react-dragon-news-auth-f8c82.firebaseapp.com",
  projectId: "react-dragon-news-auth-f8c82",
  storageBucket: "react-dragon-news-auth-f8c82.appspot.com",
  messagingSenderId: "948859057247",
  appId: "1:948859057247:web:a4675bdf362ea5b5eed7ea"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
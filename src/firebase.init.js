// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBfSjJGsLmmGPXqaGxmpxb9vnzhX5PqumQ",
  authDomain: "user-details-site.firebaseapp.com",
  projectId: "user-details-site",
  storageBucket: "user-details-site.appspot.com",
  messagingSenderId: "278694246258",
  appId: "1:278694246258:web:f6499804a37e65a8020feb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export default auth;
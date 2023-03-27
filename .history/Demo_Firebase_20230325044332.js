// TODO2: Rework this file accordingly
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBKVbFq7imkXQ4QVuymiTb5RMFig-Rz8yI",
  authDomain: "major-project-d043e.firebaseapp.com",
  projectId: "major-project-d043e",
  storageBucket: "major-project-d043e.appspot.com",
  messagingSenderId: "474152566243",
  appId: "1:474152566243:web:8b698fbc9cf22a5f1c34d6",
  measurementId: "G-6Y7PQ3JLTB",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

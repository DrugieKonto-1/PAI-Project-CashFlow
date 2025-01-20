// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB05valxk7x_Tk3qyPa7GeDhXlVN3ElfzA",
  authDomain: "cashflow-d95ad.firebaseapp.com",
  projectId: "cashflow-d95ad",
  storageBucket: "cashflow-d95ad.firebasestorage.app",
  messagingSenderId: "1007897494041",
  appId: "1:1007897494041:web:cb116e90f68788a6c9a088"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { app, auth };
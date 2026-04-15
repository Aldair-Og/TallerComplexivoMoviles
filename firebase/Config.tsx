// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD8hImN9INn3RsbZ7FYUOnAflV6iQ0lR6I",
  authDomain: "taller-app-f5f86.firebaseapp.com",
  projectId: "taller-app-f5f86",
  storageBucket: "taller-app-f5f86.firebasestorage.app",
  messagingSenderId: "279600706127",
  appId: "1:279600706127:web:20e44b181cf9e101de303a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const Auth = getAuth(app);
export const db = getDatabase(app);
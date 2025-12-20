// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyARnLKRIEY9uo045u-Slz5uXwI_2Oy0YQA",
  authDomain: "todo-app-62500.firebaseapp.com",
  projectId: "todo-app-62500",
  storageBucket: "todo-app-62500.firebasestorage.app",
  messagingSenderId: "357195963282",
  appId: "1:357195963282:web:8c67f15020b6392961bf4b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app)
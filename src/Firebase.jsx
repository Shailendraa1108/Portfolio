// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAj_f7SZ3Dv0J-GsahcMcykBz2NQAstBGI",
  authDomain: "shialendra-portfolio.firebaseapp.com",
  projectId: "shialendra-portfolio",
  storageBucket: "shialendra-portfolio.appspot.com",
  messagingSenderId: "225278338155",
  appId: "1:225278338155:web:6fdd3cd29858c4ea007d2e"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db= getFirestore()
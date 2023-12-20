// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyASv_4dMOY1flryXNTaYlGIYNv1CL_-NL0",
  authDomain: "react-course-d772f.firebaseapp.com",
  projectId: "react-course-d772f",
  storageBucket: "react-course-d772f.appspot.com",
  messagingSenderId: "524527716018",
  appId: "1:524527716018:web:5329df9f6cf40e47016bab",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
 

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();

// Config firestore db
export const db = getFirestore(app);
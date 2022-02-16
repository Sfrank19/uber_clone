// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {GoogleAuthProvider, getAuth} from 'firebase/auth'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCdYToDCLJ8c_C3wVvX1To0lcqYQqkvotw",
  authDomain: "uber-clone-e4591.firebaseapp.com",
  projectId: "uber-clone-e4591",
  storageBucket: "uber-clone-e4591.appspot.com",
  messagingSenderId: "435535923243",
  appId: "1:435535923243:web:6e3e88c57852fd1e32826e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider()
const auth = getAuth()

export {app, provider, auth }
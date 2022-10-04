// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import{getAuth} from "firebase/auth";
import {getFirestore} from 'firebase/firestore';
import {getStorage} from 'firebase/storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
 
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBAvnJ0H1EhehbmyMXjfVnz-qK71RT-C5Y",
  authDomain: "pool-czk-code.firebaseapp.com",
  projectId: "pool-czk-code",
  storageBucket: "pool-czk-code.appspot.com",
  messagingSenderId: "470820991914",
  appId: "1:470820991914:web:e29e62c77d5e465e9eb1d3",
  measurementId: "G-3XPZ6S529L"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage=getStorage(app);
export const db=getFirestore(app);
export const auth=getAuth(app);
export default app;
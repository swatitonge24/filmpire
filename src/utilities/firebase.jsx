

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyANJDW4g6WsXG2sd6644BzmRQ54oC3sIEk",
  authDomain: "filmpire-4206e.firebaseapp.com",
  projectId: "filmpire-4206e",
  storageBucket: "filmpire-4206e.appspot.com",
  messagingSenderId: "1028803910904",
  appId: "1:1028803910904:web:41f8d1d39a5e7bf32f6f0d",
  measurementId: "G-XF1M27YLBV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
 export const auth = getAuth();
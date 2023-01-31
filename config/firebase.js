// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC307_IX1KgxVvF9crXPL_dSeoWyQAdtfE",
  authDomain: "aligarh-f1797.firebaseapp.com",
  projectId: "aligarh-f1797",
  storageBucket: "aligarh-f1797.appspot.com",
  messagingSenderId: "338899544341",
  appId: "1:338899544341:web:446ab02250edf7e9a1e11c",
  measurementId: "G-8F3BC9VT2V"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// const analytics = getAnalytics(app);
export const storage = getStorage(app);
export const db = getFirestore(app);

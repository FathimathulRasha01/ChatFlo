import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_MESSAGING_APP_ID,
};

// Initializing Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()


// VITE_FIREBASE_KEY=AIzaSyDbq3iE9YE3nGM_j4JNRnkgwM9hVnwBehg
// VITE_FIREBASE_AUTH_DOMAIN=chatflo-e3d44.firebaseapp.com
// VITE_FIREBASE_PROJECT_ID=chatflo-e3d44
// VITE_FIREBASE_STORAGE_BUCKET=chatflo-e3d44.appspot.com
// VITE_FIREBASE_MESSAGING_SENDER_ID=1055627710645
// VITE_FIREBASE_APP_ID=
// VITE_FIREBASE_MEASUREMENT_ID=
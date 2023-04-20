// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB1oLXPxBId6GP-KcmLO_USUPDUqaAO7_Y",
  authDomain: "cryptobase-fb390.firebaseapp.com",
  projectId: "cryptobase-fb390",
  storageBucket: "cryptobase-fb390.appspot.com",
  messagingSenderId: "597137949342",
  appId: "1:597137949342:web:272b4beccc71181466b18f",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);

export default app;

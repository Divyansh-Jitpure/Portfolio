// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDMkfOo70LMn1eAUqWAKWRVlaeg-bENu0I",
  authDomain: "divyansh-jitpure.firebaseapp.com",
  projectId: "divyansh-jitpure",
  storageBucket: "divyansh-jitpure.appspot.com",
  messagingSenderId: "390880060087",
  appId: "1:390880060087:web:3069a4121af2ddc2032332",
  measurementId: "G-5YJRXWVS54",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);

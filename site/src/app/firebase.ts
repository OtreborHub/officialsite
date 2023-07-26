// Import the functions you need from the SDKs you need
import { FirebaseApp, initializeApp } from "firebase/app";
import { Analytics, getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBS7sBAXtc6MLZWIE9mRoMR-jMsPW67-Sw",
  authDomain: "officialsite-d9a4b.firebaseapp.com",
  projectId: "officialsite-d9a4b",
  storageBucket: "officialsite-d9a4b.appspot.com",
  messagingSenderId: "615868588415",
  appId: "1:615868588415:web:e70dd551d23dc561d8fa4a",
  measurementId: "G-F0L3WX97XS"
};

var app : FirebaseApp
var analytics : Analytics

// Initialize Firebase
function initFirebase() {
    app = initializeApp(firebaseConfig);
    analytics = getAnalytics(app);
}

export {initFirebase, app, analytics }
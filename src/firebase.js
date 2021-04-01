// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyBZDELyp7Ta32d-VMPG_LbT_xcJUNYwDos",
  authDomain: "challenge-ea7e6.firebaseapp.com",
  projectId: "challenge-ea7e6",
  storageBucket: "challenge-ea7e6.appspot.com",
  messagingSenderId: "285043742343",
  appId: "1:285043742343:web:633adb23aa8348803c8a22",
  measurementId: "G-KPMQQB7WZM",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
export { db, auth };

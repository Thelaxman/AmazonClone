import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCP25M5c6Wx_1lsM8-cp0p98Heq_PwzF4M",
  authDomain: "clone-c9314.firebaseapp.com",
  projectId: "clone-c9314",
  storageBucket: "clone-c9314.appspot.com",
  messagingSenderId: "918261441366",
  appId: "1:918261441366:web:fa5c6c62c1c908c110acf7",
  measurementId: "G-XB738BNVK8",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };

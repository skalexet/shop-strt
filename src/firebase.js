import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBCTu5RvDv1fhJ2D24C5b3wB4pc3Oh_1oA",
  authDomain: "startshop-5b19f.firebaseapp.com",
  databaseURL: "https://startshop-5b19f.firebaseio.com",
  projectId: "startshop-5b19f",
  storageBucket: "startshop-5b19f.appspot.com",
  messagingSenderId: "146186977624",
  appId: "1:146186977624:web:dca533d210ca5dbc4ea52d",
  measurementId: "G-ZWPFFQRECK"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };

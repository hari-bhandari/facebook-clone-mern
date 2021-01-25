import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBDKrpNRqF3Bf5Y2NxyX-wDmfU6jKKuUf0",
  authDomain: "facebook702.firebaseapp.com",
  databaseURL: "https://facebook702.firebaseio.com",
  projectId: "facebook702",
  storageBucket: "facebook702.appspot.com",
  messagingSenderId: "747913944398",
  appId: "1:747913944398:web:793fcc7d64eda07eb3521f",
  measurementId: "G-T3YSJXJFBG"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;

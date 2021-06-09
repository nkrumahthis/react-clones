import firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyAVxU6rH53CNS88aHn9NeHuKqe0395qMjU",
    authDomain: "clones-81b78.firebaseapp.com",
    projectId: "clones-81b78",
    storageBucket: "clones-81b78.appspot.com",
    messagingSenderId: "528571263130",
    appId: "1:528571263130:web:25bdb5ce13e6d15261d723",
    measurementId: "G-BYBT6BX5PW"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth, provider };
  export default db;
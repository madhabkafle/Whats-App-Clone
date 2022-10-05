import firebase from "firebase/compat/app";
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';
const firebaseConfig = {
    apiKey: "AIzaSyCQas82S6f0sDFSB604a6PQfMVCUWes6Ss",
    authDomain: "whatsapp-clone-16eee.firebaseapp.com",
    projectId: "whatsapp-clone-16eee",
    storageBucket: "whatsapp-clone-16eee.appspot.com",
    messagingSenderId: "601226177468",
    appId: "1:601226177468:web:5697287b2ff7caf78b59b9",
    measurementId: "G-FNN3CNR56Y"
  };

  const app =firebase.initializeApp(firebaseConfig);
  const auth = firebase.auth();

  const db = app.firestore();

    const googleProvider = new firebase.auth.GoogleAuthProvider();
    export {auth, googleProvider};
    export default db;
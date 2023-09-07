import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";
import "firebase/compat/storage";

const firebaseConfig = {
  apiKey: "AIzaSyB4SrRcF4SpTSSJU3N88OpT8CeOXMiPU5M",
  authDomain: "linkedin-clone-28451.firebaseapp.com",
  projectId: "linkedin-clone-28451",
  storageBucket: "linkedin-clone-28451.appspot.com",
  messagingSenderId: "340384745818",
  appId: "1:340384745818:web:85dde09de3b7b25a670b63",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();

const storage = firebase.storage();

export { auth, provider, storage };

export default db;

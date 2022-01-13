import firebase from "firebase/compat/app"
import "firebase/compat/auth"
import "firebase/compat/firestore"
import "firebase/compat/storage"


const firebaseConfig = {
  apiKey: "AIzaSyBFGiXROE6wtIziefxedoIT8Kf2FCDQDWo",
  authDomain: "disney-clone-cc9c3.firebaseapp.com",
  projectId: "disney-clone-cc9c3",
  storageBucket: "disney-clone-cc9c3.appspot.com",
  messagingSenderId: "483793932119",
  appId: "1:483793932119:web:ca9b51883937709e473812",
  measurementId: "G-6FH11XW301"
};


const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;


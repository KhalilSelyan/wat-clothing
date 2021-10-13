import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const config = {
  apiKey: "AIzaSyB7PW5GKN1t45tcnz-9Taq1xHmafXx7xHk",
  authDomain: "wat-db.firebaseapp.com",
  projectId: "wat-db",
  storageBucket: "wat-db.appspot.com",
  messagingSenderId: "97267834195",
  appId: "1:97267834195:web:d9ddb5bdc7d9e50c7155a6",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

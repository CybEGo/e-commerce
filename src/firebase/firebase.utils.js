import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyAe2C3rkNLtIlNRH4TCIPIaSaeTsIhUoy8",
  authDomain: "crwn-db-3fdf6.firebaseapp.com",
  databaseURL: "https://crwn-db-3fdf6.firebaseio.com",
  projectId: "crwn-db-3fdf6",
  storageBucket: "",
  messagingSenderId: "424751918259",
  appId: "1:424751918259:web:bd191fcbacff78536e14c6",
  measurementId: "G-LFPX2EZJW9"
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
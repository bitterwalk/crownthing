import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyD2SIpBSysdB4-NLBGgI27fvNc5VuL-lR0",
    authDomain: "crwnthng-db.firebaseapp.com",
    databaseURL: "https://crwnthng-db.firebaseio.com",
    projectId: "crwnthng-db",
    storageBucket: "crwnthng-db.appspot.com",
    messagingSenderId: "1024957728218",
    appId: "1:1024957728218:web:f9307bfcf26780f3906ce3",
    measurementId: "G-73731YRV7J"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
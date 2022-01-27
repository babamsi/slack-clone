import firebase from 'firebase/compat/app'
import 'firebase/auth';
import {getFirestore} from 'firebase/firestore'
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyDp0Kf1WvWwABNhaz3hIcOao20sMjzPEVU",
    authDomain: "slack-clone-96df9.firebaseapp.com",
    projectId: "slack-clone-96df9",
    storageBucket: "slack-clone-96df9.appspot.com",
    messagingSenderId: "521664725905",
    appId: "1:521664725905:web:40c45614a85a9f17df5030"
  };
firebase.initializeApp(firebaseConfig);
const db = getFirestore()
const aut = getAuth()
const provider = new GoogleAuthProvider()
const SignInWithGoogle = () => signInWithPopup(aut, provider)

export {db, aut, provider, SignInWithGoogle}
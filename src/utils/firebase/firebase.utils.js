
// file structure: save all functions created based on firebase functions
// so only need to update this file when firebase update their methods

// config is used to connect this app to the app created in firebase console
import { initializeApp } from "firebase/app";
// authentication
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword } from "firebase/auth";
//firestore database
import{ getFirestore, doc, getDoc, setDoc } from "firebase/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCf9W02VN9LaSOhVQWBfKxmuYGZCMO763k",
  authDomain: "bellemoi-c0658.firebaseapp.com",
  projectId: "bellemoi-c0658",
  storageBucket: "bellemoi-c0658.appspot.com",
  messagingSenderId: "94285952285",
  appId: "1:94285952285:web:efdf41929551fc71bc9df4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
  prompt: 'select_account',
});

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider);

// create a firestore datebase
export const db = getFirestore()


// createUserDocumentFromAuth function
export const createUserDocumentFromAuth = async (userAuth, additionalInformation = {}) => {
  //create a docRef using user's unique id and look it up using getDoc func
  const userDocRef = doc(db, 'users', userAuth.uid)
  const userSnapshot = await getDoc(userDocRef)

  // if user data exists, return the user data ref
  // else set the doc
  if (!userSnapshot.exists()){
    const { displayName, email } = userAuth;
    const createAt = new Date ();
    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createAt,
        ...additionalInformation,
      })
    } catch (error) {
      console.log('error creating the user', error.message)
    }
  }
  return userDocRef;
};

// function 2
export const createAuthFromEmailAndPassword = async (email, password) => {
  if (!email || !password) return;
  return await createUserWithEmailAndPassword(auth, email, password)
}
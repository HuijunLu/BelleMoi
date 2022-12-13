// config is used to connect this app to the app created in firebase console
import { initializeApp } from "firebase/app";
// authentication
import { getAuth, signInWithRedirect,
  signInWithPopup, GoogleAuthProvider } from "firebase/auth";
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

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: 'select_account',
});

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

// create a firestore datebase
export const db = getFirestore()
// remember to setup the google sign in inside of firebase console
export const createUserDocumentFromAuth = async (userAuth) => {
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
        createAt
      })
    } catch (error) {
      console.log('error creating the user', error)
    }

  }
  return userDocRef;

};
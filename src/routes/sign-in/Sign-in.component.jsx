
import {
  createUserDocumentFromAuth,
  signInWithGooglePopup,
} from '../../utils/firebase/firebase.utils.js'

import SignUpForm from '../../components/sign-up-form/sign-up-form';

const SignIn = () => {
  const logGoogleUser = async() => {
    const response = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(response.user);
  }
  return (
    <div>
      <h1>This is the sign in page</h1>
      <button onClick={logGoogleUser}>login with google</button>
      <SignUpForm />
    </div>
  )
}

export default SignIn;
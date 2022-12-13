
import {
  createUserDocumentFromAuth,
  signInWithGooglePopup
} from '../../utils/firebase/firebase.utils.js'

const SignIn = () => {
  const logGoogleUser = async() => {
    const response = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(response.user);
  }
  return (
    <div>
      <h1>This is the sign in page</h1>
      <button onClick={logGoogleUser}>login with google</button>
    </div>
  )
}

export default SignIn;
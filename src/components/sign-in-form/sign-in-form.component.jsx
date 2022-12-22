import { useState } from 'react';

import FormInput from '../form-input/form-Input.component'
import Button from '../button/button.component'
// // import the current value of userContext
// import { UserContext } from '../../contexts/user.context'

import {
  signInWithGooglePopup,
  signInUserWithEmailAndPassword,
} from '../../utils/firebase/firebase.utils.js'

import './sign-in-form.styles.scss'


const defaultFormValues = {
  email: '',
  password:'',
}

const SignInForm = () => {

  const [formValues, setFormValues] = useState(defaultFormValues);
  const { email, password } = formValues;


  //get the current UserContext value: we only need the setCurrentUser func iin sign in form
  // const { setCurrentUser } = useContext(UserContext)

  const resetFormFields = () => {
    setFormValues(defaultFormValues);
  }

  const signInWithGoogle = async() => {
    await signInWithGooglePopup();
    console.log('sign in successfully!')
    resetFormFields()

  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({...formValues, [name] : value})
  }


  const handleSubmit = async(e) => {
    e.preventDefault()

    try {
      await signInUserWithEmailAndPassword(email, password)
      resetFormFields();
    } catch(error) {
      //switch statement
      switch(error.code) {
        case 'auth/wrong-password':
          alert('incorrect password for email');
          break;
        case 'auth/user-not-found':
          alert('no user associated with this email');
          break;
        default:
          console.log('error in sign in with password and email', error)
      }
    }

  }

  return (
    <div className='sign-up-container'>
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
        label='Email'
        type='email'
        required
        onChange={handleChange}
        name ='email'
        value ={email}
        />
        <FormInput
        label='Password'
        type='password'
        required
        onChange={handleChange}
        name ='password'
        value ={password}
        />
        <div className='buttons-container'>
          <Button type='submit'>SIGN IN</Button>
          {/* prevent default type = submit, need to clarify the type just button */}
          <Button type='button'ButtonType='google' onClick={signInWithGoogle}>GOOGLE SIGN IN</Button>
        </div>

      </form>

    </div>
  )

}

export default SignInForm;
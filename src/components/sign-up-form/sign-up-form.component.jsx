import {useState} from 'react';
import {
  createAuthFromEmailAndPassword,
  createUserDocumentFromAuth
} from '../../utils/firebase/firebase.utils.js'

import FormInput from '../form-input/form-Input.component'
import Button from '../button/button.component'
import './sign-up-form.styles.scss'

const defaultFormValues = {
  displayName: '',
  email: '',
  password:'',
  confirmPassword: ''
}

const SignUpForm = () => {

  const [formValues, setFormValues] = useState(defaultFormValues);
  const { displayName, email, password, confirmPassword} = formValues;

  const resetFormFields = () => {
    setFormValues(defaultFormValues);
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormValues({ ...formValues, [name]: value })
  }

 const handleSubmit = async (e) => {
  e.preventDefault();

  if(password !== confirmPassword) {
    alert('password do not match!');
    return;
  }

  try {
    const { user } = await createAuthFromEmailAndPassword(email, password);
    // need to pass in display name since the response from google createAuth doesn't have it
    await createUserDocumentFromAuth(user, { displayName })
    resetFormFields()
  }catch(error) {
    if(error.code === 'auth/email-already-in-use') {
      console.log('Cannot create user, email already in use')
    } else {
      console.log('error creating user using email and password', error)
    }
  }
 }

  return (
    <div className='sign-up-container'>
      <h2> Do not have a account?</h2>
      <span> Sign up with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
        label='Display Name'
        type='text'
        required
        onChange={handleChange}
        name ='displayName'
        value ={displayName}
        ></FormInput>

        <FormInput
        label='Email'
        type='email'
        required
        onChange={handleChange}
        name ='email'
        value ={email}></FormInput>

        <FormInput
        label='Password'
        type='password'
        required
        onChange={handleChange}
        name ='password'
        value ={password}
        minLength = '6'
        ></FormInput>

        <FormInput
        label='Confirm Password'
        type='password'
        required
        onChange={handleChange}
        name ='confirmPassword'
        value ={confirmPassword}></FormInput>

        <Button type='submit'>Sign Up</Button>
      </form>

    </div>
  )

}

export default SignUpForm;
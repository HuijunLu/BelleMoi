import {useState} from 'react';
import {
  createAuthFromEmailAndPassword,
  createUserDocumentFromAuth
} from '../../utils/firebase/firebase.utils.js'

const initialFormValues = {
  displayName: '',
  email: '',
  password:'',
  confirmPassword: ''
}

const SignUpForm = () => {

  const [formValues, setFormValues] = useState(initialFormValues);
  const { displayName, email, password, confirmPassword} = formValues;

  const resetFormFields = () => {
    setFormValues(initialFormValues);
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
    <div>
      <h1> I do not have a account</h1>
      <p> Sign up with your email and password</p>
      <form onSubmit={handleSubmit}>
        <label>Display Name</label>
        <input
        type='text'
        required
        onChange={handleChange}
        name ='displayName'
        value ={displayName}
        ></input>

        <label>Email</label>
        <input
        type='email'
        required
        onChange={handleChange}
        name ='email'
        value ={email}></input>

        <label>Password</label>
        <input
        type='password'
        required
        onChange={handleChange}
        name ='password'
        value ={password}
        minLength = '6'
        ></input>

        <label>Confirm Password</label>
        <input
        type='password'
        required
        onChange={handleChange}
        name ='confirmPassword'
        value ={confirmPassword}></input>

        <button type='submit'>Sign Up</button>
      </form>

    </div>
  )

}

export default SignUpForm;
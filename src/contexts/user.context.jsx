// context has two part: the actual data obj and
// the provider component that wrap around the children components that have access to the context

import { createContext, useState, useEffect } from 'react'

import {
  onAuthStateChangedListener,
  createUserDocumentFromAuth
} from '../utils/firebase/firebase.utils.js'

// as the actual value you want to access
export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null
})


//UserProvider tells us what components have access to the context
export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const value = { currentUser, setCurrentUser }

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      if(user) {
        createUserDocumentFromAuth(user);
      }
      setCurrentUser(user)
    });
    return unsubscribe;
  }, [])


  return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}




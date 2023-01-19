// context has two part: the actual data obj and
// the provider component that wrap around the children components that have access to the context

import { createContext, useState } from 'react'

// the actual value you want to access
export const CartContext = createContext({
  isCartOpen: false,
  setCartOpen:  () => {},
})


//Provider tells us what components have access to the context
export const CartProvider = ({ children }) => {
  const [isCartOpen, setCartOpen] = useState(false);
  const value = { isCartOpen, setCartOpen }

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  )
}




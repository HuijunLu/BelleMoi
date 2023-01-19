// context has two part: the actual data obj and
// the provider component that wrap around the children components that have access to the context

import { createContext, useState, useEffect } from 'react'

// helper func: add items to cart
export const addCartItem = (cartItems, productToAdd) => {
  // check if item is already existed
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === productToAdd.id
  );

  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === productToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }
  //not existed
  console.log([ ...cartItems, { ...productToAdd, quantity: 1}])
  return [ ...cartItems, { ...productToAdd, quantity: 1}]

}



// the actual value you want to access
export const CartContext = createContext({
  isCartOpen: false,
  setCartOpen:  () => {},
  cartItems: [],
  addItemToCart: () => {},
  itemCount: 0,
})


//Provider tells us what components have access to the context
export const CartProvider = ({ children }) => {
  const [isCartOpen, setCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([])
  const [itemCount, setCartItemCount] = useState(0)

  const addItemToCart = (product) =>
  setCartItems(addCartItem(cartItems, product));

  useEffect(() => {
    const count = cartItems.reduce(
      (total, cartItem) => total + cartItem.quantity,
      0
    );
    setCartItemCount(count);
  }, [cartItems]);

  // needs to add to value to be accessible 
  const value = { isCartOpen, setCartOpen, addItemToCart, cartItems, itemCount }

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  )
}




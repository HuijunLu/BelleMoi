// context has two part: the actual data obj and
// the provider component that wrap around the children components that have access to the context

import { createContext, useState, useEffect } from "react";

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

  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

export const removeCartItem = (cartItems, cartItemToRemove) => {
  // find the cart item to remove
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === cartItemToRemove.id
  );
  // check if quantity is equal to 1, if it is remove that item from the cart
  if (existingCartItem.quantity === 1) {
    return cartItems.filter((cartItem) => cartItem.id !== cartItemToRemove.id);
  }

  // if quantity > 1, then reduce the quantity
  return cartItems.map((cartItem) =>
    cartItem.id === cartItemToRemove.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};

const clearItem = (cartItems, cartItemToClear) => {
  return cartItems.filter((cartItem) => cartItem.id !== cartItemToClear.id);
};

// the actual value you want to access
export const CartContext = createContext({
  isCartOpen: false,
  setCartOpen: () => {},
  cartItems: [],
  addItemToCart: () => {},
  removeItemInCart: () => {},
  clearItemFromCart: () => {},
  itemCount: 0,
  cartTotal: 0,
});

//Provider tells us what components have access to the context
export const CartProvider = ({ children }) => {
  const [isCartOpen, setCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [itemCount, setCartItemCount] = useState(0);
  const [cartTotal, setCartTotal] = useState(0);

  const addItemToCart = (product) =>
    setCartItems(addCartItem(cartItems, product));

  const removeItemInCart = (product) =>
    setCartItems(removeCartItem(cartItems, product));

  const clearItemFromCart = (product) =>
    setCartItems(clearItem(cartItems, product));

  useEffect(() => {
    const count = cartItems.reduce(
      (total, cartItem) => total + cartItem.quantity,
      0
    );
    setCartItemCount(count);
  }, [cartItems]);

  useEffect(() => {
    const totalPrice = cartItems.reduce(
      (total, cartItem) => total + cartItem.quantity * cartItem.price,
      0
    );
    setCartTotal(totalPrice);
  }, [cartItems]);

  // needs to add to value to be accessible
  const value = {
    isCartOpen,
    setCartOpen,
    addItemToCart,
    removeItemInCart,
    clearItemFromCart,
    cartItems,
    itemCount,
    cartTotal,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

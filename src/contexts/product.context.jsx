// context has two part: the actual data obj and
// the provider component that wrap around the children components that have access to the context

import { createContext, useState } from 'react'
import PRODUCTS from '../shop-data.json'


// as the actual value you want to access
export const ProductContext = createContext({
  products: [],
  setProducts: () => null
})


//UserProvider tells us what components have access to the context
export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState(PRODUCTS);
  const value = { products, setProducts }

  return (
    <ProductContext.Provider value={value}>
      {children}
    </ProductContext.Provider>
  )
}




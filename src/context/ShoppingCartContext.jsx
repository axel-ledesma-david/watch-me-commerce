import { createContext, useState } from 'react'

export const CartContext = createContext("")

const ShoppingCartContext = ({children}) => {
    const [ cart, setCart ] = useState([]) 

    console.log("CART CONTEXT", cart)
    

  return (
    <CartContext.Provider value={{cart, setCart}} >{children}</CartContext.Provider>
  )
}

export default ShoppingCartContext
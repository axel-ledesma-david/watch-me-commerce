import { createContext, useState } from 'react'

export const CartContext = createContext("")

const ShoppingCartContext = ({ children }) => {
  const [cart, setCart] = useState([])

    const addItem = (id, quantity, data) => {
    const product = cart.find(product => product.id === id)
    let newCart
    if (product) {

      product.quantity += quantity
      newCart = [...cart]
      setCart(newCart)

    } else if (product === undefined) {
      newCart = [...cart, data]
      setCart(newCart)
    }
  }

  const removeItem = (id)=>{
    const cartFilter = cart.filter( item => item.id != id )

    setCart(cartFilter)
  }

  const cleanItems = ()=>{
    setCart([])
  }


  console.log("CART CONTEXT", cart)


  return (
    <CartContext.Provider value={{ cart, setCart, addItem, removeItem, cleanItems }} >{children}</CartContext.Provider>
  )
}

export default ShoppingCartContext
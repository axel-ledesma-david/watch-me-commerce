import React, { useContext } from 'react'
import { CartContext } from '../../context/ShoppingCartContext'
import '../Cart/Cart.css'
import CartItem from './CartItem'
import NotProducts from './NotProducts'
import FormCart from './FormCart'

const Cart = () => {
    const { cart } = useContext(CartContext)
    const total = cart.reduce((sum, curr) => {
        return sum + (curr.quantity * curr.price)
      }, 0)

    console.log("CART IN COMPONENT: ", cart)
    return (
        <div className='d-flex justify-content-center align-items-center flex-column cart-container p-5 '>
            {
                cart.map((prod, index) => (
                       <CartItem
                        img={prod.image}
                        title={prod.title}
                        stock={prod.stock}
                        key={index}
                        price={prod.price}
                        id={prod.id}
                        quantity={prod.quantity}
                        />
                ))
            }


            {
                cart.length > 0 ? <FormCart cart={cart} total={total} /> : <NotProducts/>
            }
        </div>
    )
}

export default Cart
import { useEffect, useContext } from 'react'
import { CartContext } from '../../context/ShoppingCartContext'



import '../NavBar/NavBar.css'

const CartWidget = () => {
    const { cart } = useContext(CartContext)
    
 
    const quantity = cart.reduce( (sum, curr) => {
        return sum + curr
    }, 0 )
    useEffect(()=>{

    }, [cart, quantity] )


    return (
        <button className="container-cart-icon">
            <ion-icon name="cart-outline"></ion-icon>
            { quantity > 0 ? <div className='span-cart' >{quantity}</div> : '' }
        </button>
    )
}

export default CartWidget
import { useContext } from 'react'
import { CartContext } from '../../context/ShoppingCartContext'
import { Link } from 'react-router-dom'



import '../NavBar/NavBar.css'

const CartWidget = () => {
    const { cart } = useContext(CartContext)
    
 
    const quantity = cart.reduce( (sum, curr) => {
        return sum + curr.quantity
    }, 0 )



    return (
        <Link to='/cart' className="container-cart-icon">
            <ion-icon name="cart-outline"></ion-icon>
            { quantity > 0 ? <div className='span-cart' >{quantity}</div> : '' }
        </Link>
    )
}

export default CartWidget
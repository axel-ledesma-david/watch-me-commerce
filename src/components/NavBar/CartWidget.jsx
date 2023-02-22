import React from 'react'

import '../NavBar/NavBar.css'

const CartWidget = () => {
    return (
        <button className="container-cart-icon">
            <ion-icon name="cart-outline"></ion-icon>
            <div className='span-cart' >4</div>
        </button>
    )
}

export default CartWidget
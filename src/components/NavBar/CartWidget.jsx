import React from 'react'

import '../NavBar/NavBar.css'

const CartWidget = () => {
    return (
        <buttons className="container-cart-icon">
            <ion-icon name="cart-outline"></ion-icon>
            <div className='span-cart' >4</div>
        </buttons>
    )
}

export default CartWidget
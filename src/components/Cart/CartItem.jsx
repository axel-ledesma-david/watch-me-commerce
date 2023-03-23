import React, { useContext } from 'react'
import { CartContext } from '../../context/ShoppingCartContext'
import '../Cart/Cart.css'

const CartItem = ({ img, title, stock, price, id, quantity }) => {

    const { removeItem } = useContext(CartContext)

    const handleRemoveItem = ()=>{
        removeItem(id)
    }

    console.log("img", img)
    return (
        <div className="card mb-3 border-0 shadow card-cart" >
            <div className="row g-0">
                <div className="col-md-4">
                    <img src={img} className="img-fluid rounded-start img-cart" alt={title} />
                </div>
                <div className="col-md-8 d-flex align-items-center">
                    <div className="card-body overflow-y-hidden">
                        <h5 className="card-title title-cart">{title}</h5>
                        <p className="card-text text-danger fw-bold">Stock: {stock}</p>
                        <p className="card-text text-dark fw-bold">${price}</p>
                        <p className="card-text text-secondary fw-bold">Quantity: {quantity}</p>
                    </div>
                <div className="buttons">
                    <button type="button" className="btn btn-outline-danger border-0" onClick={handleRemoveItem}>
                        <ion-icon name="trash-outline" className="trash-cart" ></ion-icon>
                    </button>
                </div>
                </div>
            </div>
        </div>
    )
}

export default CartItem
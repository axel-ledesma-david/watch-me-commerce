import { useState, useContext, useEffect} from 'react'
import { CartContext } from '../../context/ShoppingCartContext'
import '../ItemDetailContainer/ItemDetailContainer.css'

const ItemCount = ({ title, price, img, id}) => {


    const [ count, setCount ] = useState(0)
    const { cart, setCart } = useContext(CartContext)
    const [ reload, setReload ] = useState(false)
    /* const [ isInCart, setIsInCart ] = useState(false) */

    const addItem = ()=>{
        const product = cart.find( product => product.id === id )
        let newCart
        console.log("ITEM ID FIND? ", product)
         if(product){
            /* const item = cart.filter( item => item.id === id ) */

            /* setCart({...item, quantity : cart.quantity + count}) */
            
            /* product.quantity = count + product.quantity */
            product.quantity += count
            newCart = [...cart]
            
            console.log("ITEM: ", product) 
        } else if(product === undefined) {
            newCart = [...cart, { id, title, price, img, quantity : count}]
            setCart(newCart)
        }

        console.log("CART: ", cart)
        setReload(true)
    }   

    useEffect(()=>{
    
    },[reload, cart, addItem] )
    const addCount = ()=>{
        setCount( count + 1)
    }

    const subCount = ()=>{
        setCount( count - 1 )
    }



   /*  const addItem = ()=>{
        

        setCart(
            (currentCart) => {
                const isInCart = currentCart.find( product => product.id === id )
                if (isInCart) {
                    currentCart.map(item => {
                        return { ...item, quantity : item.quantity + count }
                    })
                } else {
                    currentCart.map(item => {
                        return [...item, { id, quantity : count, price, title, img }]
                    })
                }
            }
        )

        console.log("CART", cart)
    } */


    console.log(count)

    return (
        <div className="buttonsCart">
            {count < 0 ? <button disabled >-</button> : <button onClick={subCount}>-</button> }
            <button onClick={addItem} >Add to cart: {count}</button>
            <button onClick={addCount} >+</button>
        </div>
    )
}

export default ItemCount
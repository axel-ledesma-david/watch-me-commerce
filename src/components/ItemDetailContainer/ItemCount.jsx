import { useState, useContext, useEffect} from 'react'
import { CartContext } from '../../context/ShoppingCartContext'
import '../ItemDetailContainer/ItemDetailContainer.css'

const ItemCount = ({ title, price, img, id}) => {


    const [ count, setCount ] = useState(0)
    const { cart, setCart } = useContext(CartContext)
    const [ reload, setReload ] = useState(false)


    const addItem = ()=>{
        const product = cart.find( product => product.id === id )
        let newCart
        console.log("ITEM ID FIND? ", product)
         if(product){
          
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
        console.log("CART fuera de la funcion: ",cart)
    },[reload, cart, addItem] )
    const addCount = ()=>{
        setCount( count + 1)
    }

    const subCount = ()=>{
        setCount( count - 1 )
    }



 

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
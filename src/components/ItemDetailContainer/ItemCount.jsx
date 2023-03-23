import { useState, useContext} from 'react'
import { CartContext } from '../../context/ShoppingCartContext'
import '../ItemDetailContainer/ItemDetailContainer.css'
import Swal from 'sweetalert2'

const ItemCount = ({ title, price, img, id, stock}) => {


    const [ count, setCount ] = useState(0)
    const { addItem } = useContext(CartContext)
 
    const Toast = Swal.mixin({
        toast: true,
        position: 'bottom-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer)
          toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
      })

    const onAddItem = ()=>{
       const data = {
        title,
        price,
        image: img,
        id,
        stock,
        quantity : count
       }
        addItem(id, count, data)
        
          
          Toast.fire({
            icon: 'success',
            title: 'Add to cart successfully'
          })


    }   
  
    const addCount = ()=>{
        setCount( count + 1)
    }

    const subCount = ()=>{
        setCount( count - 1 )
    }

    return (
        <div className="buttonsCart">
            {count < 1 ? <button className='btn-count btn' disabled ><ion-icon className='icon-sub' name="remove-circle-outline"></ion-icon></button> : <button onClick={subCount} className='btn-count btn' ><ion-icon name="remove-circle-outline"></ion-icon></button> }
            { count < 1 ? <button  className='btn btn-primary btn-add-cart'  disabled>Add to cart: {count}</button> : <button  className='btn btn-primary btn-add-cart' onClick={onAddItem}>Add to cart: {count}</button> }
            { count >= stock ? <button className='btn-count btn' disabled ><ion-icon name="add-circle-outline"></ion-icon></button> : <button className='btn-count btn' onClick={addCount} ><ion-icon name="add-circle-outline"></ion-icon></button> }
        </div>
    )
}

export default ItemCount
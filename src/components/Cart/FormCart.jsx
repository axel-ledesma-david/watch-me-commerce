import React, { useContext, useState } from 'react'
import { getFirestore, addDoc, collection, Timestamp } from 'firebase/firestore'
import Swal from 'sweetalert2'
import { CartContext } from '../../context/ShoppingCartContext'

const FormCart = ({ cart, total }) => {

  const [order, setOrder] = useState([])
  const [ submit, setSubmit ] = useState(false)
  const { cleanItems } = useContext(CartContext)

  const [dataForm, setDataForm] = useState({
    name: '',
    lastName: '',
    phone: 0,
    email: ''
  })

  const db = getFirestore()
  const ordersCollection = collection(db, 'order')
  const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer)
      toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
  })

  const handleFormChange = (e) => {
    const { value, name } = e.target
    setDataForm({
      ...dataForm,
      [name]: value
    })
  }
  const handleSubmit = (e) => {

    e.preventDefault()
    const dataOrder = {
      items: cart.map((item) => {
        return {
          title: item.title || '',
          price: item.price || '',
          description: item.description || '',
          quantity: item.quantity || ''
        }
      }),
      total: total,
      buyer: dataForm,
      date: Timestamp.now()
    }

    console.log(dataForm)
    addDoc(ordersCollection, dataOrder).then(({id}) => 
      setOrder({id})
    )
    Toast.fire({
      icon: 'success',
      title: 'Send Successfully'
    })
    
    setSubmit(true)
  }

  console.log("ORDER: ",order)

  const handleClean = ()=>{
      cleanItems()
      Toast.fire({
        icon: 'success',
        title: 'Clean Successfully'
      })
  }

  return (
   <>

      <h2 className='mb-5'><b>TOTAL: </b>${total}</h2>
      <button className='btn btn-warning mb-4' onClick={handleClean} >Clean Cart</button>
      <form action="" onSubmit={handleSubmit} className='row d-flex flex-column gap-3 w-50'>
        <input
          type="text"
          name="name"
          placeholder='Name'
          className='form-control'
          onChange={handleFormChange}
        />
        <input
          type="text"
          name="lastName"
          placeholder='Last Name'
          className='form-control'
          onChange={handleFormChange}
        />
        <input
          type="text"
          name="phone"
          placeholder='Phone'
          className='form-control'
          onChange={handleFormChange}
        />
        <input
          type="email"
          name="email"
          placeholder='Email'
          className='form-control'
          onChange={handleFormChange}
        />
        <input type="emailConfirm" name="email" id="" placeholder='Email Confirm' className='form-control' />
        <button type="submit" className='btn btn-primary'>CONFIRM PAYMENT</button>
      </form>
      {
        submit ? (
          <div className="card border-dark mb-3" style={{maxWidth: "25rem", marginTop: '25px'}}>
        <div className="card-header">Detail order</div>
        <div className="card-body">
          <p><b>Number of order: </b>{order.id}</p>
          <hr />
          {
            cart.map((prod, index) => (
              <div key={index} className="product-detail">
                <p><b>Product: </b>{prod.title}</p>
                <p><b>Price: </b>${prod.price}</p>
                <p><b>Quantity: </b>{prod.quantity}</p>
                <hr />
              </div>

            ))
          }
          <p><b>Name: </b>{dataForm.name} </p>
          <p><b>Email: </b>{dataForm.email}</p>
          <p><b>TOTAL: </b>${total}</p>
        </div>
        </div>
        ) : ''
      }
      </>
      )
}

      export default FormCart
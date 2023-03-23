import React, { useContext } from 'react'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import NavBar from './components/NavBar/NavBar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import Home from './components/Home/Home'
import Footer from './components/Footer/Footer'
import ShoppingCartContext, { CartContext } from './context/ShoppingCartContext'
import Cart from './components/Cart/Cart'

function App() {
 
  const { cart } = useContext(CartContext)

  console.log(cart)

  return (
    <ShoppingCartContext>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/catalogue' element={<ItemListContainer />} />
          <Route path='/category/:id' element={<ItemListContainer />} />
          <Route path='/item/:id' element={<ItemDetailContainer />} />
          <Route path='/cart' element={<Cart/>} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </ShoppingCartContext>
  )
}

export default App

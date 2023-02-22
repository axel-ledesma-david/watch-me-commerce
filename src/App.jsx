import React from 'react'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import NavBar from './components/NavBar/NavBar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'

function App() {
  

  return (
     <BrowserRouter>
       <NavBar/>
       <Routes>
        <Route exact path='/' element={<ItemListContainer />} />
        <Route path='/category/:id' element={<ItemListContainer />} />
        <Route  path='/item/:id' element={<ItemDetailContainer/>}/>
       </Routes>
     </BrowserRouter>    
  )
}

export default App

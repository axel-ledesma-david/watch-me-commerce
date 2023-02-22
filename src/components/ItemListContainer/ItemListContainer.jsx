import React from 'react'
import Data from "../../data/data.json"
import { useParams } from 'react-router-dom'
import ItemList from './ItemList'

const ItemListContainer = () => {

  const { id } = useParams()


  const dataFilter = Data.filter(item => item.category === id)


  return (
    <div className="container d-flex justify-content-center align-items-center p-5">
      { id ? <ItemList watch={ dataFilter }/> :  <ItemList watch={ Data } />  }
    </div>
  )
}

export default ItemListContainer
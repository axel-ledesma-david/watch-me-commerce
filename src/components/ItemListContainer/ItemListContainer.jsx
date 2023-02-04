import React from 'react'

const ItemListContainer = ({greeting}) => {
  return (
    <div className="container d-flex justify-content-center align-items-center p-5">
        <h1>{greeting}</h1>
    </div>
  )
}

export default ItemListContainer
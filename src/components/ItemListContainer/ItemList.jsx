import React from 'react'
import { Link } from 'react-router-dom'
import "../ItemListContainer/ItemListContainer.css"

const ItemList = ({ watch }) => {


  return (
    <div className="row d-flex gap-3">
      {
        watch.map((watches, index) => (
          <div  key={index} className="col">
            <div className="card border-0 shadow" style={{ width: "18rem" }} >
              <img src={watches.image} className="card-img-top img--card__watch" style={{ height: "300px" }} alt={watches.name} />
              <div className="card-body d-flex flex-column">
                <h6 className="card-title">{watches.title}  </h6>
                <span className='price'>${watches.price}</span>
                <p><b>Stock: </b>{watches.stock}</p>
                <Link to={`/item/${watches.id}`} className="btn btn-primary rounded-0">Ver Mas</Link>
              </div>
            </div>
          </div>
        )) 
      }
    </div>
  )
}

export default ItemList
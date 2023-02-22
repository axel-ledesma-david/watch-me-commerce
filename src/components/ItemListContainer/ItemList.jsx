import React from 'react'
import { Link } from 'react-router-dom'

const ItemList = ({ watch }) => {
  return (
    <div className="row">
      {
        watch.map((watches, index) => (
          <div  key={index} className="col">
            <div className="card" style={{ width: "18rem" }} >
              <img src={watches.image} className="card-img-top" alt={watches.name} />
              <div className="card-body">
                <h5 className="card-title">{watches.name}</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
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
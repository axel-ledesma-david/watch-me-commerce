import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import "../ItemListContainer/ItemListContainer.css"
import Aos from 'aos'

const ItemList = ({ watch }) => {
  useEffect(()=>{
    Aos.init()
  },[])

  return (
    <div className="row d-flex gap-3">
     {
         watch.length > 0 ? watch.map((watches, index) => (
            <div key={index} className="col d-flex justify-content-center">
              <div className="card border-0 shadow" style={{ width: "18rem" }} data-aos="zoom-in-up"  >
                <img src={watches.image} className="card-img-top img--card__watch" style={{ height: "300px" }} alt={watches.name} />
                <div className="card-body d-flex flex-column">
                  <h6 className="card-title">{watches.title}  </h6>
                  <span className='price'>${watches.price}</span>
                  <p><b>Stock: </b>{watches.stock}</p>
                  <Link to={`/item/${watches.id}`} className="btn btn-primary rounded-0">Read more...</Link>
                </div>
              </div>
            </div>
          ))
          : (
            <div className="spinner-border text-secondary" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
  
          )
        } 
      
    </div>
  )
}

export default ItemList
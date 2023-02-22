import React from 'react'
import { useParams } from 'react-router-dom'
import Data from '../../data/data.json'

import '../ItemDetailContainer/ItemDetailContainer.css'

const ItemDetailContainer = () => {

  const { id } = useParams()


  const filterItem = Data.filter(item => item.id == id)
  /* const description = filterItem.map(item => item.description )
  const arrDescription = [...description]  */


  return (
    <div className="container d-flex justify-content-center align-items-center height-detail">
      <div className="card mb-3" style={{maxWidth: "540px"}}>
      <div className="row g-0">
        <div className="col-md-4">
          <img src={filterItem[0].image} className="img-fluid rounded-start" alt={filterItem[0].name} />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">{filterItem[0].name} </h5>

            <p>Descripción en construcción...</p>
            {/* <ul>
              {arrDescription.map(item => (
                <li>
                 <p> <b>{Object.keys(item)} :</b> {item}</p>
                </li>
              ))}
            </ul> */}
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default ItemDetailContainer
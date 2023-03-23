import React from 'react'
import ItemCount from './ItemCount'


const ItemDetail = ({watch, id}) => {


    return (
        <div className="card mb-3 border-0 shadow" style={{ maxWidth: "800px" }}>
            <div className="row g-0">
                <div className="col-md-4 d-flex flex-column justify-content-center align-items-center w-35">
                    <img src={watch.image} className="img-fluid rounded-start" alt={watch.title} />
                    <span className='fw-bold text-secondary fs-5' >$ {watch.price}</span>
                    <span className='fw-bold text-danger' >stock: {watch.stock}</span>
                    <ItemCount
                        price={watch.price}
                        img={watch.image}
                        title={watch.title}
                        id={id}
                        stock={watch.stock}
                    />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">{watch.title} </h5>
                        <p>{watch.description}</p>
                        <p><b>Category: </b>{watch.category}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ItemDetail
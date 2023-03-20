import { useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'

import { getFirestore, doc, getDoc } from 'firebase/firestore'
import '../ItemDetailContainer/ItemDetailContainer.css'

import ItemCount from './ItemCount'

const ItemDetailContainer = () => {

  const { id } = useParams()

  const [watch, setWatch] = useState([])

  useEffect(() => {
    const db = getFirestore()

    const document = doc(db, "watches", `${id}`)
    getDoc(document).then(snapshot => {
      if (snapshot.exists()) {
        const doc = snapshot.data()
        setWatch(doc)
      }
    })
  }, [])

  return (
    <div className="container d-flex justify-content-center align-items-center height-detail">
      <div className="card mb-3 border-0 shadow" style={{ maxWidth: "750px" }}>
        <div className="row g-0">
          <div className="col-md-4 d-flex flex-column justify-content-center align-items-center">
            <img src={watch.image} className="img-fluid rounded-start" alt={watch.title} />
            <span>$ {watch.price}</span>
            <ItemCount
              price={watch.price}
              img={watch.image}
              title={watch.title}
              id ={id}
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{watch.title} </h5>

              <p>{watch.description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ItemDetailContainer
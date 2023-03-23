import { useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'

import { getFirestore, doc, getDoc } from 'firebase/firestore'
import '../ItemDetailContainer/ItemDetailContainer.css'


import ItemDetail from './ItemDetail'

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
      { watch != undefined ? (
       <ItemDetail
        watch={watch}
        id={id}
      />
      ) : <div className="spinner-border text-secondary" role="status">
      <span className="visually-hidden">Loading...</span>
    </div> }
    </div>
  )
}

export default ItemDetailContainer
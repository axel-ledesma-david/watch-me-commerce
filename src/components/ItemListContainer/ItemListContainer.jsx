import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ItemList from './ItemList'
import { getFirestore, collection, getDocs } from 'firebase/firestore'



const ItemListContainer = () => {

  const [ data, setData ] = useState([])

  useEffect(()=>{
    const db = getFirestore()

    const collectionData = collection(db, "watches")
    getDocs(collectionData).then(snapshot => {
      const docs = snapshot.docs.map(doc => ({ ...doc.data(), id: doc.id }))
      setData(docs)
      
    })
  },[])

  console.log(data)

  const { id } = useParams()


  const dataFilter = data.filter(item => item.category === id)


  return (
    <div className="container d-flex justify-content-center align-items-center p-5">
      { id ? <ItemList watch={ dataFilter }/> :  <ItemList watch={ data } />  }
    </div>
  )
}

export default ItemListContainer
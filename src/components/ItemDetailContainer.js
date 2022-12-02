import React from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import ItemDetail from './ItemDetail';
import { productsArray } from '../data/Array';

const ItemDetailContainer = () => {
    const {id} = useParams()
    const [item, setItem] = useState(null)
    useEffect(() =>{
        setItem(null)
        const task = new Promise((resolve, reject) => {
            setTimeout(() =>{
                resolve(productsArray[id - 1])
            }, 1000)
        })
        task.then((res) => setItem(res))
      },[id])
  return (
    <>{item ? <ItemDetail item={item}/> : null } </>

  )
}

export default ItemDetailContainer
import React from 'react'
import { useParams } from 'react-router-dom'
import { useFetch } from '../hooks/useFetch'

const Product = () => {

    const {id} = useParams()

    const url = 'http://localhost:3000/products/' + id

    const {data:items} = useFetch(url)


  return (
    <>
    <div>Product</div>
    <p>Id do Produto: {id}</p>
    
    {items && (
        <div>
            <h1>{items.name}</h1>
            <p>R${items.price}</p>
        </div>


    )}
    
    
    </>

  )
}

export default Product
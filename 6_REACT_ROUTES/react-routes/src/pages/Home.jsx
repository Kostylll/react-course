import React from 'react'
import { useFetch } from '../hooks/useFetch'

const Home = () => {

const url = 'http://localhost:3000/products'

const {data:items} = useFetch(url)

  return (
    <>
    <div>Home</div>
    <h1>Products</h1>
    <ul>
      {items && items.map((product) => {
        return <li key={product.id}>{product.name} - {product.price}</li>
      })}
    </ul>
    </>
  )
}

export default Home
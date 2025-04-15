import './App.css'
import { useState } from 'react'


const url = "http://localhost:3000/products"

function App() {

  const {data : items, httpConfig} = useFetch(url)
  const [products, setProducts] = useState([])
  const [name,setName] = useState()
  const [price, setPrice] = useState()


  
 const handleSubmit = async (e) => {
    e.preventDefault()

    const product = {
      name,
      price
    };

    // const res = await fetch(url, {
    //   method: 'POST',
    //   headers: {
    //     "Content-Type": "applications/json"
    //   },
    //   body: JSON.stringify(product)
    // })

    // const addedProduct = await res.json();

    // setProducts((prevProduct) => [...prevProduct, addedProduct ])

    httpConfig(product, "POST")

  }

  const handleDelete = async (id) => {
    console.log(id)
    httpConfig(id, "DELETE")

  }

  // useEffect(() => {

  //   async function fetchData(){
  //     const res = await fetch(url)

  //     const data = await res.json()

  //     setProducts(data)
  //   }
  //   fetchData()

  // }, [])  


  return (
    <>
      <div>
        <h1>Lista de Produtos</h1>
        <ul>
            {items && items.map((product) => (          
                <div key={product.id}>
                    <li>{product.name} - {product.price}</li>
                    <button onClick={() => handleDelete(product.id)}>Excluir</button>
                </div>      
            ))}
        </ul>
        <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name">
                <input 
                type="text" 
                name='name' 
                placeholder='Digite o nome do produto...'
                onChange={(e) => setName(e.target.value)}
                />
              </label>  
            </div>
            <div>
              <label htmlFor="price">
                <input 
                type="number" 
                name="price"
                placeholder='Digite o preço do produto...'
                onChange={(e) => setPrice(e.target.value)}
                />
              </label>
              <input type="submit" value="Enviar" />
            </div>
        </form>
      </div>
    </>
  )
}

export default App

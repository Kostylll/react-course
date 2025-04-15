import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Edinho from './assets/edinho.jpg'
import UseExample from './components/UseStateExample'
import ListExample from './components/ListExample'
import ConditionalRender from './components/ConditionalRender'
import ShowUserName from './components/ShowUserName'
import CarDetails from './components/CarDetails'
import Challenge from './components/Challenge'

function App() {
  const [count, setCount] = useState(0)
  const[userName,setUserName] = useState("Edinho")

  const [carlist] = useState([
    {id: 1, brand: "Fusca", km: 100, color: "azul", new: false},
    {id: 2, brand: "Polo", km: 200, color: "prata", new: true},
    {id: 3, brand: "Sandero", km: 300, color: "vermelho", new: false},
    {id: 4, brand: "Onix", km: 400, color: "amarelo", new: false},
  ])

   const [pessoas] = useState([
          {id: 1, name: "Edinho", age: 17},
          {id: 2, name: "Pedro", age: 15},
          {id: 3, name: "Maria", age: 25},
          {id: 4, name: "João", age: 35},
      ])
  

  return (
    <>
      <div>
      <button onClick={() => setUserName("Pedro")}>Aperte para mudar para Pedro</button>
      </div>
      <UseExample />
      <ListExample />
      <ConditionalRender />
      <ShowUserName name={userName} />
      <CarDetails carlist={carlist} />
      {carlist.map((car) => (
        <CarDetails
          key={car.id}
          brand={car.brand}
          km={car.km}
          color={car.color}
          new={car.new}
          />
      ))}
      {pessoas.map((pessoa) => (
         <Challenge
         key = {pessoa.id}
         name = {pessoa.name}
         age = {pessoa.age}
         />
      ))}
    </>
  )
}

export default App

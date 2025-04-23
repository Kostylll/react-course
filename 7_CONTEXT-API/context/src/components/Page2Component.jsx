import React from 'react'
import { useContext } from 'react'
import { CounterContext } from '../context/CounterContext'

const Page2Component = () => {

  const {counter,setCounter} = useContext(CounterContext)

  return (
    <div>
      <h1>Change Counter</h1>
      <p>{counter}</p>
      <button onClick={() => setCounter(counter + 1)}>Alterar valor</button>
    </div>
  )
}

export default Page2Component
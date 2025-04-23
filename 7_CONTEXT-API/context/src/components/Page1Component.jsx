import React from 'react'
import { useContext } from 'react'
import { CounterContext } from '../context/CounterContext'
import { userCounterContext } from '../hooks/useCounterContext'
import { useTitleColorContext } from '../hooks/userTitleColorContext'

const Page1Component = () => {

  //const { counter } = useContext(CounterContext)
  const { counter } = userCounterContext();
  const { color } = useTitleColorContext();

  return (
    <div>
      <h1>Home</h1>
      <p style={{color : color}}>Cor</p>
      <p>Valor do contador : {counter}</p>
    </div>
  )
}

export default Page1Component
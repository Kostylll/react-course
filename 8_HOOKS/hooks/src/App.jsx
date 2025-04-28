import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HookUseState from './components/HookUseState'
import HookUseReducer from './components/HookUseReducer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <HookUseState/>
        <HookUseReducer/>
      </div>
    </>
  )
}

export default App

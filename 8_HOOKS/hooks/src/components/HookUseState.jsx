import React, { useState } from 'react'

const HookUseState = () => {

    const [age, setAge] = useState(18)

    const handleSubmit = (e) =>{
        e.preventDefault()
        console.log(age)
    }

  return (
    <div>
        <form onSubmit={handleSubmit}>

            <input type="text" value={age} onChange={(e) => setAge(e.target.value)}/>
            <p>{age}</p>
            <button type='submit'>Enviar</button>
        </form>

    </div>
  )
}

export default HookUseState
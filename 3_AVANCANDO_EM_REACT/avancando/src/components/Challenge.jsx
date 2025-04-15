import React, { useState } from 'react'

const Challenge = (props) => {

  return (
    <div>
       <ul>
        <li>Nome : {props.name}</li>
        <li>Nome : {props.age}</li>
        {props.age >= 18 ? <li>Maior de Idade</li> : <li>Menor de Idade</li>}
       </ul>
    </div>
  )
}

export default Challenge
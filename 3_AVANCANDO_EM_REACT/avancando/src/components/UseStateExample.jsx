import { useState } from "react"

const UseExample = () => {

    const [lugar, setLugar] = useState()

    const handleChange = () =>{
        setLugar('São José dos Campos')
    }


    return (
        <div>
            <p>Estou em mudança para : {lugar} </p>
            <button onClick={handleChange}>Revelar Lugar</button>
            <button onClick={() => setLugar('Sorocaba')}>Revelar Outro Lugar</button>
        </div>

    )


}

export default UseExample;
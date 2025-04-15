import { useState } from "react";

const ConditionalRender = () => {

    const [x, setX] = useState(true)
    const nome = "Joao"

    return(
        <div>
            <h1>Isso será exibido?</h1>
            {x ? <p>Sim</p> : <p>Não</p>}
            <button onClick={() => setX(!x)}>Clique aqui</button>

            {nome === "Pedro" ? <p>O nome é Pedro</p> : <p>O nome não é Pedro</p>}
    
        </div>
    )

}

export default ConditionalRender;
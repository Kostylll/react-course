import { useState } from "react";

const Challenge = () => {

    const num1 = 10;
    const num2 = 20;

    const [soma,setSoma] = useState(0);
    

    const handleSum = ()  => {
        setSoma(num1 + num2);
    }

    return (
        <div>
            <p>Numero 1 é : {num1}</p>
            <p>Numero 2 é : {num2}</p>

            <button onClick={handleSum}>{soma}</button>
        </div>

    )

}

export default Challenge;
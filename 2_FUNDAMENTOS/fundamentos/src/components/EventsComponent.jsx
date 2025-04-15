import { useState } from "react";

const EventsComponent = () => {

   const[name, setName] = useState('')

   const handleAlert = (e) => {
    console.log(e);
        setName("LEGAL");
    };

    const renderSomething = (x) => {
        if(x) {
            return <h1>Renderizando isso!</h1>
        } else {
            return <h1>Renderizando aquilo!</h1>
        }
    }


    return (
        <div>
            <h2>YOU ARE {name}</h2>
            <button onClick={handleAlert}>Click me!</button>
            <button onClick={() => alert("BOO")}>Aperte Me</button>
        {renderSomething(true)}
        {renderSomething(false)}
        </div>
    )
}

export default EventsComponent;
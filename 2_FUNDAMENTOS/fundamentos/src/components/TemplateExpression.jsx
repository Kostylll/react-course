const TemplateExpression = () => {   

    const data = {
        name: 'Pedro',
        age: 21,
        job: 'Programador'
    };
    
    return(
        <div>
            <h1>Olá {data.name} voce tem {data.age} anos e sua profissão é {data.job}</h1>
        </div>
    )
       
    
}

export default TemplateExpression;
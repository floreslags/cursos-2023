import React, { useState } from 'react';

export default function HooksCounter(props){

    const [counter, setCounter] = useState(0);

    const sumar = ()=> setCounter(counter + 1);
    const restar = ()=> setCounter(counter - 1);

    return(
        <>
            <h2>Hooks - useState</h2>
            <nav>
                <button onClick={sumar}>+</button>
                <button onClick={restar}>-</button>
            </nav>
            <p>Contador de {props.title}</p>
            <h3>{counter}</h3>
        </>
    );
}

HooksCounter.defaultProps = {
    title:"Clicks"
}
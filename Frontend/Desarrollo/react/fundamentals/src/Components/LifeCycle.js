import React, { useEffect, useState } from 'react'

const Text = ()=>{
    
    const [text, setText] = useState('');

    useEffect(()=>{
        // Al iniciar el componente
        console.log('Text component Mounted');
        
        // Al eliminar el componente
        return ()=> console.log('Text Component Unmounted');
    },// Dentro de este array se definen las acciones cuando las variables son modificadas
    []);


    return(
        <>
            <h3>Text</h3>
            <input type="text" onChange={(e)=>setText(e.target.value)}/>
            {text}
        </>
    );
}

export const LifeCycle = () => {
    const [showText, setShowText] = useState(false);

  return (
    <div>
        <h2>Ciclo de vida de un componente</h2>
        <h3>Mostrar/Ocultar Texto</h3>
        <button onClick={()=>setShowText(!showText)}>Show text</button>
        {showText && <Text/>}
    </div>
  )
}

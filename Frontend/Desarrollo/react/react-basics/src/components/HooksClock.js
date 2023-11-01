import React, { useState, useEffect } from 'react';

// Declaración de componentes funcionales

const Clock = ({hora})=> <h3>{hora}</h3>

export default function HooksClock(){

    // Variables de estado con useState
    const [hora,setHora] = useState(new Date().toLocaleTimeString());
    const [visible,setVisible] = useState(false);


    // Ciclo de vida del componente con useEffect


    useEffect(()=>{
        let temporizador;

        if(visible){
            temporizador = setInterval(() => {
                setHora(new Date().toLocaleTimeString())
                
            }, 1000);
        }else{
            clearInterval(temporizador);
        }
        
        //Fase de  Desmontaje
        return ()=>{
            clearInterval(temporizador);
        }

    },[visible])

    return(
        <>
            <h2>Hooks - Clock</h2>
            {visible && <Clock hora = {hora}/>}
            <button onClick={()=>setVisible(true)}>Start</button>
            <button onClick={()=>setVisible(false)}>Stop</button>
        </>
    );
}
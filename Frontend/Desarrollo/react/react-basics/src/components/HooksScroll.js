import React, { useState, useEffect } from 'react';

export default function HooksScroll(){

    const [scrollY,setScrollY] = useState(0);
    // const [name,setName] = useState("Sergio");


    // En fase de montaje se hacen los consumos a APIS o suscripciones
    useEffect(()=>{
        // console.log("Fase de Montaje");
    },[]);

    useEffect(()=>{
        // console.log("Moviendo el scroll");

        const getScroll = ()=>{
            setScrollY(window.pageYOffset);
        }

        window.addEventListener("scroll",getScroll);

        return ()=>{
            window.removeEventListener("scroll",getScroll);
            // console.log("Desmontaje")
        }
    },[scrollY]);


    // En fase de desmontaje se hacen las desuscripciones a servicios externos
    useEffect(()=>{
        
        return ()=>{
            // console.log("Fase de Desmontaje");

        }
    });





    return(
        <>
            <h2>Hooks - useEffect & Ciclo de Vida</h2>
            <p>Scroll Y del Navegador {scrollY}px</p>
        </>
    );
}
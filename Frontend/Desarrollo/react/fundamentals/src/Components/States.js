import React, { useState } from 'react';

export const States = () => {

    const [age,setAge]=useState(0);
    const [name,setName]=useState('');
    const [showText,setShowText]=useState(false);
    const [textColor,setTextColor]=useState('blue');
    
    const increaseAge = ()=>{
        setAge(age+1);
    }

    const handleName = (e)=>{
        setName(e.target.value);
    }
    
    // Ejercicio
    const [count,setCount]=useState(0);


  return (
    <div>
        <h2>Estados en react</h2>
        <p>{age}</p>
        <button onClick={increaseAge}>Incrementar</button>
        <br />
        <input type="text" onChange={handleName}/>
        <br />
        {name}
        <br />
        <button onClick={()=>setShowText(!showText)}>Show/hide</button>
        {showText && <h3>Hi, my name is Sergio</h3>}
        <br />
        <button onClick={()=>textColor === 'blue'?setTextColor('green'):setTextColor('blue')}>Change color</button>
        <h3 style={{color:textColor}}>Text Color</h3>
        <h3>Ejercicio</h3>
        {count}
        <br />
        <button onClick={()=>setCount(count+1)}>Increase</button>
        <button onClick={()=>setCount(count-1)}>Decrease</button>
        <button onClick={()=>setCount(0)}>Set Zero</button>
    </div>
  )
}

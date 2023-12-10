import React, { useEffect, useState } from "react";
import Axios from "axios";

export const Module7 = () => {

    // Variables de estado
  const [catFact, setCatFact] = useState('');
  const [name, setName] = useState('');
  const [age, setAge] = useState(null);
  const [excuse, setExcuse] = useState('');

  const catFactUrl = "https://catfact.ninja/fact";

  // Funciones

  const fetchCatFact = ()=>{
      Axios.get(catFactUrl).then((res) => {
        setCatFact(res.data.fact);
      });
  }

  const predictAge = (name)=>{
    let url = `https://api.agify.io/?name=${name}`;
      Axios.get(url).then((res) => {
        // console.log(res.data)
        setAge(res.data.age);
      });
  }

  const generateExcuse = (excuse)=>{
    let url = `https://excuser-three.vercel.app/v1/excuse/${excuse}/`;
    Axios.get(url)
    .then((res)=>{
      // console.log(res.data[0].excuse)
      setExcuse(res.data[0].excuse)
    });
  }

  // Ciclo de vida del componente

  useEffect(()=>{
    fetchCatFact();
    // predictAge();
  },[])

  return (
    <div>
      <h2>Module 7 - Fetching Data from API's</h2>
      <h3>Fetch a cat fact</h3>
      <button onClick={fetchCatFact}>Get cat fact</button>
      <p>{catFact}</p>
      <h3>Fetch name and age</h3>
      <input type="text" placeholder="Type your name" onChange={(e)=>setName(e.target.value)}/>
      <button onClick={predictAge(name)}>Predict age</button>
      <p>{age}</p>
      <h3>Excuse generator</h3>
      <button onClick={()=>generateExcuse('party')}>Party</button>
      <button onClick={()=>generateExcuse('family')}>Family</button>
      <button onClick={()=>generateExcuse('office')}>Office</button>
      <br />
      <p>{excuse}</p>
    </div>
  );
};

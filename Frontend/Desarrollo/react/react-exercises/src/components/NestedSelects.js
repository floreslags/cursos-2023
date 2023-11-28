import React,{useState} from 'react';
import { SelectList } from './SelectList'

export const NestedSelects = () => {
    // Definición de variables de estado
    const [state, setState] = useState("");
    const [town, setTown] = useState("");
    const [suburb, setSuburb] = useState("");

    //Credenciales de la API
    // const TOKEN = "a1312a34-b211-4c87-87e7-3d3e0c09605a";
    // let urlEstados = `https://api.copomex.com/query/get_estados?token=${TOKEN}`;
    let urlEstados = `https://api.copomex.com/query/get_estados?token=pruebas`;
    let urlMunicipios = `https://api.copomex.com/query/get_municipio_por_estado/Aguascalientes?token=pruebas`;
    let urlColonias = `https://api.copomex.com/query/get_colonia_por_municipio/Xochimilco?token=pruebas`;

    // Métodos


  return (
    <div>
        <h2>Nested Selects</h2>
        <h3>México</h3>
        <SelectList title={"estado"} url={urlEstados} handleChange={(e)=>{setState(e.target.value)}}/>
        {state && <SelectList title={"municipios"} url={urlMunicipios} handleChange={(e)=>{setTown(e.target.value)}}/>}
        {town && <SelectList title={"colonia"} url={urlColonias} handleChange={(e)=>{setSuburb(e.target.value)}}/>}
        <pre>
            <code>
                {state} - {town} - {suburb}
            </code>
        </pre>
    </div>
  )
}

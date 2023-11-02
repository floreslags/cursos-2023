import React, { useState } from 'react';
export default function Forms(){

/*     const [nombre,setNombre] = useState("");
    const [sabor,setSabor] = useState("");
    const [lenguaje,setLenguaje] = useState("");
    const [terms,setTerms] = useState(false);

    const handleSubmit = (e)=>{
        e.preventDefault();
        alert('El formulario se ha enviado');
    }

    return(
        <>
            <h2>Formularios</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="nombre">Nombre</label>
                <input type="text" id='nombre' name='nombre' value={nombre} onChange={(e)=>setNombre(e.target.value)} defaultChecked/>

                <p>Elige tu sabor JS favorito</p>
                <input type="radio" id='vanilla' name='sabor' value='vanilla' onChange={(e)=>setSabor(e.target.value)}/>
                <label htmlFor="vanilla">Vanilla</label>

                <input type="radio" id='react' name='sabor' value='react' onChange={(e)=>setSabor(e.target.value)}/>
                <label htmlFor="react">React</label>

                <input type="radio" id='angular' name='sabor' value='angular' onChange={(e)=>setSabor(e.target.value)}/>
                <label htmlFor="angular">Angular</label>

                <input type="radio" id='vue' name='sabor' value='vue' onChange={(e)=>setSabor(e.target.value)}/>
                <label htmlFor="vue">Vue</label>

                <input type="radio" id='svelte' name='sabor' value='svelte' onChange={(e)=>setSabor(e.target.value)}/>
                <label htmlFor="svelte">Svelte</label>

                <p>Elige tu lenguaje de programación favorito</p>
                <select name="lenguaje" onChange={(e)=>setLenguaje(e.target.value)} defaultValue="">
                    <option value="" >---</option>
                    <option value="js">JavaScript</option>
                    <option value="php">PHP</option>
                    <option value="py">Python</option>
                    <option value="go">GO</option>
                    <option value="rb">Ruby</option>
                </select>
                <br/>
                <label htmlFor="terms">Acepto términos y condiciones</label>
                <input type="checkbox" name="terms" id="terms" onChange={(e)=>setTerms(e.target.checked)}/>
                <br/>
                <input type="submit"/>

            </form>
        </>
    ); */


    // Método simple de procesamiento de formularios

    const [form,setForm] = useState({});

    const handleChange = e =>{
        // Manipulación de todos los atributos de valor de un formulario
        setForm({
            ...form,
            [e.target.name]:e.target.value
        });
    }

    const handleChecked = e =>{
        setForm({
            ...form,
            [e.target.name]:e.target.checked
        });
    }

    const handleSubmit = e =>{
        e.preventDefault();
        alert('El formualrio se ha enviado');
    }

    return(
        <>
            <h2>Formularios</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="nombre">Nombre</label>
                <input type="text" id='nombre' name='nombre' value={form.nombre} onChange={handleChange} defaultChecked/>

                <p>Elige tu sabor JS favorito</p>
                <input type="radio" id='vanilla' name='sabor' value='vanilla' onChange={handleChange}/>
                <label htmlFor="vanilla">Vanilla</label>

                <input type="radio" id='react' name='sabor' value='react' onChange={handleChange}/>
                <label htmlFor="react">React</label>

                <input type="radio" id='angular' name='sabor' value='angular' onChange={handleChange}/>
                <label htmlFor="angular">Angular</label>

                <input type="radio" id='vue' name='sabor' value='vue' onChange={handleChange}/>
                <label htmlFor="vue">Vue</label>

                <input type="radio" id='svelte' name='sabor' value='svelte' onChange={handleChange}/>
                <label htmlFor="svelte">Svelte</label>

                <p>Elige tu lenguaje de programación favorito</p>
                <select name="lenguaje" onChange={handleChange} defaultValue="">
                    <option value="" >---</option>
                    <option value="js">JavaScript</option>
                    <option value="php">PHP</option>
                    <option value="py">Python</option>
                    <option value="go">GO</option>
                    <option value="rb">Ruby</option>
                </select>
                <br/>
                <label htmlFor="terms">Acepto términos y condiciones</label>
                <input type="checkbox" name="terms" id="terms" onChange={handleChecked}/>
                <br/>
                <input type="submit"/>

            </form>
        </>
    );


}

import React, { useState, useEffect } from 'react';

const Pokemon = ({avatar,name})=>{
    return(
        <figure>
            <img src={avatar} alt={name}/>
            <figcaption>{name}</figcaption>
        </figure>
    );
}


export default function HooksAjax(){

    // Variables de estado 'useState'
    const [pokemons,setPokemons] = useState([]);

    // Funciones con 'useEffect'
/*     useEffect(()=>{
        let url = 'https://pokeapi.co/api/v2/pokemon/';

        fetch(url)
        .then(res => res.json())
        .then(json=>{
            json.results.forEach(el=>{
                fetch(el.url)
                .then(res=>res.json())
                .then(json=>{
                    let pokemon = {
                        id:json.id,
                        name:json.name,
                        avatar:json.sprites.front_default
                    }
                    
                    setPokemons((pokemons)=>[...pokemons,pokemon]);
                })
            })
        })

    },[]); */

    // Peticiones asíncronas

    useEffect(()=>{
        let url = 'https://pokeapi.co/api/v2/pokemon/';

        const getPokemons = async (url)=>{
            let res = await fetch(url),
            json = await res.json();

            json.results.forEach(async el=>{

                let res = await fetch(el.url),
                json = await res.json();

                let pokemon = {
                    id:json.id,
                    name:json.name,
                    avatar:json.sprites.front_default
                }
    
                setPokemons((pokemons)=>[...pokemons,pokemon]);

            });
        }

        getPokemons(url);
        
    },[]);


    return(
        <>
            <h2>Hooks - Peticiones AJAX en Hooks</h2>
            {pokemons.length === 0?(<h3>Cargando...</h3>):(
                pokemons.map((el)=>(
                    <Pokemon key={el.id} name={el.name} avatar={el.avatar}/>
                ))
            )}
        </>
    );
}
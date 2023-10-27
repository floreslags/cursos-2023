import React, { Component } from 'react';

const Pokemon = ({avatar,name})=>{
    return(
        <figure>
            <img src={avatar} alt={name}/>
            <figcaption>{name}</figcaption>
        </figure>
    );
}

export default class AjaxApi extends Component{

    state = {
        pokemons:[]
    }

    componentDidMount(){
        let url = "https://pokeapi.co/api/v2/pokemon/"

        fetch(url)
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            data.results.forEach(el=>{
                fetch(el.url)
                .then(res=>res.json())
                .then(data=>{
                    console.log(data)
                    let pokemon = {
                        id:data.id,
                        name:data.name,
                        avatar:data.sprites.front_default
                    }
                    let pokemons = [...this.state.pokemons,pokemon];
                    this.setState({pokemons})
                });
            });
        })
    }

    render(){
        return(
            <>
                <h2>Peticiones asíncronas en componentes de clase</h2>
                {this.state.pokemons.length===0?<h3>Cargando...</h3>:this.state.pokemons.map(el => <Pokemon key={el.id} name={el.name} avatar={el.avatar} />)}
            </>
        );
    }
}
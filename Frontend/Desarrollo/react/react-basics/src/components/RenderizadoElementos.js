import React, { Component } from 'react';
import data from '../helpers/data.json';

function ListItem(props){
    return(
        <div>
            <li>
                <a href={props.el.web} target="_blank" rel="noopener">{props.el.name}</a>
            </li>
        </div>
    );
}

export default class RenderizadoElementos extends Component{

    constructor(props){
        super(props);
        this.state={
            seasons:["Spring","Summer","Autumn","Winder"]
        }
    }

    render(){
        console.log(data);
        return(
            <div>
                <h2>Renderizado de Elementos</h2>
                <h3>Estaciones del año</h3>
                <ol>
                    {this.state.seasons.map((el,index)=><li key={index}>{el}</li>)}
                </ol>
                <h3>Frameworks Frontend JavaScript</h3>
                <ol>
                    {data.frameworks.map((el)=><ListItem key={el.id} el={el}/>)}
                </ol>
            </div>
        );
    }
}
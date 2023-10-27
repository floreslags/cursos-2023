import React, { Component } from 'react';

export class EventosES6 extends Component{

    constructor(props){
        super(props);
        this.state = {
            contador:0
        }

        // Enlaces o binding
        this.sumar = this.sumar.bind(this);
        this.restar = this.restar.bind(this);
    }


    sumar(e){
        console.log('Sumando');
        // En rect se usa 'bind' para enlazar el 'state' y no el contexto 'this'
        this.setState({
            contador:this.state.contador +1
        });
    }

    restar(e){
        console.log('Restando');
        this.setState({
            contador:this.state.contador -1
        })
    }

    render(){
        return(
            <div>
                <h2>Eventos en componentes de clase versión ES6</h2>
                <nav>
                    <button onClick={this.sumar}>+</button>
                    <button onClick={this.restar}>-</button>
                </nav>
                <h3>{this.state.contador}</h3>
            </div>
        );
    }
}

export class EventosES7 extends Component{
    
    // Properties Initializer
    state = {
        contador:0
    }


    // Arrow functions para los eventos, heredando el contexto de la clase 'EventosES7'

    sumar=(e)=>{
        console.log('Sumando');
        // En rect se usa 'bind' para enlazar el 'state' y no el contexto 'this'
        this.setState({
            contador:this.state.contador +1
        });
    }

    restar=(e)=>{
        console.log('Restando');
        this.setState({
            contador:this.state.contador -1
        })
    }

    render(){
        return(
            <div>
                <h2>Eventos en componentes de clase versión ES7</h2>
                <nav>
                    <button onClick={this.sumar}>+</button>
                    <button onClick={this.restar}>-</button>
                </nav>
                <h3>{this.state.contador}</h3>
            </div>
        );
    }
}


// Componente Funcional
/* function Boton(props){
    return(<button onClick={props.myOnClick}>Botón hecho componente</button>);
} */
const Boton = ({myOnClick})=>(<button onClick={myOnClick}>Botón hecho componente</button>);

export class MasSobreEventos extends Component{

    handleClick=(e,msg)=>{
        console.log(e)
        console.log(e.nativeEvent)
        console.log(e.target)
        console.log(e.nativeEvent.target)
        console.log(msg)
    }

    render(){
        return(
            <div>
                <h2>Más sobre Eventos</h2>
                {/* Botón con evento de elemento JSX */}
                <button onClick={(e)=>this.handleClick(e,'Paso de parámetros desde un evento')}>Saludar</button>
                {/* Botón con evento de elemento personalizado */}
                {/* <Boton onClick={(e)=>this.handleClick(e,'Paso de parámetros desde un evento')}/> */}
                <Boton myOnClick={(e)=>this.handleClick(e,'Paso de parámetros desde un evento')}/>
            </div>
        );
    }
}
import React, { Component } from 'react';

export default class Padre extends Component{

    state = {
        contador:0
    }

    incrementar = (e)=>{
        this.setState({
            contador:this.state.contador + 1
        });
    }

    decrementar = (e)=>{
        this.setState({
            contador:this.state.contador + 1
        });
    }

    render(){
        return(
            <>
                <h2>Comunicación entre componentes</h2>
                <p>Contador: <b>{this.state.contador}</b></p>
                <Hijo incrementar={this.incrementar} message="Mensaje para el hijo 1" />
                <Hijo incrementar={this.incrementar} message="Mensaje para el hijo 2" />
            </>
        );
    }
}

const Hijo = ({message,incrementar})=>{
    return(
        <>
            <h3>{message}</h3>
            <button onClick={incrementar}>+</button>
        </>
    );
}
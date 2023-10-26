import React from 'react';

// Componente como CLASE
/* class Componente extends Component{

    render(){
        return <h2>{this.props.msg}</h2>
    }
} */

// Componente como FUNCION
/* function Componente(props){
    return <h2>{props.msg}</h2>
} */

// Componente como FUNCIÓN EXPRESADA
const Componente = props => <h2>{props.msg}</h2>

export default Componente;
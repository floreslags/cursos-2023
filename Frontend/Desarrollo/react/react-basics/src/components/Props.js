import React from 'react';
import PropTypes from "prop-types"

export default function Propiedades(props){
    return(
        <div>
            <h2>{props.porDefecto}</h2>
            <ul>
                <li>{props.cadena}</li>
                <li>{props.numero}</li>
                <li>{props.boolean ? 'Verdadero':'falso'}</li>
                <li>{props.arreglo.join(", ")}</li>
                <li>{props.objeto.name + ' - ' +  props.objeto.email}</li>
                <li>{props.arreglo.map(props.funcion).join(", ")}</li>
                <li>{props.elemento}</li>
                <li>{props.componente}</li>
            </ul>
        </div>
    );
}

Propiedades.defaultProps = {
    porDefecto:"Las props"
}

Propiedades.propTypes = {
    numero:PropTypes.number.isRequired
}
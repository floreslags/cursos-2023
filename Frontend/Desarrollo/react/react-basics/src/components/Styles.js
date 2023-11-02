import React from 'react';
import "./Styles.css";
import "./Styles.scss";
import stylesModule from "./Styles.module.css";

export default function Styles(){

    let myStyles = {
        borderRadius:"0.5rem",
        margin:"2rem auto",
        maxWidth:"50%"
    }
    return(
        <section className="styles">
            <h2>Estilos CSS en React</h2>
            <h3 className='bg-react'>Estilos en hojas CSS externa</h3>
            <h3 className='bg-react' style={{borderRadius:"0.25rem",margin:"1rem"}}>Estilos en en línea (atributo Style)</h3>
            <h3 className='bg-react' style={myStyles}>Estilos en línea (con interpolación de variables)</h3>
            <h3 className='bg-react'>Agregando Normalize con 
                <br/>
                <code>@import-normalize;</code>
            </h3>
            <h3 className={stylesModule.error}>Estilos con módulos</h3>
            <h3 className={stylesModule.success}>Estilos con módulos</h3>
            <h3 className="sass-bg">Estilos con SASS</h3>
        </section>
    );
}
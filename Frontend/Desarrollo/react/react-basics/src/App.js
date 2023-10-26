import React from 'react'
import logo from './logo.svg';
import Componente from './components/Componente';
import './App.css';
import Propiedades from './components/Props';

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <section>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        </section>
      <section>
        <Componente msg="Hola Soy un Componente funcional expresado desde una prop" />
        <hr/>
        <Propiedades 
        cadena="Esto es un String" 
        numero={19} 
        boolean={false} 
        arreglo={[1,2,3]}
        objeto={{name:"Sergio",email:"sergio@mail.com"}}  
        funcion = {num => num*num}
        elemento = {<i>Esto es un elemento React</i>}
        componente = {<Componente msg="Componente invocado como Prop"/>}
        />
      </section>
      </header>
    </div>
  );
}

export default App;

import React from 'react'
import logo from './logo.svg';
import Componente from './components/Componente';
import './App.css';
import Propiedades from './components/Props';
import Estado from './components/Estado';
import RenderizadoCondicional from './components/RendererizadoCondicional';
import RenderizadoElementos from './components/RenderizadoElementos';
import {EventosES6,EventosES7,MasSobreEventos} from './components/Eventos';
import Comunicacion from './components/Comunicacion';
import CicloVida from './components/CicloVida';
import AjaxApi from './components/AjaxApi';
import HooksCounter from './components/HooksCounter';
import HooksScroll from './components/HooksScroll';
import HooksClock from './components/HooksClock';
import HooksAjax from './components/HooksAjax';
import HooksCustom from './components/HooksCustom';
import References from './components/References';

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
      <hr/>
        <Estado/>
        <hr/>
        <RenderizadoCondicional/>
        <hr/>
        <RenderizadoElementos/>
        <hr/>
        <EventosES6/>
        <hr/>
        <EventosES7/>
        <hr/>
        <MasSobreEventos/>
        <hr/>
        <Comunicacion/>
        <hr/>
        <CicloVida/>
        <hr/>
        <AjaxApi/>
        <hr/>
        <HooksCounter title="Followers"/>
        <hr/>
        <HooksScroll/>
        <hr/>
        <HooksClock/>
        <hr/>
        <HooksAjax/>
        <hr/>
        <HooksCustom/>
        <hr/>
        <References/>
      </section>
      </header>
    </div>
  );
}

export default App;

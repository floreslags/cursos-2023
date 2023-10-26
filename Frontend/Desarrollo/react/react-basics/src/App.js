import logo from './logo.svg';
import './App.css';

function App() {
  let name = 'Sergio';

  // Operador ternario

  let auth = true;

  let seasons = ["spring","summer","autumn","winter"];
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <label htmlFor="name">name</label>
        <input type="text" id="name"/>
        <h1>{name}</h1>
        <p>{auth?"The user is logged in":"The user is loged out"}</p>
        <p>{2+1}</p>

        <ul>
          {seasons.map((el,index)=>(
            <li key={index}>{el}</li>
          ))}
        </ul>
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
      </header>
    </div>
  );
}

export default App;

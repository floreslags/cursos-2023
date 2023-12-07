import './App.css';
import { ConditionalRender } from './Components/ConditionalRender';
import { Job } from './Components/Job';
import { User } from './Components/User';


function App() {

  return (
    <div className="App">
      <hr/>
      <h2>Module 3</h2>
      <ConditionalRender/>
      <hr/>
      <h2>Module 2</h2>
      <Job company='TCA' position='CEO' salary={10000}/>
      <hr/>
      <h2>Module 1</h2>
      <User className='name' name='Sergio' age={30} email='sergio@mail.com'/>
      <User className='name' name='Brian' age={26} email='brian@mail.com'/>
      <hr/>
    </div>
  );
}

export default App;
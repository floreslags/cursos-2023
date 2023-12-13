import "./App.css";
import { ConditionalRender } from "./Components/ConditionalRender";
import { Job } from "./Components/Job";
import { LifeCycle } from "./Components/LifeCycle";
import { Module10 } from "./Components/Module10";
import { Module11 } from "./Components/Module11";
import { Module12 } from "./Components/Module12";
import { Module13 } from "./Components/Module13";
import { Module7 } from "./Components/Module7";
import { Module8 } from "./Components/Module8";
import { Module9 } from "./Components/Module9";
import { States } from "./Components/States";
import { Tasks } from "./Components/Tasks";
import { User } from "./Components/User";

function App() {
  return (
    <div className='App'>
      <Module13 />
      <hr />
      <Module12 />
      <hr />
      <Module11 />
      <hr />
      <Module10 />
      <hr />
      <Module9 />
      <hr />
      <Module8 />
      <hr />
      <Module7 />
      <hr />
      <h2>Module 6</h2>
      <LifeCycle />
      <hr />
      <h2>Module 5</h2>
      <Tasks />
      <hr />
      <h2>Module 4</h2>
      <States />
      <hr />
      <h2>Module 3</h2>
      <ConditionalRender />
      <hr />
      <h2>Module 2</h2>
      <Job company='TCA' position='CEO' salary={10000} />
      <hr />
      <h2>Module 1</h2>
      <User className='name' name='Sergio' age={30} email='sergio@mail.com' />
      <User className='name' name='Brian' age={26} email='brian@mail.com' />
      <hr />
    </div>
  );
}

export default App;

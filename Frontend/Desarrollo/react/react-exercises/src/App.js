import { CrudApi } from "./components/CrudApi";
import { CrudApp } from "./components/CrudApp";
import { SongSearch } from "./components/SongSearch";

function App() {
  return (
    <>
      <h1>React Exercises</h1>
      <hr/>
      <SongSearch/>
      <hr/>
      <CrudApi/>
      <hr/>
      <CrudApp></CrudApp>
    </>
  );
}

export default App;

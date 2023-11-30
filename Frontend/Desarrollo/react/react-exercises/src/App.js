import { ContactForm } from "./components/ContactForm";
import { CrudApi } from "./components/CrudApi";
import { CrudApp } from "./components/CrudApp";
import Modals from "./components/Modals";
import { NestedSelects } from "./components/NestedSelects";
import { SongSearch } from "./components/SongSearch";

function App() {
  return (
    <>
      <h1>React Exercises</h1>
      <hr/>
      <Modals/>
      <hr/>
      <ContactForm/>
      <hr/>
      <NestedSelects/>
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

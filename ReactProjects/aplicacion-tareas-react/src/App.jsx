import "./App.css";
import MyLogo from "./components/MyLogo";
import ListaDeTareas from "./components/ListaDeTareas";

function App() {
  return (
    <div className="App">
      <div className="container-aplicacion-tareas">
        <MyLogo />
        <div className="tareas-list-main">
          <h1>Mis tareas</h1>
          <ListaDeTareas />
        </div>
      </div>
    </div>
  );
}

export default App;

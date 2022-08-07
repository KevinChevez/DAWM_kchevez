import "./App.css";
import Resenia from "./components/Resenia";

function App() {
  return (
    <div className="App">
      <div className="contenedor-principal">
        <h1>Esto es lo que dicen nuestros compañeros</h1>
        <Resenia
          imagen="kevin"
          nombre="Kevin Chevez"
          pais="Ecuador"
          carrera="Ingenieria en la Ciencias de la Computacion"
          universidad="Espol"
          resenia="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo at
          quae minus inventore iste nulla excepturi voluptatem dolor mollitia
          deleniti nam laboriosam temporibus omnis placeat, laborum totam
          tempore ratione quisquam."
        />
        <Resenia
          imagen="eunice"
          nombre="Eunice Debora"
          pais="Ecuador"
          carrera="Ingeniería Naval"
          universidad="Espol"
          resenia="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo at
          quae minus inventore iste nulla excepturi voluptatem dolor mollitia
          deleniti nam laboriosam temporibus omnis placeat, laborum totam
          tempore ratione quisquam."
        />
        <Resenia
          imagen="melissa"
          nombre="Melissa Selena"
          pais="Ecuador"
          carrera="Matematicas"
          universidad="Espol"
          resenia="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo at
          quae minus inventore iste nulla excepturi voluptatem dolor mollitia
          deleniti nam laboriosam temporibus omnis placeat, laborum totam
          tempore ratione quisquam."
        />
      </div>
    </div>
  );
}

export default App;

import "./App.css";
import myLogo from "./images/my-logo.png";
import Boton from "./components/Boton";
import Contador from "./components/Contador";
import { useState } from "react";

function App() {

  const [numClicks, setNumClicks] = useState (0, );

  const handleClick = (tipo) => {
    console.log(`Clicked: ${tipo}`);
    if(tipo === "Click"){
      aumentarContador();
    }
    else if(tipo === "Reiniciar"){
      reiniciarContador();
    }
  };

  const aumentarContador = () => {
    setNumClicks(numClicks + 1);
  };
  const reiniciarContador = () => {
    setNumClicks(0);
  };

  return (
    <div className="App">
      <div className="my-logo-container">
        <img src={myLogo} alt="Mi Logo" className="my-logo" />
      </div>
      <div className="container-principal">
        <Contador
          numClicks={numClicks}
        />
        <Boton
          texto={"Click"}
          isBtnClick={true}
          handleClick={()=> handleClick("Click")}
        />
        <Boton
          texto={"Reiniciar"}
          isBtnClick={false}
          handleClick={()=> handleClick("Reiniciar")}
        />
      </div>
    </div>
  );
}

export default App;

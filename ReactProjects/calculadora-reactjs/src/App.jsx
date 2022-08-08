import "./App.css";
import Boton from "./components/Boton";
import Pantalla from "./components/Pantalla";
import BotonClear from "./components/BotonClear";
import { useState } from "react";
import { evaluate } from "mathjs";
import MyLogo from "./components/MyLogo";

function App() {
  const [input, setInput] = useState("");

  const concatInput = (val) => {
    setInput(input + val);
  };

  const calcularResultado = () => {
    if(input){
      setInput(evaluate(input));
    }
    else{
      alert("Por favor ingrese valores para realizar calculos");
    }
  };

  return (
    <div className="App">
      <MyLogo />
      <div className="container-calculator">
        <Pantalla input={input} />
        <div className="fila">
          <Boton handleInput={concatInput}>1</Boton>
          <Boton handleInput={concatInput}>2</Boton>
          <Boton handleInput={concatInput}>3</Boton>
          <Boton handleInput={concatInput}>+</Boton>
        </div>
        <div className="fila">
          <Boton handleInput={concatInput}>4</Boton>
          <Boton handleInput={concatInput}>5</Boton>
          <Boton handleInput={concatInput}>6</Boton>
          <Boton handleInput={concatInput}>-</Boton>
        </div>
        <div className="fila">
          <Boton handleInput={concatInput}>7</Boton>
          <Boton handleInput={concatInput}>8</Boton>
          <Boton handleInput={concatInput}>9</Boton>
          <Boton handleInput={concatInput}>*</Boton>
        </div>
        <div className="fila">
          <Boton handleInput={calcularResultado}>=</Boton>
          <Boton handleInput={concatInput}>0</Boton>
          <Boton handleInput={concatInput}>.</Boton>
          <Boton handleInput={concatInput}>/</Boton>
        </div>
        <div className="fila">
          <BotonClear handleClear={() => setInput("")}>Clear</BotonClear>
        </div>
      </div>
    </div>
  );
}

export default App;

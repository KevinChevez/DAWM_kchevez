import React from "react";
import "../stylesheets/Boton.css"

function Boton(props) {
  const isOperator = (valor) => {
    return isNaN(valor) && valor !== "." && valor !== "=";
  };

  return (
    <div
      onClick={() => props.handleInput(props.children)}
      className={`btn-container ${
        isOperator(props.children) ? "operator" : ""
      }`.trimEnd()}
    >
      {props.children}
    </div>
  );
}

export default Boton;

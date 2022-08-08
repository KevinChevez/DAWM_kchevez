import React from "react";
import "../stylesheets/Boton.css"

function Boton({ texto, isBtnClick, handleClick }) {
  return (
    <button
      className={isBtnClick ? "boton-click" : "boton-reiniciar"}
      onClick={handleClick}
    >
      {texto}
    </button>
  );
}

export default Boton;

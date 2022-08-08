import React from "react";
import "../stylesheets/Boton.css"

class Boton extends React.Component {
  render() {
    return (
      <button
      className={this.props.isBtnClick ? "boton-click" : "boton-reiniciar"}
      onClick={this.props.handleClick}
    >
      {this.props.texto}
    </button>
    );
  }
}

// function Boton({ texto, isBtnClick, handleClick }) {
//   return (
//     <button
//       className={isBtnClick ? "boton-click" : "boton-reiniciar"}
//       onClick={handleClick}
//     >
//       {texto}
//     </button>
//   );
// }

export default Boton;

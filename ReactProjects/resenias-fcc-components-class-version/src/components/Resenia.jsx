import React from "react";
import "../stylesheets/Resenia.css";

class Resenia extends React.Component {
  render() {
    return (
      <div className="contenedor-resenia">
        <div className="contenedor-imagen">
          <img
            className="imagen-resenia"
            src={require(`../images/resenia-${this.props.imagen}.jpg`)}
            alt={`Imagen de ${this.props.nombre}`}
          />
        </div>
        <div className="contenedor-texto-resenia">
          <p className="nombre-resenia">
            <b>{this.props.nombre}</b> en {this.props.pais}
          </p>
          <p className="cargo-resenia">
            {this.props.carrera} en <strong>{this.props.universidad}</strong>
          </p>
          <p className="text-resenia">"{this.props.resenia}"</p>
        </div>
      </div>
    );
  }
}

// function Resenia(this.props) {
//   return (
//     <div className="contenedor-resenia">
//       <div className="contenedor-imagen">
//         <img
//           className="imagen-resenia"
//           src={require(`../images/resenia-${this.props.imagen}.jpg`)}
//           alt="Imagen de Kevin"
//         />
//       </div>
//       <div className="contenedor-texto-resenia">
//         <p className="nombre-resenia">
//           <b>{this.props.nombre}</b> en {this.props.pais}
//         </p>
//         <p className="cargo-resenia">
//           {this.props.carrera} en <strong>{this.props.universidad}</strong>
//         </p>
//         <p className="text-resenia">"{this.props.resenia}"</p>
//       </div>
//     </div>
//   );
// }

export default Resenia;

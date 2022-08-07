import React from "react";
import "../stylesheets/Resenia.css";

function Resenia(props) {
  return (
    <div className="contenedor-resenia">
      <div className="contenedor-imagen">
        <img
          className="imagen-resenia"
          src={require(`../images/resenia-${props.imagen}.jpg`)}
          alt="Imagen de Kevin"
        />
      </div>
      <div className="contenedor-texto-resenia">
        <p className="nombre-resenia">
          <b>{props.nombre}</b> en {props.pais}
        </p>
        <p className="cargo-resenia">
          {props.carrera} en <strong>{props.universidad}</strong>
        </p>
        <p className="text-resenia">"{props.resenia}"</p>
      </div>
    </div>
  );
}

export default Resenia;

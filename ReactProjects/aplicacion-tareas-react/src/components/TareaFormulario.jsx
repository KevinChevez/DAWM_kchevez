import React, { useState } from "react";
import "../stylesheets/TareaFormulario.css";
import { v4 as uuidv4 } from "uuid";

function TareaFormulario(props) {
  const [input, setInput] = useState("");

  const handlerCambio = (evento) => {
    setInput(evento.target.value);
  };

  const handleEnvio = (evento) => {
    evento.preventDefault();
    console.log("Enviando form...");

    const tareaNueva = {
      id: uuidv4(),
      texto: input,
      isCompleted: false,
    };

    props.onSubmit(tareaNueva);
  };

  return (
    <form
      action=""
      className="tarea-form"
      onSubmit={handleEnvio}
    >
      <input
        type="text"
        className="tarea-input"
        placeholder="Escriba una tarea..."
        name="texto"
        onChange={handlerCambio}
      />
      <button className="tarea-btn">
        Agregar Tarea
      </button>
    </form>
  );
}

export default TareaFormulario;

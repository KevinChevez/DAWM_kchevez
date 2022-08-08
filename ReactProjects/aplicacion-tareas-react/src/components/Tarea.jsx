import React from "react";
import "../stylesheets/Tarea.css";
import { AiFillCloseCircle } from "react-icons/ai";

function Tarea({ id, texto, isCompleted, completarTarea, eliminarTarea }) {
  return (
    <div
      className={isCompleted ? "container-tarea completada" : "container-tarea"}
    >
      <div 
        className="tarea-text" 
        onClick={() => completarTarea(id)}
      >
        {texto}
      </div>
      <div 
        className="tarea-container-iconos" 
        onClick={() => eliminarTarea(id)}
      >
        <AiFillCloseCircle className="tarea-icono" />
      </div>
    </div>
  );
}

export default Tarea;

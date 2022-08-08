import React, { useState } from "react";
import "../stylesheets/ListaDeTareas.css";
import Tarea from "./Tarea";
import TareaFormulario from "./TareaFormulario";

function ListaDeTareas() {
  const [tareas, setTareas] = useState([]);

  const agregarTarea = (tarea) => {
    if (tarea.texto.trim()) {
      tarea.texto = tarea.texto.trim();
      const tareasActualizadas = [tarea, ...tareas];
      setTareas(tareasActualizadas);
    }
  };

  const completarTarea = (id) => {
    const tareasActualizadas = tareas.map((tarea) => {
      if(tarea.id === id){
        tarea.isCompleted = !tarea.isCompleted;
      }
      return tarea;
    });
    setTareas(tareasActualizadas);
  };

  const eliminarTarea = (id) => {
    const tareasActualizadas = tareas.filter((tarea) => tarea.id !== id);
    setTareas(tareasActualizadas);
  };

  return (
    <>
      <TareaFormulario onSubmit={agregarTarea} />
      <div className="tareas-listas-container">
        {tareas.map((tarea) => (
          <Tarea
            key={tarea.id}
            id={tarea.id}
            texto={tarea.texto}
            isCompleted={tarea.isCompleted}
            completarTarea={completarTarea}
            eliminarTarea={eliminarTarea}
          />
        ))}
      </div>
    </>
  );
}

export default ListaDeTareas;

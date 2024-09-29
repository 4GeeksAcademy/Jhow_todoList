import React, { useState } from "react";

//create your first component
const Home = () => {
  const [inputValue, setInputValue] = useState("");
  const [Tareas, setTareas] = useState([]);

  return (
    <div className="Container">
      <h1>TODOS</h1>
      <ul>
        <li>
          <input
            type="text"
            placeholder="Indica Nueva Tarea"
            onChange={(Event) => setInputValue(Event.target.value)}
            value={inputValue}
            onKeyUp={(Event) => {
              if (Event.key === "Enter") {
                if (inputValue.trim() !== "") {  // Evita agregar tareas vacías
                  setTareas([...Tareas, inputValue]);
                  setInputValue("");
                }
              }
            }}
          ></input>
        </li>

        {/* Verifica si hay tareas */}
        {Tareas.length === 0 ? (
          <li className="no-tasks">No hay tareas, añadir tareas</li>
        ) : (
          Tareas.map((item, index) => (
            <li key={index} className="task-item">
              {item}
              <button
                className="delete-btn"
                onClick={() =>
                  setTareas(Tareas.filter((t, tindex) => index !== tindex))
                }
              >
               🗑️
              </button>
            </li>
          ))
        )}
      </ul>
      <div>{Tareas.length} Tareas</div>
    </div>
  );
};

export default Home;
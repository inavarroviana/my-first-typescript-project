import { useState } from "react";
import "./App.css";

function AppTSC() {
  const [toDos, setToDos] = useState([]);

  function handleSubmit(event) {
    event.preventDefault();
    const { toDo } = event.target.elements;

    setToDos([
      ...toDos,
      { id: Date.now(), completed: false, text: toDo.value },
    ]);
    toDo.value = "";
  }

  function handleToggle(id) {
    const newToDos = [...toDos];
    const toDo = newToDos.find((toDo) => toDo.id === id);
    toDo.completed = !toDo.completed;
    setToDos(newToDos);
  }

  function handleDelete(id) {
    setToDos((newToDos) => newToDos.filter((toDo) => toDo.id !== id));
  }

  return (
    <main className="App">
      <form onSubmit={handleSubmit}>
        <input type="text" name="toDo" />
        <button type="submit">Add</button>
      </form>
      <ul>
        {toDos.map((toDo, index) => (
          <li key={index} className={toDo.completed ? "handleToggle" : ""}>
            <span onClick={() => handleToggle(toDo.id)}>{toDo.text}</span>
            <button onClick={() => handleDelete(toDo.id)}>X</button>
          </li>
        ))}
      </ul>
    </main>
  );
}

export default AppTSC;

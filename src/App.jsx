import { useState } from "react";
import AppNoTSC from "./AppNoTSC";
import AppTSC from "./AppTSC";
import "./App.css";

function App() {
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
    <div className="appDisplay">
      <AppNoTSC />
      <AppTSC />
    </div>
  );
}

export default App;

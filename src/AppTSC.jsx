import { useState } from "react";
import "./App.css";

function AppTSC() {
  const [toDos, setToDos] = useState([]);

  return (
    <main className="App">
      <form>
        <input type="text" />
        <button type="submit">Add</button>
      </form>
      <ul>
        {toDos.map((toDo) => (
          <li key={toDo.id}>{toDo.text}</li>
        ))}
      </ul>
    </main>
  );
}

export default AppTSC;

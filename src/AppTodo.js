import Button from "./Button";
import styles from "./App.module.css";
import { useState, useEffect } from "react";

function App() {
  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([]);
  const onChange = (e) => setToDo(e.target.value);
  const onSubmit = (e) => {
    e.preventDefault();
    if (toDo === "") {
      return;
    }
    setToDo("");
    setToDos((pre) => [toDo, ...pre]); // pre 쌓여가는 데이터(현재 노출되는 데이터)
  };
  console.log(toDos);
  console.log(toDos.map((item, idx) => <li key={idx}>{item}</li>));
  return (
    <div>
      <h1>My To Do{toDos.length}</h1>
      <form onSubmit={onSubmit}>
        <input value={toDo} type="text" onChange={onChange}></input>
        <button>Add To Do</button>
      </form>
      <ul>
        {toDos.map((item, idx) => (
          <li key={idx}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;

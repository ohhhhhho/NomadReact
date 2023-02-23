import Button from "./Button";
import styles from "./App.module.css";
import { useState, useEffect } from "react";

function App() {
  const [toDo, setToDo] = useState("");
  const onChange = (e) => {
    setToDo(e.target.value);
  };
  console.log(toDo);
  const onSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="write to do"
          value={toDo}
          onChange={onChange}
        />
        <button>btn</button>
      </form>
    </div>
  );
}

export default App;

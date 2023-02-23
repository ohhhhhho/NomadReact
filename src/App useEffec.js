import Button from "./Button";
import styles from "./App.module.css";
import { useState, useEffect } from "react";

function Hello() {
  const destroyedFn = () => {
    console.log("bye :)");
  };
  const effecFn = () => {
    console.log("created :)");
    return destroyedFn;
  };
  useEffect(effecFn, []);
  return <h1>Hello</h1>;
}

//위에랑 동일
// useEffect(() => {
//   console.log("created :)");
//   return () => console.log("bye :)");
// },[])

function App() {
  const [show, setShow] = useState(false);
  const onClick = () => setShow((pre) => !pre);
  return (
    <div>
      {show ? <Hello /> : null}
      <button onClick={onClick}>{show ? "Hide" : "Show"}</button>
    </div>
  );
}

export default App;

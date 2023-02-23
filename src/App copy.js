import Button from "./Button";
import styles from "./App.module.css";
import { useState, useEffect } from "react";

function App() {
  const [counter, setCounter] = useState(0);
  const [keyword, setkeyword] = useState("");
  const onClick = () => setCounter((prev) => prev + 1);
  const onChange = (e) => {
    setkeyword(e.target.value);
  };
  useEffect(() => {
    //키워드 변화될때마다 실행
    if (keyword !== "" && keyword.length > 5) {
      console.log("search", keyword);
    }
  }, [keyword]);
  useEffect(() => {
    //처음 한번만 실행
    console.log("call api111");
  }, []);
  return (
    <div>
      <input
        value={keyword}
        type="text"
        placeholder="search Here"
        onChange={onChange}
      />
      <h1 className={styles.title}>{counter}</h1>
      <Button text={"continuedd"} onClick={onClick} />
    </div>
  );
}

export default App;

import Button from "./Button";
import styles from "./App.module.css";
import { useState, useEffect } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers?limit=10")
      .then((res) => res.json())
      .then((json) => {
        setCoins(json);
        setLoading(false);
      });
  }, []);
  return (
    <>
      <h1>The Coins!{coins.length}</h1>
      {loading ? (
        <strong>loading...</strong>
      ) : (
        <ul>
          {coins.map((item) => (
            <li key={item.id}>
              {item.name}({item.symbol}):$ {item.quotes.USD.price}
            </li>
          ))}
        </ul>
      )}
    </>
  );
}

export default App;

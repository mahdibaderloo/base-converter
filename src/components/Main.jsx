import { useState } from "react";
import useConvert from "../hooks/useConvert";

function Main() {
  const [from, setFrom] = useState("Decimal");
  const [to, setTo] = useState("Binary");
  const [amount, setAmount] = useState("");
  const [isConvert, setIsConvert] = useState(false);
  const { result } = useConvert(from, to, amount);

  function handleFrom(value) {
    setIsConvert(false);
    setFrom(value);
  }

  function handleTo(value) {
    setIsConvert(false);
    setTo(value);
  }

  function handleInput(value) {
    setIsConvert(false);
    setAmount(value);
  }

  return (
    <main>
      <div>
        <p>From:</p>
        <select value={from} onChange={(e) => handleFrom(e.target.value)}>
          <option value="Decimal">Decimal 10</option>
          <option value="Binary">Binary 2</option>
          <option value="Octal">Octal 8</option>
          <option value="Hexadecimal">Hexadecimal 16</option>
        </select>
      </div>
      <div>
        <p>To:</p>
        <select value={to} onChange={(e) => handleTo(e.target.value)}>
          <option value="Binary">Binary 2</option>
          <option value="Octal">Octal 8</option>
          <option value="Hexadecimal">Hexadecimal 16</option>
          <option value="Decimal">Decimal 10</option>
        </select>
      </div>
      <input
        type="text"
        value={amount}
        onChange={(e) => handleInput(e.target.value)}
      />
      <button onClick={() => setIsConvert(true)}>Result</button>
      <p>{isConvert ? result : ""}</p>
    </main>
  );
}

export default Main;

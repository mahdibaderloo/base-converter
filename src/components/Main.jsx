import { useState } from "react";

function Main({ children }) {
  const [from, setFrom] = useState("Decimal");
  const [to, setTo] = useState("Binary");
  const [amount, setAmount] = useState(0);

  return (
    <main>
      <div>
        <p>From:</p>
        <select onClick={(e) => setFrom(e.target.value)}>
          <option value="Decimal">Decimal 10</option>
          <option value="Binary">Binary 2</option>
          <option value="Octal">Octal 8</option>
          <option value="Hexadecimal">Hexadecimal 16</option>
        </select>
      </div>
      <div>
        <p>To:</p>
        <select onClick={(e) => setTo(e.target.value)}>
          <option value="Binary">Binary 2</option>
          <option value="Octal">Octal 8</option>
          <option value="Hexadecimal">Hexadecimal 16</option>
          <option value="Decimal">Decimal 10</option>
        </select>
      </div>
      <input type="text" onChange={(e) => setAmount(e.target.value)} />
      {children}
      <p>0101101</p>
    </main>
  );
}

export default Main;

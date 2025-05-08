import { useState } from "react";
import useConvert from "../hooks/useConvert";

const validDecimal = /^\d+$/;
const validBinary = /^[01]+$/;
const validOctal = /^[0-7]+$/;
const validHexadecimal = /^[0-9a-f]+$/i;

function Main() {
  const [from, setFrom] = useState("Decimal");
  const [to, setTo] = useState("Binary");
  const [amount, setAmount] = useState("");
  const [validAmount, setValidAmount] = useState(false);
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

    if (validAmountCheck(from, value)) {
      setValidAmount(true);
    } else {
      setValidAmount(false);
    }
  }

  function handleCheck() {
    if (validAmountCheck(from, amount)) {
      setIsConvert(true);
      setValidAmount(true);
    } else {
      setValidAmount(false);
      setIsConvert(false);
    }
  }

  return (
    <main>
      <div className="ml-4 mb-4">
        <p>From:</p>
        <select
          value={from}
          onChange={(e) => handleFrom(e.target.value)}
          className=" bg-slate-500 p-1 rounded-lg text-slate-900 border-none outline-none"
        >
          <option value="Decimal">Decimal 10</option>
          <option value="Binary">Binary 2</option>
          <option value="Octal">Octal 8</option>
          <option value="Hexadecimal">Hexadecimal 16</option>
        </select>
      </div>
      <div className="ml-4 ">
        <p>To:</p>
        <select
          value={to}
          onChange={(e) => handleTo(e.target.value)}
          className=" bg-slate-500 p-1 rounded-lg text-slate-900 border-none outline-none"
        >
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
        placeholder="Amount..."
        className="w-[90%] h-10 mt-8 mb-4 block mx-auto text-center bg-slate-500 rounded-xl border-none outline-none text-slate-900 font-bold"
      />
      {validAmount ? null : (
        <span className="w-full mb-4 block text-center text-red-400">
          Please enter a valid amount
        </span>
      )}
      <button
        onClick={handleCheck}
        className="w-[90%] h-10 block mx-auto bg-slate-500 rounded-xl"
      >
        Result
      </button>
      <p className="w-full h-10 mt-4 block text-center tracking-wider">
        {isConvert ? result : ""}
      </p>
    </main>
  );
}

function validAmountCheck(from, amount) {
  if (from === "Decimal" && validDecimal.test(amount)) {
    return true;
  }
  if (from === "Binary" && validBinary.test(amount)) {
    return true;
  }
  if (from === "Octal" && validOctal.test(amount)) {
    return true;
  }
  if (from === "Hexadecimal" && validHexadecimal.test(amount)) {
    return true;
  } else {
    return false;
  }
}

export default Main;

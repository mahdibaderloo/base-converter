import { useEffect, useState } from "react";

export default function useConvert(from, to, amount) {
  const [result, setResult] = useState("");

  useEffect(
    function () {
      if (from === "Binary" && to === "Decimal" && amount !== "")
        setResult(binaryToDecimal(amount));
      if (from === "Octal" && to === "Decimal" && amount !== "")
        setResult(octalToDecimal(amount));
    },
    [amount, from, to]
  );

  return { result };
}

function binaryToDecimal(amount) {
  const amountArray = amount.split("");
  let convertResult = [];
  let j = 0;
  for (let i = amountArray.length - 1; i >= 0; i--) {
    convertResult.push(Number(amountArray[i]) * 2 ** j++);
  }
  const finalResult = convertResult.reduce((prev, cur) => prev + cur, 0);
  return finalResult;
}

function octalToDecimal(amount) {
  const amountArray = amount.split("");
  let convertResult = [];
  let j = 0;
  for (let i = amountArray.length - 1; i >= 0; i--) {
    convertResult.push(Number(amountArray[i]) * 8 ** j++);
  }
  const finalResult = convertResult.reduce((prev, cur) => prev + cur, 0);
  return finalResult;
}

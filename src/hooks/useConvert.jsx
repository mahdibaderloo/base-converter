import { useEffect, useState } from "react";

export default function useConvert(from, to, amount) {
  const [result, setResult] = useState("");

  useEffect(
    function () {
      if (from === "Binary" && to === "Decimal" && amount !== "") {
        setResult(fromBinaryToDecimal(amount));
      }
    },
    [amount, from, to]
  );

  return { result };
}

function fromBinaryToDecimal(amount) {
  const amountArray = amount.split("");
  let convertResult = [];
  let j = 0;
  for (let i = amountArray.length - 1; i >= 0; i--) {
    convertResult.push(Number(amountArray[i]) * 2 ** j++);
  }
  const finalResult = convertResult.reduce((prev, cur) => prev + cur, 0);
  return finalResult;
}

import { useEffect, useState } from "react";

export default function useConvert(from, to, amount) {
  const [result, setResult] = useState("");

  useEffect(
    function () {
      if (from === "Decimal" && to === "Binary")
        setResult(decimalToBinary(amount));

      if (from === "Decimal" && to === "Octal")
        setResult(decimalToOctal(amount));

      if (from === "Decimal" && to === "Hexadecimal")
        setResult(decimalToHexadecimal(amount));

      if (from === "Binary" && to === "Decimal")
        setResult(binaryToDecimal(amount));

      if (from === "Binary" && to === "Octal") setResult(binaryToOctal(amount));

      if (from === "Binary" && to === "Hexadecimal")
        setResult(binaryToHexadecimal(amount));

      if (from === "Octal" && to === "Decimal")
        setResult(octalToDecimal(amount));

      if (from === "Octal" && to === "Binary") setResult(octalToBinary(amount));

      if (from === "Octal" && to === "Hexadecimal")
        setResult(octalToHexadecimal(amount));

      if (from === "Hexadecimal" && to === "Decimal")
        setResult(hexadecimalToDecimal(amount));

      if (from === "Hexadecimal" && to === "Binary")
        setResult(hexadecimalToBinary(amount));

      if (from === "Hexadecimal" && to === "Octal")
        setResult(hexadecimalToOctal(amount));

      if (from === to && amount !== "") {
        return setResult(amount);
      }
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

function hexadecimalToDecimal(amount) {
  const amountArray = amount.split("");
  let convertResult = [];
  let j = 0;
  for (let i = amountArray.length - 1; i >= 0; i--) {
    if (amountArray[i].toLowerCase() === "a")
      convertResult.push(10 * 16 ** j++);
    else if (amountArray[i].toLowerCase() === "b")
      convertResult.push(11 * 16 ** j++);
    else if (amountArray[i].toLowerCase() === "c")
      convertResult.push(12 * 16 ** j++);
    else if (amountArray[i].toLowerCase() === "d")
      convertResult.push(13 * 16 ** j++);
    else if (amountArray[i].toLowerCase() === "e")
      convertResult.push(14 * 16 ** j++);
    else if (amountArray[i].toLowerCase() === "f")
      convertResult.push(15 * 16 ** j++);
    else convertResult.push(Number(amountArray[i]) * 16 ** j++);
  }
  const finalResult = convertResult.reduce((prev, cur) => prev + cur, 0);
  return finalResult;
}

function decimalToBinary(amount) {
  let reminderArray = [];
  let divisionResult = Number(amount);

  while (divisionResult >= 0) {
    reminderArray.push(Math.floor(divisionResult % 2));
    divisionResult /= 2;

    if (Math.floor(divisionResult) === 0) break;
  }
  const finalResult = reminderArray.reverse().join("");
  return finalResult;
}

function decimalToOctal(amount) {
  let reminderArray = [];
  let divisionResult = Number(amount);

  while (divisionResult >= 0) {
    reminderArray.push(Math.floor(divisionResult % 8));
    divisionResult /= 8;

    if (Math.floor(divisionResult) === 0) break;
  }
  const finalResult = reminderArray.reverse().join("");
  return finalResult;
}

function decimalToHexadecimal(amount) {
  let reminderArray = [];
  let divisionResult = Number(amount);

  while (divisionResult >= 0) {
    if (Math.floor(divisionResult % 16) === 10) reminderArray.push("A");
    else if (Math.floor(divisionResult % 16) === 11) reminderArray.push("B");
    else if (Math.floor(divisionResult % 16) === 12) reminderArray.push("C");
    else if (Math.floor(divisionResult % 16) === 13) reminderArray.push("D");
    else if (Math.floor(divisionResult % 16) === 14) reminderArray.push("E");
    else if (Math.floor(divisionResult % 16) === 15) reminderArray.push("F");
    else reminderArray.push(Math.floor(divisionResult % 16));
    divisionResult /= 16;

    if (Math.floor(divisionResult) === 0) break;
  }
  const finalResult = reminderArray.reverse().join("");
  return finalResult;
}

function binaryToOctal(amount) {
  const decimal = binaryToDecimal(amount);
  return decimalToOctal(decimal);
}

function binaryToHexadecimal(amount) {
  const decimal = binaryToDecimal(amount);
  return decimalToHexadecimal(decimal);
}

function octalToBinary(amount) {
  const decimal = octalToDecimal(amount);
  return decimalToBinary(decimal);
}

function hexadecimalToBinary(amount) {
  const decimal = hexadecimalToDecimal(amount);
  return decimalToBinary(decimal);
}

function octalToHexadecimal(amount) {
  const decimal = octalToDecimal(amount);
  return decimalToHexadecimal(decimal);
}

function hexadecimalToOctal(amount) {
  const decimal = hexadecimalToDecimal(amount);
  return decimalToOctal(decimal);
}

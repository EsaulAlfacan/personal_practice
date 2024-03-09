// 12) Programa una función que determine si un número es primo (aquel que solo es divisible por sí mismo y 1) o no, pe. miFuncion(7) devolverá true.

const FUN_NUM_PRIMO = (num) => {
  if (!num) return "No ingresaste un númnero";
  if (typeof num !== "number") return `El dato ${num} no es un número`;
  if (num <= 0) return "El número no puede ser igual o menor que 0";
  return num % num === 0 && num % 1 === 0 && num % 2 !== 0
    ? "El número es primo"
    : `El número ${num} no es primo`;
};

console.log(FUN_NUM_PRIMO(2));

// 13) Programa una función que determine si un número es par o impar, pe. miFuncion(29) devolverá Impar.
const NUM_PAR_IMPAR = (num1) => {
  if (!num1) return "No ingresaste un númnero";
  if (typeof num1 !== "number") return `El dato ${num1} no es un número`;
  if (num1 <= 0) return "El número no puede ser igual o menor que 0";

  return num1 % num1 === 0 && num1 % 2 === 0
    ? "El número es par"
    : `El número ${num1} no es par`;
};

console.log(NUM_PAR_IMPAR(53));

// 14) Programa una función para convertir grados Celsius a Fahrenheit y viceversa, pe.
//miFuncion(0, "C") devolverá 32°F.

//°C = (°F - 32) x 5/9

const CONVERTIR_C_A = (num2) => {
  if (typeof num2 !== "number") return `El dato ${num2} no es un número`;

  let aCelcisu = (num2 - 32) * (5 / 9);
  let aFaren = num2 * (5 / 9) + 32;

  return `La temperatura de ${num2} unidades, corresponde a ${aCelcisu}°C y a ${aFaren}°F`;
};

console.log(CONVERTIR_C_A(0))

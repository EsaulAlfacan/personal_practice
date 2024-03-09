// 9) Programa una función que obtenga un numero aleatorio entre 501 y 600.
const NUMERO_ALEATORIO = () => parseInt(Math.random() * 100) + 500;
console.log(NUMERO_ALEATORIO());
console.log(NUMERO_ALEATORIO());

// 10) Programa una función que reciba un número y evalúe si es capicúa o no (que se lee igual en un sentido que en otro), pe. miFuncion(2002) devolverá true.
const NUMERO_CAPICUA = (numero) => {
  let numeroConvertido = numero.toString().split("").reverse();
  let numeroNormal = numero.toString().split("");

  console.log(numeroConvertido, numeroNormal);

  if (!numero) {
    return "No es un número";
  } else if (typeof numero !== "number") {
    return "No es un número";
  } else if (numeroConvertido.join("") === numeroNormal.join("")) {
    return true;
  } else {
    return false;
  }
};

console.log(NUMERO_CAPICUA(2002));

// 11) Programa una función que calcule el factorial de un número (El factorial de un entero positivo n, se define como el producto de todos los números enteros positivos desde 1 hasta n), pe. miFuncion(5) devolverá 120.
const FACTORIAL = function (num) {
  if (!num) {
    return "No ingresaste un número";
  } else if (typeof num !== "number") {
    return "No es un número";
  } else {
    let resultado = 1;
    for (let i = 1; i <= num; i++) {
      resultado *= i;
    }
    return resultado;
  }
};

console.log(FACTORIAL(5));

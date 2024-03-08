// 1) Programa una función que cuente el número de caracteres de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá 10.
function contarCaracteres(texto) {
  if (typeof texto !== "string") {
    return "No ingresaste un texto";
  } else {
    return `La cantida de caracteres que tiene tu texto es de ${texto.length}`;
  }
}

let texto = "Hola mundo";
let longitudTexto = contarCaracteres(texto);

console.log(longitudTexto);

// 2) Programa una función que te devuelva el texto recortado según el número de caracteres indicados, pe. miFuncion("Hola Mundo", 4) devolverá "Hola".
function devolverCaracteres(texto1, n1, n2) {
  if (
    typeof texto1 === "string" &&
    typeof n1 === "number" &&
    typeof n2 === "number"
  ) {
    return `La porción de su texto especficado es: ${texto1.slice(n1, n2)}`;
  } else {
    return "Algún dato esta mal";
  }
}

const texto1 = "Hola Mundo";
const textoCortado = devolverCaracteres(texto1, 0, 4);
console.log(textoCortado);

// 3) Programa una función que dada una String te devuelva un Array de textos separados por cierto caracter, pe. miFuncion devolverá ['hola', 'que', 'tal'].
function convertirTexto(TEXTO) {
  let convetir = TEXTO.split(" ");
  console.log(convetir);
}
convertirTexto("hola que tal");

// 4) Programa una función que repita un texto X veces, pe. miFuncion('Hola Mundo', 3) devolverá Hola Mundo Hola Mundo Hola Mundo.
function repetirTexto(texto, n) {
  console.log(texto.repeat(n));
}
repetirTexto("Hola mundo, ", 3);

/* XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX */

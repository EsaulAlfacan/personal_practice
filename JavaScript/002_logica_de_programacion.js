// 5) Programa una función que invierta las palabras de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá "odnuM aloH".

const invertirTexto = (texto) => {
  if (!texto) return "No ingresaste un texto";
  if (typeof texto !== "string") return "No ingresaste un texto";
  let textoInvertido = texto.split("").reverse().join("");
  console.log(textoInvertido);
  return textoInvertido;
};
texto = "Hola Mundo";
console.log(invertirTexto(texto));

// 6) Programa una función para contar el número de veces que se repite una palabra en un texto largo, pe. miFuncion("hola mundo adios mundo", "mundo") devolverá 2.

const contarRepeticiones = (texto1, palabra) => {
  if (!texto1) return "No ingresaste un texto";
  if (typeof texto1 !== "string") return "No ingresaste un texto";
  if (!palabra) return "No ingresaste una palabra";
  if (typeof palabra !== "string") return "No ingresaste una palabra";

  textoLower = texto1.toLowerCase();
  palabraLower = palabra.toLowerCase();

  const palabraConvertidaArraglo = textoLower.split(" ");
  console.log(palabraConvertidaArraglo);
  let contador = 0;
  for (i = 0; i < palabraConvertidaArraglo.length; i++) {
    if (palabraConvertidaArraglo[i] === palabraLower) {
      contador++;
    }
  }
  return contador;
};

let textoContarRepeticiones = "hola mundo adios mundo";
let palabraContarRepeticones = "mundo";
console.log(
  contarRepeticiones(textoContarRepeticiones, palabraContarRepeticones)
);

// 7) Programa una función que valide si una palabra o frase dada, es un palíndromo (que se lee igual en un sentido que en otro), pe. mifuncion("Salas") devolverá true.
const PALINDROMO = (texto2) => {
  if (!texto2) return "No ingresaste un texto";
  if (typeof texto2 !== "string") return "No ingresaste un texto";

  let textoNormal = texto2.toLocaleLowerCase().split("");
  let textoAArreglo = texto2.toLocaleLowerCase().split("").reverse();
  console.log(textoNormal, textoAArreglo);

  if (textoNormal === textoAArreglo) {
  }
  return true;
};

let textoPalindromo = "salas";
console.log(PALINDROMO(textoPalindromo));

// 8) Programa una función que elimine cierto patrón de caracteres de un texto dado, pe. miFuncion("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz") devolverá  "1, 2, 3, 4 y 5.

const PATRON_DE_CARACTERES = (texto3, patron) => {
  if (!patron) return "No ingresate ningun patrón";
  if (!texto3) return "No ingresate ningun texto";
  if (typeof patron !== "string") return "No ingresate un valor de texto";
  if (typeof texto3 !== "string") return "No ingresate un valor de texto";
  let textoFiltrado = texto3.replace(new RegExp(patron, "ig"), "");
  return textoFiltrado;
};

const TEXTO_A_FILTRAR = "xyz";
let patronDado = "xyz1, xyz2, xyz3, xyz4, xyz5";
console.log(PATRON_DE_CARACTERES(patronDado, TEXTO_A_FILTRAR));

// 5) Programa una función que invierta las palabras de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá "odnuM aloH".
const fInvertirTexto = (text) => {
  if (!text) return "Ingresa un texto";
  if (typeof text !== "string") return "Solo puede ingresar textos";
  if (text.length >= text.length[19])
    return "No se permiten más de 50 caracteres";

  //Validación 1: Sin caraceteres especiales
  const regex = /[a-z]/gi;
  if (!regex.test(text))
    return "El texto no puene incluir caracteres especiales";
  const palabrasDenegadas = ["tonto", "menso", "mongolito"];
  for (let i = 0; i < text.length; i++) {
    if (text[i].includes(palabrasDenegadas)) i++;
    return "El texto incluye palabras prohibidas";
  }
};

const t1P = "Hola";
console.log(fInvertirTexto(t1P));

// 6) Programa una función para contar el número de veces que se repite una palabra en un texto largo, pe. miFuncion("hola mundo adios mundo", "mundo") devolverá 2.

// 7) Programa una función que valide si una palabra o frase dada, es un palíndromo (que se lee igual en un sentido que en otro), pe. mifuncion("Salas") devolverá true.

// 8) Programa una función que elimine cierto patrón de caracteres de un texto dado, pe. miFuncion("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz") devolverá  "1, 2, 3, 4 y 5.

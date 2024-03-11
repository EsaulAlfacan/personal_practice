// 1) Programa una función que cuente el número de caracteres de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá 10.

const fContadorCaracteres = (cadena) => {
  //Validación 0: Permitir un máximo de 50 caracteres
  if (cadena.length >= 50) return "No puedes ingresar más de 50 caracteres";
  //Validación 1: No incluir palabras antisonantes
  const PALABRAS_NO_DESEADAS = ["tonto", "menso", "sonso"];
  for (const palabra of PALABRAS_NO_DESEADAS) {
    if (cadena.includes(palabra)) {
      return `No puedes usar la palabra "${palabra}"`;
    }
  }

  // Validación 2: No permitir que no ingrese ningún valor
  if (!cadena) return "No ingresaste ningún dato";

  // Validación 3: Solo permitir que el valor sea un texto
  if (typeof cadena !== "string") return "El dato debe ser un texto";

  // Validación 4: Verificar que no tenga caracteres especiales
  const CADENA_TRANSFORMADA_LOWER = cadena.toLocaleLowerCase();
  const REGEX = /^([?¿¡.,;:!a-zA-ZñÑáéíóúÁÉÍÓÚçÇ0-9\s\p{Punct}]+)$/i;

  // Se comprueba si la cadena contiene caracteres especiales
  if (!REGEX.test(CADENA_TRANSFORMADA_LOWER)) {
    return "No puedes incluir caracteres especiales";
  }

  // Se eliminan los espacios en blanco del inicio y el final de la cadena
  const CADENA_TRIM = CADENA_TRANSFORMADA_LOWER.trim();

  // Retorno del conteo de caracteres
  return CADENA_TRIM.length;
};

console.log(
  fContadorCaracteres("Hola Mundo")
);

// 3) Programa una función que dada una String te devuelva un Array de textos separados por cierto caracter, pe. miFuncion devolverá ['hola', 'que', 'tal']."));

// 2) Programa una función que te devuelva el texto recortado según el número de caracteres indicados, pe. miFuncion("Hola Mundo", 4) devolverá "Hola".

// 3) Programa una función que dada una String te devuelva un Array de textos separados por cierto caracter, pe. miFuncion devolverá ['hola', 'que', 'tal'].

// 4) Programa una función que repita un texto X veces, pe. miFuncion('Hola Mundo', 3) devolverá Hola Mundo Hola Mundo Hola Mundo.

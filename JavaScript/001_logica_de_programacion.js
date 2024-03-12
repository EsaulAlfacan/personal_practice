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

console.log(fContadorCaracteres("Hola Mundo"));

// 2) Programa una función que dada una String te devuelva un Array de textos separados por cierto caracter, pe. miFuncion devolverá ['hola', 'que', 'tal']."));
const fStringToArray = (texto) => {
  //Validación 0: No permitir que el texto este vacio
  if (!texto) return "No ingresaste ningun texto";

  //Validacion 1: No permir palabras antisonantes
  for (let i = 0; i < texto.length; i++) {
    let palabraNo = ["menso", "sonso", "cabezon"];
    if (texto[i].includes(palabraNo))
      return `No se permite la palabra" ${palabraNo}`;
  }
  //Validacion 2: Que el dato ingresado sea un string
  if (typeof texto !== "string") return "Debe ingresar un texto";

  //Validacion 3: No permitir caracteres diferentes del abecedario
  const REGEXA = /[A-Za-z\s]/gi;
  for (let e = 0; e < texto.length; e++) {
    if (!REGEXA.test(texto)) return "No puede contener caracteres especiales";
  }

  //Código
  let textoConvertido = texto.split(" ");
  return textoConvertido;
};

const textoPrueba = "hola que tal";
console.log(fStringToArray(textoPrueba));

// 3) Programa una función que te devuelva el texto recortado según el número de caracteres indicados, pe. miFuncion("Hola Mundo", 4) devolverá "Hola".
const fCortarCadena = (tCortar, nCortar) => {
  // Validacion 0: Verificar que los datos no vengan vacios
  if (!tCortar) return "Ingrese un texto";
  if (!nCortar) return "Ingrese un número";

  // Validacion de tipo de datos
  if (typeof tCortar !== "string") return "Este campo solo permite texto";
  if (typeof nCortar !== "number") return "Este campo solo permite números";

  // Validacion de longitud del número
  if (nCortar > tCortar.length)
    return "El número no puede ser mayor que la longitud del texto";

  //Validacion de caracteres para el texto
  const REGEXB = /[a-z\s]/gi;
  for (let i = 0; i > tCortar.length; i++) {
    if (REGEXB.test(tCortar[i]))
      return "El texto no puede contener caracteres especiales";
  }

  let textoCortado = tCortar.slice(0,nCortar);
  return textoCortado;
};

const textoPrueba2 = "hola que tal";
console.log(fCortarCadena(textoPrueba2,4));

// 4) Programa una función que repita un texto X veces, pe. miFuncion('Hola Mundo', 3) devolverá Hola Mundo Hola Mundo Hola Mundo.

/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 * 
 * @fileoverview Code example to learn the Google Javascript style
 * @author Raúl Álvarez Pérez
 * @author Tomás De Armas Déniz
 * @since Feb 05 2024  
 * @see {@link https://github.com/ULL-ESIT-PAI-2023-2024/2023-2024-pai-codestyle-raul_tomas.git}
 */

/**
 * Arrow functions can be documented just like normal functions.
 * @param {number} numberParam A number to add.
 * @param {string} stringParam Another number to add that happens to be a string.
 * @return {number} The sum of the two parameters.
 */
const addFunction = (numberParam, stringParam) => numberParam + Number(stringParam);

// Disallowed

/**
 * A function with no params and no returned value.
 * This single expression body usage is illegal because the program logic does
 * not require returning a value and we're missing the `void` operator.
 */
const oneFunction = () => anotherFunction();
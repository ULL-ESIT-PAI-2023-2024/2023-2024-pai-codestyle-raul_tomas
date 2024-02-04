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

// Destructuring for variables
const [firstPosition, secondPosition, thirdPosition, ...otherPositions] = someResults();
let [, secondPositionb,, fourthPosition] = someArray;

// Destructuring for function parameters
/** @param {!Array<number>=} param1 */
function optionalDestructuring([firstValue = 4, secondValue = 2] = []) { /* … */ };

// This is disallowed, always specify [] as the default value, for optional params
function badDestructuring([firstValue, secondValue] = [4, 2]) { /* … */ }; 
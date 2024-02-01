/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Raúl Álvarez Pérez
 * @author Tomás De Armas Déniz
 * @since Feb 05 2024
 * @desc Code example to learn the Google Javascript style    
 * @see {@link https://github.com/ULL-ESIT-PAI-2023-2024/2023-2024-pai-codestyle-raul_tomas.git}
 */

// Defined directly on the exports

/** @param {string} str */
exports.processString = (str) => {
  // Process the string.
};

// Declared locally and then exported

/** @param {string} str */
const processString = (str) => {
  // Process the string.
};
  
exports = {processString};
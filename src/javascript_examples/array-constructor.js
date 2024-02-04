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

// Disallowed
const wrongArray1 = new Array(value1, value2, value3);
const wrongArray2 = new Array(value1, value2);
const wrongArray3 = new Array(value1);
const wrongArray4 = new Array();

// Allowed
const correctArray1 = [value1, value2, value3];
const correctArray2 = [value1, value2];
const correctArray3 = [value1];
const correctArray4 = [];
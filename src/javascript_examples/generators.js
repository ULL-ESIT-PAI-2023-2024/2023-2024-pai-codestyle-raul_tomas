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

// All allowed

/** @return {!Iterator<number>} */
function* generator1() {
  yield 42;
}

/** @return {!Iterator<number>} */
const generator2 = function*() {
  yield* generator1();
}

class SomeClass {
  /** @return {!Iterator<number>} */
  * generator() {
    yield 42;
  }
}
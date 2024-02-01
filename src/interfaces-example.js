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

/**
 * An interface example.
 * @record
 */
class Algorithm {
  constructor() {
    /** @type {number} The time it takes to solve the problem. */
    this.time;
  }

  /**
   * Performs the algorithm according to the given strategy.
   * @param {!SubAlgorithm} strategy
   */
  solution(strategy) {}
}
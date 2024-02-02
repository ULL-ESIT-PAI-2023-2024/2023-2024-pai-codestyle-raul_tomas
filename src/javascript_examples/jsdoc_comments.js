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

// ALLOWED

/**
 * Multiple lines of JSDoc text are written here,
 * wrapped normally.
 * @param {number} arg A number to do something to.
 */
function doSomething(arg) {/* ... */}

/** One line comment example */
function doSomething() {/* ... */}

/**
 * Multiple simple tags (like "export" and "final")
 * may be combined in one line.
 * @export @final
 * @implements {Iterable<TYPE>}
 * @template TYPE
 */
class MyClass { /* ... */ }

/**
 * Illustrates line wrapping for description and, also,
 * for long param/return descriptions.
 * @param {string} foo This is a param with a description
 *     too long to fit in one line.
 * @return {number} This returns something that has a
 *     description too long to fit in one line.
 */
exports.method = function(foo) {
  return 5;
};

// DISALLOWED

/**
 * Multiple lines of JSDoc text are written here,
 * wrapped normally.
 * @param {number} arg A arg @param {number} arg2 A number.
 */
function doSomething(arg, number) {/* ... */}



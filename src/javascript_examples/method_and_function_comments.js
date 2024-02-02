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

/** A class that does something. */
class SomeClass extends SomeBaseClass {
  /**
   * Operates on an instance of MyClass and returns something.
   * @param {!MyClass} obj An object that for some reason needs detailed
   *     explanation that spans multiple lines.
   * @param {!OtherClass} obviousOtherClass
   * @return {boolean} Whether something occurred.
   */
  someMethod(obj, obviousOtherClass) { /* ... */ }

  /** @override */
  overriddenMethod(param) { /* ... */ }
}

/*
 * If the description of the function is unnecessary,
 * you can omit it and use inline JSDoc annotations
 */

// ALLOWED

/**
 * This description is very important
 * @param {number} arg 
 * @return {string}
 */
function foo( arg) { /* ... */ }

function /** string */ foo(/** number */ arg) { /* ... */ }

// DISALLOWED

/**
 * It can not combine with inline JSDoc annotations
 */
function /** string */ foo(/** number */ arg) { /* ... */ }
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

// These are good import statements
import * as fileOne from '../file-one.js';
import * as fileTwo from '../file_two.js';
import * as fileThree from '../filethree.js';

// Here these names are derived from the imported file name
import MyClass from '../my-class.js';
import myFunction from '../my_function.js';
import SOME_CONSTANT from '../someconstant.js';

// These aren't
import * as fileOne from '../directory/file'; // No file extension
// Here it imports the same file multiple times
import {short} from './long/path/to/a/file.js';
import {aLongNameThatBreaksAlignment} from './long/path/to/a/file.js';

// Export rules:
export default class Foo { /* ... */ } // Do not use default exports

export class Foo { /* ... */ }

// Alternate style named exports:
class Foo { /* ... */ }

export {Foo};

// Do not export container classes or objects with static methods or properties.
export class Container {
  /** @return {number} */
  static bar() {
    return 1;
  }
}
// Instead of exporting the whole class export individual constants and functions
export function bar() {
    return 1;
}

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
 * The @private JSDoc tag is used to mark an element (such as a function, method, variable, etc.) as private,
 * indicating that it should not be used directly by external consumers or should not be considered part
 * of the public interface of the class or module.
 */

/** @classdesc Class representing an example. */
class Example {
  /**
   * Private method. Using the underscore prefix is a 
   * convention to indicate that the method is private.
   * @private
   */
  privateMethod_() {
    // Implementation of the private method
  }
  getFoo() {
    return this.foo;
  }
  setFoo(/** number*/ value) {
    this.foo = value;
  }
  publicMethod() {
    // This method is part of the public interface
    this.privateMethod_(); // You can call a private method within the class
  }
}

// Usage
const instance = new Example();
instance.publicMethod(); // You can call the public method
// instance.privateMethod_(); // This would generate a warning, as it is a private method
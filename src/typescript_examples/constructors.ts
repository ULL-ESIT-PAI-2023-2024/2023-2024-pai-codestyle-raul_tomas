/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 * 
 * @fileoverview Code example to learn the Google Typescript style
 * @author Raúl Álvarez Pérez
 * @author Tomás De Armas Déniz
 * @since Feb 05 2024  
 * @see {@link https://github.com/ULL-ESIT-PAI-2023-2024/2023-2024-pai-codestyle-raul_tomas.git}
 */

// DISALLOWED

//It is unnecessary to provide an empty constructor or one that simply delegates into its parent class

class UnnecessaryConstructor {
  constructor() {}
}

class UnnecessaryConstructorOverride extends Base {
  constructor(value: number) {
    super(value);
  }
}

// ALLOWED

class DefaultConstructor {
}

class ParameterProperties {
  constructor(private myService:string) {}
}

class ParameterDecorators {
  constructor(@SideEffectDecorator myService) {}
}

class NoInstantiation {
  private constructor() {}
}


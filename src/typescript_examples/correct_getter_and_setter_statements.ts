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
class Bar {
  private barInternal = '';
  // Neither of these accessors have logic,
  // so just make bar public.
  get bar() {
    return this.barInternal;
  }

  set bar(value: string) {
    this.barInternal = value;
  }
}

// ALLOWED

class Car {
  private carLicensePlate = '';
  get license() {
    return this.carLicensePlate || '1234 ABC';
  }
  set license(wrappedPlate: string) {
    this.carLicensePlate = wrappedPlate.trim();
  }
}


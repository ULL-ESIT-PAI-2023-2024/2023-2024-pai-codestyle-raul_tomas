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


switch (trafficLightColor) {
  case 'yellow':
    slowDown();
    // fall through - not allowed!
  case 'green':
    continueDriving();
    break;
  case 'red':
    stopTheCar();
    break;
  default:
    // ...
    break;
}


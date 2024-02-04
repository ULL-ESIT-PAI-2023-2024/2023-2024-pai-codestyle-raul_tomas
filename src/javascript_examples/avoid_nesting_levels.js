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

// Instead of this:

for (let i = 0; i < 10; i++) {
  if (condition) {
    /* ... */ // <- one more nesting level
  }
}
// We can write this:

for (let i = 0; i < 10; i++) {
  if (!condition) continue;
  /* ... */  // <- no extra nesting level
}
/*
 * A similar thing can be done with if/else and return.
 * For example, two constructs below are identical.
 */

// Option 1:
function pow(x, n) {
  if (n < 0) {
    alert("Negative 'n' not supported");
  } else {
    let result = 1;

    for (let i = 0; i < n; i++) {
      result *= x;
    }

    return result;
  }
}

// Option 2:
function pow(x, n) {
  if (n < 0) {
    alert("Negative 'n' not supported");
    return;
  }
  let result = 1;
  for (let i = 0; i < n; i++) {
    result *= x;
  }

  return result;
}

// The second one is more readable because the “special case” of n < 0 is handled early on. Once the check is done we can move on to the “main” code flow without the need for additional nesting.
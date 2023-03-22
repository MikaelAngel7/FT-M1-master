'use strict'
// No cambies los nombres de las funciones.

function factorear(num) {
  // Factorear el número recibido como parámetro y devolver en un array
  // los factores por los cuales se va dividiendo a dicho número (De menor a mayor)
  // Ej: factorear(180) --> [1, 2, 2, 3, 3, 5] Ya que 1x2x2x3x3x5 = 180 y son todos números primos
  // Tu código:
let rta = [1];
let i = 2

while (num !== 1) {
  if (num % i === 0) {
    rta.push(i)
    num = num / i
  } else {
    i++
  }
}
return rta;
}

function bubbleSort(array) {
  // Implementar el método conocido como bubbleSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
let swap = true;

while (swap) {
  swap = false;
  for (let i = 0; i < array.length - 1; i++) {
    if (array[i] > array[i + 1]) {
      let aux = array[i]
      array[i] = array[i + 1];
      array[i + 1] = aux;
      swap = true;
    }
  }
}
return array;
}
console.log(bubbleSort([5,1,10,21,18,2,6,12]));

function insertionSort(array) {
  // Implementar el método conocido como insertionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando arreglos
  // Devolver el array ordenado resultante
  // Tu código:
for (let i = 1; i < array.length; i++) {
  let j = i - 1;
  let aux = array[i];
  while (j >= 0 && array[j] > aux) {
    array[j + 1] = array[j];
    j--;
  }
  array[j + 1] = aux;
}
return array;
}
console.log(insertionSort([5,1,10,21,18,2,6,12]));

function selectionSort(array) {
  // Implementar el método conocido como selectionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando dos arreglos
  // Devolver el array ordenado resultante
  // Tu código:
for (let j = 0; j < array.length - 1; j++) {
  let min = j
  for (let i = j + 1; i < array.length; i++) {
    if (array[i] < array[min]) {
      min = i;
    }
  }
  if (j !== min) {
    let aux = array[j];
    array[j] = array[min];
    array[min] = aux;
  }
}
return array;
}
console.log(selectionSort([5,1,10,21,18,2,6,12]));

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  factorear,
  bubbleSort,
  insertionSort,
  selectionSort,
};

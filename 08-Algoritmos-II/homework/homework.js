'use strict'
// No cambies los nombres de las funciones.

function quickSort(array) {
  // Implementar el método conocido como quickSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  if (array.length <= 1) return array;

let pivot = array[0];
let left = [];
let right = [];
let equal = [];
for (let i = 0; i < array.length; i++) {
  if (array[i] < pivot) left.push(array[i]);
 else  if (array[i] > pivot) right.push(array[i]);
  else equal.push(array[i]);
}
return quickSort(left).concat(equal).concat(quickSort(right)); 
}
console.log(quickSort([2,3,1]));

function mergeSort(array) {
  // Implementar el método conocido como mergeSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
if (array.length === 1) return array;

//Dividir a la mitad!
let div = split(array);
let left = div[0];
let right = div[1];

//Recursion!
return merger(mergeSort(left), mergeSort(right));
}
function split(array) {
  let middle = Math.floor(array.length/2);
  let left = array.slice(0, middle);
  let right = array.slice(middle);
  return [left, right];
}
function merger(left, right) {
  //Los dos arreglos empiezan en el index 0
  let leftIndex = 0;
  let rightIndex = 0;
  let newArray = [];

  while (leftIndex < left.length && rightIndex < right.length) {
    //el elemento mas chico va primero
    if (left[leftIndex] < right[rightIndex]) {
      newArray.push(left[leftIndex]);
      //incremento solo el index de la izquierda
      leftIndex++;
    } else {
      newArray.push(right[rightIndex]);
      //incremento solo el index de la derecha
      rightIndex++;
    }
  }
  return newArray.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}
// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  quickSort,
  mergeSort,
};

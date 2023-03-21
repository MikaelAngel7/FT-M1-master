'use strict';

/*
 Implementar la clase BinarySearchTree, definiendo los siguientes métodos recursivos:
  - size: retorna la cantidad total de nodos del árbol
  - insert: agrega un nodo en el lugar correspondiente
  - contains: retorna true o false luego de evaluar si cierto valor existe dentro del árbol
  - depthFirstForEach: recorre el árbol siguiendo el orden depth first (DFS) en cualquiera de sus variantes, según se indique por parámetro ("post-order", "pre-order", o "in-order"). Nota: si no se provee ningún parámetro, hará el recorrido "in-order" por defecto.
  - breadthFirstForEach: recorre el árbol siguiendo el orden breadth first (BFS)
  El ábrol utilizado para hacer los tests se encuentra representado en la imagen bst.png dentro del directorio homework.
*/
function BinarySearchTree(value) {
   this.value = value;
   this.right = null    
   this.left = null
}

BinarySearchTree.prototype.insert = function (value) {
   // si el value es > o < que el root
   // value > root => derecha
   // value < root => izquierda
   // si hay un der o izq => reevaluar (recursión o recursividad)
   if (value > this.value) {
      if (this.right !== null) {
         this.right.insert(value)
      } else { this.right = new BinarySearchTree(value); }
   }
   if (value < this.value) {
      if (this.left !== null) {
         this.left.insert(value)
      } else { this.left = new BinarySearchTree(value); }
   }

}
BinarySearchTree.prototype.contains = function (value) {
   if (value === this.value) { // SI MI VALUE ES EL MISMO QUE MI ROOT O RAÍZ
      return true;
   }
   if (value > this.value) {
      if (this.right === null) { // NO TIENE HIJO EN EL LADO DERECHO
         return false;
      } else {  // SI TIENE HIJO EN EL LADO DERECHO
         return this.right.contains(value)
      }
   } else {
      if (this.left === null) { // NO TIENE HIJO EN EL LADO IZQUIERDO
         return false;
      } else {  // SI TIENE HIJO EN EL LADO IZQUIERDO
         return this.left.contains(value)
      }
   }
}
BinarySearchTree.prototype.size = function () {
   if (this.right === null && this.left === null) return 1;
   // Tiene izquierda y va a la izquierda
   if (this.left !== null && this.right === null) return 1 + this.left.size();
   // Tiene derecha y va a la derecha
   if (this.right !== null && this.left === null) return 1 + this.right.size();
   // tiene derecha e izquierda
   if (this.right !== null && this.left !== null) return 1 + this.right.size() + this.left.size();

}
BinarySearchTree.prototype.depthFirstForEach = function (cb, order) {
   if (order === 'pre-order') {
      // 'pre-order' => root - izq - der
      cb(this.value)
      if (this.left !== null) this.left.depthFirstForEach(cb, order)
      if (this.right !== null) this.right.depthFirstForEach(cb, order)
   } else if (order === 'post-order') {
      // 'post-order' => izq - der - root
      if (this.left !== null) this.left.depthFirstForEach(cb, order)
      if (this.right !== null) this.right.depthFirstForEach(cb, order)
      cb(this.value)
   } else {
      // 'in-order' => izq - root - der   
      if (this.left !== null) this.left.depthFirstForEach(cb, order)
      cb(this.value)
      if (this.right !== null) this.right.depthFirstForEach(cb, order)
   }
}
BinarySearchTree.prototype.breadthFirstForEach = function (cb, array = []) {
   // PRIMERO IZQUIERDA, DERECHA Y NIVEL POR NIVEL
   if (this.left !== null) {
      array.push(this.left)
   }
   if (this.right !== null) {
      array.push(this.right)
   }
   cb(this.value);
   if (array.length > 0) {
      array.shift().breadthFirstForEach(cb, array)
   }
}


// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
   BinarySearchTree,
};

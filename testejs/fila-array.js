// fila-array.js — fila com array: push no fim, shift no início
export class FilaArray {
  #itens = [];

  enfileirar(item) {          // O(1): coloca no fim do array
    this.#itens.push(item);
  }

  desenfileirar() {           // O(n): tira o primeiro e desloca todos os outros
    return this.#itens.shift();
  }

  frente() {
    return this.#itens[0];
  }

  tamanho() {
    return this.#itens.length;
  }

  estaVazia() {
    return this.#itens.length === 0;
  }
}

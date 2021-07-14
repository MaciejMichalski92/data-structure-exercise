const uniqid = require('uniqid');

class Node {
  constructor(name, id = uniqid()) {
    this.name = name;
    this.nodes = [];
    this.id = id;
  }

  addNode(data) {
    if (typeof data !== 'object') return;
    this.nodes = [...this.nodes, data];
  }

  deleteNode(id) {
    this.nodes = this.nodes.filter(node => node.id !== id);
  }

  listNodes() {
    return this.nodes;
  }

  searchTreeByID(searchedObjectID) {
    const array = this.nodes;
    let low = 0;
    let high = array.length - 1;

    if (typeof searchedObjectID != 'number') return console.log('podaj liczbę');
    if (searchedObjectID > this.nodes.length)
      return console.log('podana liczba jest za duża');
    if (searchedObjectID < 0) return console.log('podana liczba jest za mała');

    while (low <= high) {
      let mid = Math.floor((low + high) / 2);
      if (searchedObjectID == array[mid].id) {
        console.log('znaleziono numer: ' + searchedObjectID);
        console.log('Użytkownik: ' + array[mid]);
        return array[mid];
      }
      if (searchedObjectID > array[mid]) {
        console.log('ID jest większe, szukam dalej');
        low = mid + 1;
      } else {
        console.log('ID jest za małe, szukam dalej');
        high = mid - 1;
      }
    }
  }

  searchTreeByName(searchedObjectName = '') {
    const array = this.nodes;
    let low = 0;
    let high = array.length - 1;

    if (searchedObjectName == '' && typeof searchedObjectName != 'string')
      return console.log('Proszę wpisać imię');

    while (low <= high) {
      let mid = Math.floor((low + high) / 2);
      if (searchedObjectName == array[mid].name) {
        console.log('znaleziono imię: ' + searchedObjectName);
        console.log('Użytkownik: ' + array[mid]);
        return array[mid];
      }
      if (searchedObjectName > array[mid].name) {
        console.log('szukam dalej,  w wyższej połowie');
        low = mid + 1;
      } else {
        console.log('szukam dalej, w niższej połowie');
        high = mid - 1;
      }
    }
  }
}

console.log('Node to typ: ' + typeof Node);
module.exports = Node;

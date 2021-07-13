class Tree {
  constructor(root) {
    this.root = root;
    this.nodes = [];
  }
  addNode(data) {
    // if (typeof data !== object) return;
    this.nodes = [...this.nodes, data];
  }

  searchTreeByID(searchedObjectID) {
    const array = this.nodes;
    let low = 0;
    let high = array.length - 1;

    if (typeof searchedObjectID != 'number') return console.log('podaj liczbę');
    if (searchedObjectID > this.nodes.length)
      return console.log('podana liczba jest za duża');
    if (searchedObjectID < this.nodes.length)
      return console.log('podana liczba jest za mała');

    while (low <= high) {
      let mid = Math.floor((low + high) / 2);
      if (searchedObjectID == array[mid].id) {
        console.log('znaleziono numer: ' + searchedObjectID);
        console.log('Użytkownik: ' + array[mid]);
        return array[mid];
      }
      if (searchedObjectID > array[mid].id) {
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

const tree = new Tree(1);

tree.addNode({
  id: 1,
  name: 'Maciej',
  surname: 'Michalski',
});
tree.addNode({
  id: 2,
  name: 'Michał',
  surname: 'Maciejski',
});
tree.addNode({
  id: 3,
  name: 'Jan',
  surname: 'Salach',
});
tree.addNode({
  id: 4,
  name: 'Edyta',
  surname: 'Raburska',
});
tree.addNode({
  id: 5,
  name: 'Urszula',
  surname: 'Velez',
});
tree.addNode({
  id: 6,
  name: 'Maciej',
  surname: 'Kuliński',
});
tree.addNode({
  id: 7,
  name: 'Juliusz',
  surname: 'Fedyk',
});

console.log(tree);
console.log(tree.searchTreeByID(7));
console.log(tree.searchTreeByName('Juliusz'));

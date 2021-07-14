const Tree = require('./tree.js');
const Node = require('./node.js');

const tree = new Tree('Admin');

tree.addNode(new Node('Maciej', 1));
tree.addNode(new Node('Jan', 2));
tree.addNode(new Node('Edyta'));
tree.addNode(new Node('Juliusz'));
tree.addNode(new Node('Edyta'));

// console.log(tree);
// console.log('\nID:');
// console.log(tree.searchTreeByID(1));
// console.log('\nname:');
// console.log(tree.searchTreeByName('Juliusz'));

console.log(tree.listNodes());
console.log(tree.deleteNode(2));
console.log(tree.listNodes());

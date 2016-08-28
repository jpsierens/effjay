// our converter
const effjay = require('../index');

// this will do 2 things:
// 1. Create the json (tree.json) out of the 'testdir' directory.
// 2. assign the object representation 'testdir' to the const tree.
const tree = effjay('testdir', true);

console.log(tree);

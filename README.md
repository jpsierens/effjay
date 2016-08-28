# effjay

> Convert a file tree to json



## Install

```
$ npm i effjay
```


## Usage

imagine a file tree that looks like:


+testdir
|
+--file1.js
|
+--+subfolder
   |
   +--file2.js

effjay gives us a json representation of the above structure:

```js
// our converter
const effjay = require('../index');

// this will do 2 things:
// 1. Create the json (tree.json) out of the 'testdir' directory.
// 2. assign the object representation 'testdir' to the const tree.
const tree = effjay('testdir', true);

console.log(tree); // logs {"file1.js":"hola","subfolder":{"file2.js":"wassup"}}
```


## API

effjay:
* @param rootDirectory: The root directory, the json will start from this point
* @param writeFile: (optional) If you want a json file created.
* @param filePath: (optional) the filepath for the optional json.
* @return object representing the file tree.

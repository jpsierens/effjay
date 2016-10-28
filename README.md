# effjay ![build status](https://travis-ci.org/jpsierens/effjay.svg?branch=master)

> Convert a file tree to json



## Install

```
$ npm i --save effjay
```


## Usage

imagine a file tree that looks like:


![](https://github.com/jpsierens/effjay/blob/master/tree.png)

effjay gives us a json representation of the above structure:

```js
// our converter
const effjay = require('effjay');

// this will do 2 things:
// 1. Create the json (tree.json) out of the 'testdir' directory.
// 2. assign the object representation 'testdir' to the const tree.
const tree = effjay('testdir', true);

console.log(tree); // logs {"file1.js":"hola","subfolder":{"file2.js":"wassup"}}
```


## API

effjay:
* @param rootDirectory: String, The root directory, the json will start from this point
* @param writeFile: (optional) Boolean, If you want a json file created.
* @param filePath: (optional) String, the filepath for the optional json.
* @return object representing the file tree.

const fs = require('fs');

const effjay = (rootDirectory) => {
	let root = fs.readdirSync(rootDirectory);
	console.log(root);

	let file1 = fs.statSync(`${rootDirectory}/${root[0]}`);
	console.log(file1.isFile());
}

effjay('test');
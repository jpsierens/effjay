const fs = require('fs');

const generateJSON = (path, json) => {

	path.forEach(subPath => {
		console.log(subPath);
	});
};

const effjay = (rootDirectory) => {
	const root = fs.readdirSync(rootDirectory);
	console.log(root);

	if (!root) throw 'Error: A root directory is required';
	if (fs.statSync(rootDirectory).isFile()) throw 'Error: You passed in a file path, you need to pass in a directory path';

	return generateJSON(root, {});
}

effjay('test');
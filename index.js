const fs = require('fs');

const generateJSON = (dir, currPath) => {
	const json = {};

	dir.forEach(subPath => {
		const fullPath = `${currPath}/${subPath}`;

		if (fs.statSync(fullPath).isDirectory()) {
			const currDir = fs.readdirSync(fullPath);

			return json[subPath] = generateJSON(currDir, fullPath);
		}

		return json[subPath] = fs.readFileSync(fullPath, 'utf8');
	});

	return json;
};

const effjay = (rootDirectory) => {
	const root = fs.readdirSync(rootDirectory);

	if (!root) {
		throw 'Error: A root directory is required';
	}
	if (fs.statSync(rootDirectory).isFile()) {
		throw 'Error: You passed in a file path, '+
			'you need to pass in a directory path';
	}

	return generateJSON(root, rootDirectory);
}

console.log(effjay('test'));

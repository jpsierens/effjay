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

/**
* Creates an object out of the file tree passed in. Can optionally write to a
* json file.
*
* @param rootDirectory: The root directory, the json will start from this point
* @param writeFile: (optional) If you want a json file created.
* @param filePath: (optional) the filepath for the optional json.
* @return object representing the file tree.
*/
const effjay = (rootDirectory, writeFile = false, filePath = './tree.json') => {
	const root = fs.readdirSync(rootDirectory);

	if (!root) {
		throw 'Error: A root directory is required';
	}
	if (fs.statSync(rootDirectory).isFile()) {
		throw 'Error: You passed in a file path, '+
			'you need to pass in a directory path';
	}

	const json = generateJSON(root, rootDirectory);

	if (writeFile) {
		fs.writeFileSync(filePath, JSON.stringify(json));
	}

	return json;
}

module.exports = effjay;

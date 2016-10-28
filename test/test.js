const effjay = require('../index');
const expect = require('expect');

describe('effjay', function() {
    const representation = { 
        'file1.txt': 'hola', 
        subfolder: { 
            'file2.txt': 'wassup' 
        } 
    };

    it('should create a JSON representing the file tree given', function() {
        const jsonPath = './test/tree.json';
        
        effjay('./test/testdir', true, jsonPath);
        const treeJSON = require('./tree.json');

        expect(treeJSON).toEqual(representation);
    });

    it('should store the JSON representation when given a variable', function() {
        const storedRep = effjay('./test/testdir', false);
        
        expect(storedRep).toEqual(representation);
    });
    
});

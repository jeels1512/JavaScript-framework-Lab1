
//Import the library to read files
const fs = require('fs');

//Storing the file path in the variable.
const filePath = './sampleText.txt';

console.log('Starting to read the file...');


// Use fs.readFile() - the NON-BLOCKING (asynchronous) method
fs.readFile(filePath, 'utf8', (err, data)=> {
    if(err){
        console.error('Error reading the file:', err.message);
        return;
    }
    //Printing the file contents in the terminal
    console.log('File contents:', data);
})
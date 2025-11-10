//promise chaining example
import fs from 'fs/promises';

function readFilePromise(filePath) {
  return fs.readFile(filePath, 'utf8')
  .then(data => {
    console.log(`File content from ${filePath}:`);
    console.log(data);
    return data;
  });   
}
function processData(data) {
  return new Promise((resolve) => {
    const processedData = data.toUpperCase();
    console.log('Processed Data:');
    console.log(processedData);
    resolve(processedData);
  });
}
function writeFilePromise(filePath, data) {
  return fs.writeFile(filePath, data).then(() => {
    console.log(`Data written to ${filePath}`);
  });
}
// Chaining the promises
const inputFilePath = 'input.txt';
const outputFilePath = 'output.txt';

readFilePromise(inputFilePath)
  .then(data => processData(data))
  .then(processedData => writeFilePromise(outputFilePath, processedData))
  .then(() => {
    console.log('All operations completed successfully.');
  })
  .catch(err => {
    console.error('Error during file operations:', err);
  });


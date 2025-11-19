// Import the axios module
import axios from 'axios';
// Define the URL of the API you want to make a GET request to
const apiUrl = 'https://jsonplaceholder.typicode.com/posts/1';
// Function to fetch data from the API using axios
async function fetchData() {
try {
// Make an HTTP GET request using axios
const response = await axios.get(apiUrl);
// Log the response data to the console
console.log('Response:', response.data);
} catch (error) {
// If there's an error with the request, log the error
console.error('Error:', error.message);
}
}
// Call the fetchData function to initiate the HTTP request
fetchData()



//using fetch to make the same request


fetch(apiUrl)
  .then(response => response.json())
  .then(data => {
    console.log('Fetch Response:', data);
  })
  .catch(error => {
    console.error('Fetch Error:', error.message);
  });   
  
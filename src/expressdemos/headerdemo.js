import http from 'http';
//Create an HTTP server
const server = http.createServer((req, res) => {
// Set response headers
res.setHeader('Content-Type', 'text/plain');
res.setHeader('Custom-Header', ' Web Development with Node.js and Express' );
});
// Send the response
res.end('Hello Students, Hope you are doing well!');
// Listen on port 3000
const PORT = 3000;
server.listen(PORT, () => {
console.log(`Server is running on port ${PORT}`);
});
import { writeFile } from 'fs';
import { createServer } from 'http';

console.log('hello world')
//file systems
//server -create server
//data validation
//database
//we grabbed the reference in fs ,file system

//createServer method takes a requestListener  ,which is a function
//we are using arrow function
//it takes req and resp
const server = http.createServer((req,resp)=>{

    console.log(req.url,req.headers , req.method)
})
server.listen(3000)
//calling a method of fs  , writeFileSync

fs.writeFileSync('hello.txt','Message from the program firstprog.js')


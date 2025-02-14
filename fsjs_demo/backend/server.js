require('dotenv').config({ path: './.env'} ) ;

const port = process.env.PORT || 3000

const http = require('http');
const app = require('./app1');

const server = http.createServer(app);

// const server = http.createServer((req,res) =>{
//     res.statusCode= 200;
//     res.setHeader('Content-Type','text/html;charset=utf-8');
//     res.end("Le serveur Node.js dit <b>Bonjour Aminata</b>")
// })

server.listen(port,()=>{
    console.log(`Le server écoute sur http://127.0.0.1:${port}/`);
})
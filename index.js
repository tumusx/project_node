const http = require ('http');

const hostname = '127.0.0.1'; //enderecamento ip comecando com 100 
const port = 3000; // defububdi a porta 

const server = http.createServer((req,res)=>{
    res.statusCode=200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Seja bem vindo a esse mundo maluco') // --> mensagem exibida no localhost 
} );

server.listen(port, hostname, ()=>{
    console.log("Ta rodando ok"); // --> aqui retorna no terminal
})
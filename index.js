const http = require ('http');

const hostname = '127.0.0.1'; //enderecamento ip comecando com 100 
const port = 3000; // definindo o número da porta 

const server = http.createServer((req,res)=>{
    res.statusCode=200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Essa aplicação está funcioando') // --> mensagem exibida no localhost 
    
} );

server.listen(port, hostname, ()=>{
    console.log("Ta rodando ok"); // --> aqui retorna no terminal
})
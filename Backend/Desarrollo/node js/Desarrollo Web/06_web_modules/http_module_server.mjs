import {createServer} from "http";

// El método "createServer" nos permite crear un SERVIDOR a partir de un conjunto de parámetros dados.

const server = createServer((req,res)=>{
    // res.writeHead(200,{"Content-Type":"text/plain"});
    res.writeHead(200,{"Content-Type":"text/html; charset=utf-8"});
    res.end("<h1>Hello world 😀!<h1>");
});

// Con el método "listen" del método "createServer" nos permite definir un puerto para escuchar o establer la comunicación con nuestro servidor.
// Se recomienda utilizar el rango de puertos 3000+

server.listen(3000,'127.0.0.1',()=>{
    console.log('Servidor web en ejecucion en http://127.0.0.1:3000')
});
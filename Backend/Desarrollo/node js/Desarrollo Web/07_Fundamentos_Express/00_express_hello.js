import express from 'express';

// Crear instancia de 'Express'
const app = express();

// Definición de 'rutas'

app.get("/",(req,res)=>{
    res.end("<h1>Hello world from Express.js </h1>");
    console.log(req);
    console.log(res);
});

// Declaración de puertos para escuchar eventos

app.listen(3000,()=>console.log('Iniciando Express desde http://localhost:3000'));
import express from 'express';
import {resolve} from 'path';

// Crear instancia de 'Express'
const app = express();

// Definición de 'rutas'

app.get("/",(req,res)=>{
    res.sendFile(resolve("index.html"));
});

// Declaración de puertos para escuchar eventos

app.listen(3000,()=>console.log('Iniciando Express desde http://localhost:3000'));
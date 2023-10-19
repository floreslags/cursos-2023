import express from 'express';
import {resolve} from "path";

// Crear instancia de 'Express'
const app = express();

// Definición de 'rutas'

app.get("/",(req,res)=>{

    // Método "end" finaliza el proceso de petición
    res.set({"content-type":"text/html; charset=utf-8"});
    res.end("<h1>Hello world from Express.js  Método End</h1>");
    // res.send("<h1>Hello world from Express.js Método Send </h1>");
});

// Respuestas en formato JSON
app.get("/json",(req,res)=>{
    res.json({
        name:"Sergio",
        age:29,
        YouTube:"@floreslags"
    });
});

// Respuestas con archivos
app.get("/file",(req,res)=>{
    res.sendFile(resolve("index.html"))
});

// Respuestas con PLANTILLAS
app.get("/template",(req,res)=>{
    // La ruta aún no funciona, es necesario definir el motor de plantillas para Express
    res.render("template");
});

// Redireccionamiento de rutas
app.get("/jonmircha",(req,res)=>{
    // res.send("<h1>Bienvenidos a jonmircha.com</h1>");
    res.redirect(301,"https://jonmircha.com");
});



// Declaración de puertos para escuchar eventos

app.listen(3000,()=>console.log('Iniciando Express desde http://localhost:3000'));
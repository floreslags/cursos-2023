import express from 'express';

// Crear instancia de 'Express'
const app = express();

// Definición de 'rutas'

app.get("/",(req,res)=>{
    res.end("<h1>Hello world from Express.js </h1>");
});

// Trabajando con el objeto "PARAMS"
// El uso de parámetros desde una URL puede servirnos al momento de hacer consultas hacia una DB
app.get("/user/:id-:name-:age",(req,res)=>{
    res.set({"content-type":"text/html; charset=utf-8"});
    res.end(
        `<h1>${req.params.name}, bienvenido a Express.js. Tu ID es ${req.params.id} y tienes ${req.params.age} años.</h1>`
    );
});

//Trabajando con el objeto "QUERY"
//El uso de VARIABLES desde una URL puede servirnos al momento de hacer consultas y almacenar información hacia una DB
app.get("/search",(req,res)=>{
    // http://localhost:3000/search?id=19&name=Sergio&age=29
    res.set({"content-type":"text/html; charset=utf-8"});
    res.end(
        `<h1>${req.query.name}, bienvenido a Express.js. Tu ID es ${req.query.id} y tienes ${req.query.age} años.</h1>`
    );
});



// Declaración de puertos para escuchar eventos

app.listen(3000,()=>console.log('Iniciando Express desde http://localhost:3000'));
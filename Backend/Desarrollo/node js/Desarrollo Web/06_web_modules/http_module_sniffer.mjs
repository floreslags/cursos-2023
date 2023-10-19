import { createServer } from "http";
import { get } from "https";

// Variables de conexión 
const hostname = "localhost",
port = 3000,
options = {
    host:"jonmircha.com",
    port:443,
    path:"/cursos"
};

let htmlCode = "";

// Función personalizada de tratamiento de datos
const httpClient = res =>{
    console.log(`El sitio ${options.host} ha respondido. Código: ${res.statusCode}. Mensaje: ${res.statusMessage}.`);
    res.on("data", data =>{
        htmlCode += data;
        console.log(data, data.toString());
    });
}

// Función personalizada para manejo de errores

const httpError = err =>{
    console.error(`El sitio ${options.host} ha respondido. Código: ${err.code}. Mensaje: ${err.message}.`);
}

// Función personalizada para creación del servidor

const webServer = (req,res)=>{
    res.statusCode = 200;
    res.setHeader("Content-Type","text/html; charset=utf-8");
    res.end(htmlCode);
}

// Uso de módulo HTTP para crear instancia 'get'

get(options,httpClient).on("error",httpError);

// Uso de módulo HTTP para crear instancia 'createServer'
createServer(webServer).listen(port,hostname,()=>{
    console.log(`Servidor corriendo en http://${hostname}:${port}/`);
});
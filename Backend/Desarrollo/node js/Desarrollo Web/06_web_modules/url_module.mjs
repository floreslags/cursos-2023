import {parse} from "url";

import {format} from "url";


// Análisis de una ruta URL con PARSE
const urlString = "https://www.ejemplo.com:8080/ruta?param1=valor1&param2=valor2";

const parseUrl = parse(urlString,true);

console.log("protocol: ",parseUrl.protocol);
console.log("Dominio: ",parseUrl.hostname);
console.log("Ruta: ",parseUrl.pathname);
console.log("Parámetros: ",parseUrl.query);


// Construcción de una URL con FORMAT
const urlObj = {
    protocol:"https",
    hostname:"www.ejemplo.com",
    pathname:"/ruta",
    query:{param1:"valor1",param2:"valor2"}
}

// const objUrlString = format(urlObj);


console.log("URL completa: ",format(urlObj));
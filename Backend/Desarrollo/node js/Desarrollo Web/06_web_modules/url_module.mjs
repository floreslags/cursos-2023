import {parse,format} from "url";

// El método "parse" permita analizar los elementos de una ruta dada
const urlString = "https://www.ejemplo.com:8080/ruta?param1=valor1&param2=valor2";

const parseUrl = parse(urlString,true);

console.log("protocol: ",parseUrl.protocol);
console.log("Dominio: ",parseUrl.hostname);
console.log("Ruta: ",parseUrl.pathname);
console.log("Parámetros: ",parseUrl.query);


// El método "format" permita construir los elementos de una ruta a partir de los elementos definidos

const urlObj = {
    protocol:"https",
    hostname:"www.ejemplo.com",
    pathname:"/ruta",
    query:{param1:"valor1",param2:"valor2"}
}

// const objUrlString = format(urlObj);


console.log("URL completa: ",format(urlObj));
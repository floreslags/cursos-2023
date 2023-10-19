import {get} from "https";

// El método "get" nos permite crear un SERVIDOR a partir de un conjunto de parámetros dados.

const urlSite = {
    hostname:"jonmircha.com",
    port:443,
    path:"/cursos"
}

get(urlSite,(res)=>{
    console.log(`El sitio ${urlSite.hostname} ha respondido. Código: ${res.statusCode}. Mensaje: ${res.statusMessage}.`)
}).on("error",(err)=>{
    console.error(`El sitio ${urlSite.hostname} no ha respondido. Código: ${err.name}. Mensaje: ${err.message}.`);
});

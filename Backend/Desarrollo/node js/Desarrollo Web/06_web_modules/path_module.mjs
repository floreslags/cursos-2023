import {join,resolve,basename,dirname,extname} from "path";

// El método "JOIN" Permite estructurar una RUTA determinada

const directorio = "/ruta/principal";
const archivo = "archivo.txt";

console.log("Ruta completa: ",join(directorio,archivo));

// El método "RESOLVE" permite estructurar una ruta ABSOLUTA a partir de una RUTA RELATIVA

const rutaRelativa = "../carpeta/archivo.txt";

console.log("Ruta Absoluta",resolve(rutaRelativa));

// El método "basename" nos devuelve el NOMBRE UN ARCHIVO de una RUTA DADA.
// El método "dirname" nos devuelve el NOMBRE UN DIRECTORIO de una RUTA DADA.
// El método "extname" nos devuelve la EXTENSIÓN DE UN ARCHIVO de una RUTA DADA.

const ruta = "/ruta/principal/archivo.txt";

console.log("Nombre del archivo: ",basename(ruta));
console.log("Nombre del directorio: ",dirname(ruta));
console.log("Extensión del archivo: ",extname(ruta));
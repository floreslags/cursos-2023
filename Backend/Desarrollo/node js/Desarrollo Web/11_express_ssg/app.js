// Importación de módulos externos
import express from 'express';
import fs from 'fs/promises';
import path, { extname } from 'path';
import markdownIt from 'markdown-it';
import fm from 'front-matter';
import cookieParser from 'cookie-parser';
import morgan from 'morgan';

// Declaración de variables globales
const port = process.env.PORT || 3000;
const __dirname = path.dirname(new URL(import.meta.url).pathname);
// Invocación de instancias
const app = express();

// Declaración e invocación de 'middlewares'
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(cookieParser());

// Declaración e invocación del motor de vistas
app.set("views",path.join(__dirname,"pages"));
app.set("view engine","pug");

// Declaración del director estático de la app
app.use(express.static(path.join(__dirname,"public")));

// Declaración del método de gestión dinámica de la carpeta "pages"
const pagesDir = path.join(__dirname,"pages"); // Almacenamiento de los archivos
const files = await fs.readdir(pagesDir); // Lectura de archivos

// Iteración de archivos .md y .html
for(let file of files){
    const filePath = path.join(pagesDir,file); // Obtener ruta del archivo
    let extName = path.extname(file); // Extraer extensión del archivo
    
    // Validación de exterción del archivo
    if(extName === '.md' || extName === '.pug' || extName === '.html'){
        let fileName = path.basename(file,extName);

        app.get(`/${fileName}`,async (req,res)=>{
            try {
                // Validación de tipos de extensiones plantillas
                if(extName === '.pug'){
                    res.render(fileName);
                }

                if(extName === '.html'){
                    res.sendFile(filePath);
                }

                if(extName === '.md'){
                    // Lectura del archivo
                    let fileContent = await fs.readFile(filePath,"utf-8"); // Extracción del contenido
                    let {attributes:frontMatterAttributes,body} = fm(fileContent); // Destructuración del contenido
                    let attributes = frontMatterAttributes;
                    let HTMLContent = markdownIt().render(body); // Conversión del contenido de '.md' => '.html'

                    res.render("markdown-layout",{...attributes,HTMLContent});
                }


            } catch (err) {
                res.status(404).render('error-404');
            }
        });
    }
}



// Declaración e invocación de ruta principal
app.get("/",(req,res)=>{
    res.render("index");
});

// Declaración de ruta inválida 'error 404'
app.use((req,res)=>{
    res.status(404).render("error-404");
});

// Declaración de puerto 'escucha' de la app
app.listen(port,()=>console.log(`The app is running in http://localhost:${port}`))
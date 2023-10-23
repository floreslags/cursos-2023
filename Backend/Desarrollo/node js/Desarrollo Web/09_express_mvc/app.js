// Importación de módulos y librerías
import express from 'express';
import path from 'path';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';

// Importación de controladores
import errorController from './controllers/errorController.js';
import taskController from './controllers/taskController.js';


// Declaración de variables globales
const __dirname = path.dirname(new URL(import.meta.url).pathname);
const port = 3000;

// Declaración de instancias
const app = express();

// Invocación de 'middlewares'
app.use(cors());
app.use(helmet());
app.use(morgan("dev"));

// Definición de recurso 'views'
app.set("views",path.join(__dirname,"views"));

// Definición de motor de plantillas 'pug'
app.set("view engine","pug");

// Definción de ruta estática 'public'
app.use(express.static(path.join(__dirname,"public")));
// Formato de respuestas 
app.use(express.json());
// Codificación de información de frontend hacia backend
app.use(express.urlencoded({extended:false}));

// Definición e invocación de 'rutas' para 'Tasks'
app.get('/',taskController.getAllTasks);
app.get('/add',taskController.getAddTaskForm);
app.post('/add',taskController.addTask);
app.get('/edit/:id',taskController.getEditTaskForm);
app.post('/edit/:id',taskController.editTask);
app.get('/complete/:id',taskController.completeTask);
app.get('/uncomplete/:id',taskController.uncompleteTask);
app.get('/delete/:id',taskController.deleteTask);

// Definición e invocación de 'errores'
app.use(errorController.error404);

// Definición del puerto 'escucha' de la app
app.listen(port,()=>console.log(`La aplicación se está ejecutando en http://localhost:${port}`));

// console.log(__dirname);
// Importación de módulos y librerías
import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';

// Importación de controladores
import errorController from './controllers/errorController.js';
import taskController from './controllers/taskController.js';
// Definición del puerto de la App
const port = 3000;

// Declaración de instancias
const app = express();

// Invocación de 'middlewares'
app.use(cors());
app.use(helmet());
app.use(morgan("dev"));

// Formato de respuestas 
app.use(express.json());

// Codificación de información de frontend hacia backend
app.use(express.urlencoded({extended:false}));

// Definición e invocación de 'rutas' para 'Tasks'
app.get('/tasks',taskController.getAllTasks);
app.get('/tasks/:id',taskController.getTask);
app.post('/tasks',taskController.addTask);
app.put('/tasks/:id',taskController.editTask);
app.put('/tasks/complete/:id',taskController.completeTask);
app.put('/tasks/uncomplete/:id',taskController.uncompleteTask);
app.delete('/tasks/:id',taskController.deleteTask);

// Definición e invocación de 'errores'
app.use(errorController.error404);

// Definición del puerto 'escucha' de la app
app.listen(port,()=>console.log(`La API se está funcionando en http://localhost:${port}/tasks`));

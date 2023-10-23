// Declaración de variales globales
let tasks = [
    {id:1,title:'Task 1',completed:true},
    {id:2,title:'Task 2',completed:false},
];

// Declaración de métodos 'CRUD'
const getAllTasks = (req,res)=>{
    res.render("index",{title:"All Tasks List",tasks});
}

const getAddTaskForm = (req,res)=>{
    res.render("add",{title:"Add New Task"});

}

const addTask = (req,res)=>{
    // console.log(req.body)
    // Validación de datos de entrada
    let {title} = req.body;
    let id = tasks.length + 1;
    tasks.push({id,title,completed:false});
    res.redirect("/");
}

const getEditTaskForm = (req,res)=>{
    // Obtener el parámetro 'id' desde URL y convertirlo en INT
    let id = parseInt(req.params.id);
    // Buscar la tarea en el array 'tasks' iterando el id y almacenarlo en variable 'task'
    let task = tasks.find((task)=>task.id === id);

    if(!task){
        res.redirect("/")
    }else{
        res.render("edit",{title:'Update Task',task});
    }
}

const editTask = (req,res)=>{
    // Obtener el parámetro 'id' desde URL y convertirlo en INT
    let id = parseInt(req.params.id);
    // Obtener el índice de la tarea a actualizar en el arreglo
    let taskIndex = tasks.findIndex((task)=>task.id === id);

    if(!taskIndex){
        res.redirect("/");
    }else{
        let {title} = req.body;
        tasks[taskIndex].title = title;
        res.redirect("/");
    }

}

const completeTask = (req,res)=>{
        // Obtener el parámetro 'id' desde URL y convertirlo en INT
        let id = parseInt(req.params.id);
        // Obtener el índice de la tarea a actualizar en el arreglo
        let task = tasks.find((task)=>task.id === id);
    
        if(task){
            task.completed = true;
        }

        res.redirect("/");
}

const uncompleteTask = (req,res)=>{
            // Obtener el parámetro 'id' desde URL y convertirlo en INT
            let id = parseInt(req.params.id);
            // Obtener el índice de la tarea a actualizar en el arreglo
            let task = tasks.find((task)=>task.id === id);
        
            if(task){
                task.completed = false;
            }
            
            res.redirect("/");
}

const deleteTask = (req,res)=>{
            // Obtener el parámetro 'id' desde URL y convertirlo en INT
            let id = parseInt(req.params.id);
            // Genera un nuevo arreglo, descartando la coincidencia de búsqueda con el 'id'
            tasks = tasks.filter((task)=>task.id !== id);

            res.redirect("/");
}

// Exportación de recursos
export default {
    getAllTasks,
    getAddTaskForm,
    getEditTaskForm,
    addTask,
    editTask,
    completeTask,
    uncompleteTask,
    deleteTask
}
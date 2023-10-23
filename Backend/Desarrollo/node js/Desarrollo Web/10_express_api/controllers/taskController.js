// Declaración de variales globales
let tasks = [
    {id:1,title:'Task 1',completed:true},
    {id:2,title:'Task 2',completed:false},
];

// Declaración de métodos 'CRUD'
const getAllTasks = (req,res)=>{
    res.json(tasks);
}

const getTask = (req,res)=>{
    // Obtener el parámetro 'id' desde URL y convertirlo en INT
    let id = parseInt(req.params.id);
    // Obtener el índice de la tarea a actualizar en el arreglo
    let taskIndex = tasks.findIndex((task)=>task.id === id);

    if(taskIndex === -1){
        res.status(404).json({err:true,message:"Task Not Found"});
    }else{
        res.json({task:tasks[taskIndex]});
    }
}

const addTask = (req,res)=>{
    // console.log(req.body)
    // Validación de datos de entrada
    let {title} = req.body;
    let id = tasks.length + 1;

    if(!title){
        res.status(404).json({err:true,message:"Task Title Missing"});
    }else{
        tasks.push({id,title,completed:false});
        res.json({err:false,message:"Task Added Successfully"});
    }
    }

const editTask = (req,res)=>{
    // Obtener el parámetro 'id' desde URL y convertirlo en INT
    let id = parseInt(req.params.id);
    // Obtener el índice de la tarea a actualizar en el arreglo
    let taskIndex = tasks.findIndex((task)=>task.id === id);

    if(taskIndex === -1){
        res.status(404).json({
            err:true,
            message:"Task Not Found"
        });
    }else{
        let {title} = req.body;
        tasks[taskIndex].title = title;
        res.json({
            err:false,
            message:"Task Updated Successfully"
        });
    }

}

const completeTask = (req,res)=>{
    // Obtener el parámetro 'id' desde URL y convertirlo en INT
    let id = parseInt(req.params.id);
    // Obtener el índice de la tarea a actualizar en el arreglo
    let task = tasks.find((task)=>task.id === id);

    if(task){
        task.completed = true;
        res.json({err:false,message:"Task Completed Successfully"});
    }else{
        res.status(404).json({err:true,message:"Task Not Found"});
    }
}
    
const uncompleteTask = (req,res)=>{
    // Obtener el parámetro 'id' desde URL y convertirlo en INT
    let id = parseInt(req.params.id);
    // Obtener el índice de la tarea a actualizar en el arreglo
    let task = tasks.find((task)=>task.id === id);
    
    if(task){
        res.json({err:false,message:"Task Uncompleted"});
        task.completed = false;
    }else{
        res.status(404).json({err:true,message:"Task Not Found"});
    }
        
}
    
const deleteTask = (req,res)=>{
    // Obtener el parámetro 'id' desde URL y convertirlo en INT
    let id = parseInt(req.params.id);
    
    // Buscar el ínidice en el array 'tasks0'
    let taskIndex = tasks.findIndex((task)=>task.id === id);
    
    if(taskIndex === -1){
        res.status(404).json({err:true,message:"Task Not Found"});
    }else{
        // Eliminar un elemento del array 'tasks'
        tasks.splice(taskIndex,1);
        res.json({err:false,message:"Task Deleted"});
    }
}

// Exportación de recursos
export default {
    getAllTasks,
    getTask,
    addTask,
    editTask,
    completeTask,
    uncompleteTask,
    deleteTask
}
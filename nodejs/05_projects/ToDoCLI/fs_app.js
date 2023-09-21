// Dependencias de desarrollo readline chalk
import {readFileSync,readdirSync,writeFileSync} from 'fs';
import {createInterface} from 'readline';
import chalk from 'chalk';

// Variables globales
const tasks = [];
const DB_FILE = 'tasks.txt';

// Instancias readLine
const rl = createInterface({
    input:process.stdin,
    output:process.stdout
});

// Funciones de la App

function displayMenu(){
    console.log(chalk.yellow.bold("🦊🦊🦊🦊🦊 To-Do App 🦊🦊🦊🦊🦊"));
    console.log(chalk.blueBright("Options Menu \n"));
    console.log("1. Add Task");
    console.log("2. List Tasks");
    console.log("3. CompleteTasks");
    console.log("4. Exit");
    console.log('\n')
}

// Cargar tareas
function loadTasks(){
    try {
        const data = readdirSync(DB_FILE,'utf-8');
        const lines = data.split("\n");
        tasks.length === 0;

        lines.forEach(line =>{
            if(line.trim() !== ""){
                const {task,completed} = line.split("|");
                tasks.push({task,completed:completed === true});
            }
            console.log(chalk.green.bold('The tasks have been uploaded from FILE_DB successfully \n'));
        });
        
    } catch (err) {
        console.log(chalk.green.bold('No To-Do Tasks \n'));
    }
}


// Guardar/escribir tareas
function saveTask(){
    const data = tasks.map(task => `${task.task} | ${task.completed}`).join("\n");
    writeFileSync(DB_FILE,data,'utf-8');
    console.log(chalk.green.bold('The task has been added successfully to DB_FILE \n'));
}

function addTask(){
    rl.question(chalk.bgMagentaBright("Type the new task: "),(task)=>{
        tasks.push({task:task,completed:false});
        console.log(chalk.green.bold('The task has been added successfully \n'));
        saveTask();
        displayMenu();
        chooseOption();
    });
}

function listTasks(){
    console.log(chalk.yellow.bold("\n 🦊🦊🦊🦊🦊 To-Do Tasks 🦊🦊🦊🦊🦊 \n"));
    if(tasks.length === 0){
        console.log(chalk.green('No tasks To-Do 😃 \n\n'));
    }else{
        
        tasks.forEach((task,index)=>{
            let status = task.completed?"✅":"❌";

            if(task.completed){
                console.log(chalk.greenBright(`${index + 1}. ${status} - ${task.task}`));
            }else{
                console.log(chalk.redBright(`${index + 1}. ${status} - ${task.task}`));
            }
        });
    }
    displayMenu();
    chooseOption();
}

function completeTask(){
    rl.question(chalk.bgMagentaBright('Type the Task number to be completed'),(taskNumber)=>{
        const index = parseInt(taskNumber) -1;

        if(index >= 0 && index < tasks.length){
            tasks[index].completed = true;
            saveTask();
            console.log(chalk.green.bold('The task has been completed successfully ✅ \n\n'));
        }else{
            console.log(chalk.green.red('The taskNumber is invalid \n\n'));
        }
        displayMenu();
        chooseOption();
    });
}

function chooseOption(){
    rl.question("Type the number of your choice: ",(choice)=>{
        switch (choice) {
            case "1":
                addTask();
                break;
            case "2":
                listTasks();
                break;
            case "3":
                completeTask();
                break;
            case "4":
                console.log(chalk.yellow("👋🏽🦊 Bye, bye"));
                rl.close();
                break;
            default:
                console.log(chalk.red("Invalid Option, try again \n"));
                displayMenu();
                chooseOption();
                break;
        }
    });
}

loadTasks();
displayMenu();
chooseOption();
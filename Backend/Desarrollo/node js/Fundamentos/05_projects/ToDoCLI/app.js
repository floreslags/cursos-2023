// Dependencias de desarrollo readline chalk

import {createInterface} from 'readline';
import chalk from 'chalk';

const tasks = [];

// Instancias readLine
const rl = createInterface({
    input:process.stdin,
    output:process.stdout
});

function displayMenu(){
    console.log(chalk.yellow.bold("🦊🦊🦊🦊🦊 To-Do App 🦊🦊🦊🦊🦊"));
    console.log(chalk.blueBright("Options Menu \n"));
    console.log("1. Add Task");
    console.log("2. List Tasks");
    console.log("3. CompleteTasks");
    console.log("4. Exit");
    console.log('\n')
}

function addTask(){
    rl.question(chalk.bgMagentaBright("Type the new task: "),(task)=>{
        tasks.push({task:task,completed:false});
        console.log(chalk.green.bold('The task has been added successfully \n\n'));
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

displayMenu();
chooseOption();
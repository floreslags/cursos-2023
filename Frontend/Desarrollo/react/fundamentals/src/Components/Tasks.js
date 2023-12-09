import React, { useState } from 'react'
import { Task } from './Task';

export const Tasks = () => {

    const [todoList,setTodoList]=useState([]);
    const [newTask,setNewTask] = useState('');

    const handleChange = (e)=>{
        setNewTask(e.target.value);
    }

    const addTask = ()=>{

        const task = {
            id:todoList.length === 0 ? 1 : todoList[todoList.length-1].id + 1,
            taskName:newTask,
            completed:false
        }

        setTodoList([...todoList,task])
    }

    const deleteTask=(id)=>{
        // console.log(task);
        setTodoList(todoList.filter((task)=>task.id !== id));
    }

    const completeTask=(id)=>{
        todoList.map((task)=>task.id === id?{...task,completed:true}:task)
    }

  return (
    <div>
        <h2>CRUD TO-DO App</h2>
        <div className="addTask">
            <input type="text" onChange={handleChange}/>
            <button onClick={addTask}>Add Task</button>
        </div>
        <div className="taskList">
            {todoList.map((task,key)=><Task key={key} task={task} deleteTask={deleteTask} completeTask={completeTask}/>)}
        </div>
    </div>
  )
}

import React from 'react'

export const Task = ({task,deleteTask,completeTask}) => {
  return (
    <div className='task' style={{backgroundColor:task.completed?'green':'yellowgreen'}}>
      <p>{task.taskName}</p>
      <button onClick={() => deleteTask(task.id)}>x</button>
      <button onClick={() => completeTask(task.id)}>Complete</button>
    </div>
  );
}

import React from 'react';

const Task = ({task, ...props}) => {

  const ActionBtn = () => (<div className='action-btn'>{ !task.done ? (
      <p className='green_check' onClick={props.doneTask}>✔</p>
    ) : (
      <p className='red_check' onClick={props.deleteTask}>✘</p>
    )}
    </div>
  );

  const className = 'task' + (task.done ? ' task-done' : '');

  return (
    <div className = {className}>
      <p>{task.title}</p>
      <ActionBtn></ActionBtn>
    </div>
  )
}

export default Task;
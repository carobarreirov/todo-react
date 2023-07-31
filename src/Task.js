import React, { useState } from 'react';
import { FiEdit2, FiTrash2, FiCheckCircle, FiCircle } from 'react-icons/fi';
import './App.css';

function Task({ task, index, removeTask, updateTask, toggleComplete }) {
  const [isEditing, setEditing] = useState(false);
  const [newTask, setNewTask] = useState(task.text);

  const handleUpdateTask = (index, newTask) => {
    updateTask(index, newTask);
    setEditing(false);
  };

  return (
    <div className="task">
      {isEditing ? (
        <>
          <input value={newTask} onChange={(e) => setNewTask(e.target.value)} />
          <button className="update-button" onClick={() => handleUpdateTask(index, newTask)}>Update</button>
        </>
      ) : (
        <>
          <span className={task.completed ? 'completed' : ''}>{task.text}</span>
          <div>
            {task.completed ? 
              <FiCheckCircle className="complete-icon" onClick={() => toggleComplete(index)} /> :
              <FiCircle className="incomplete-icon" onClick={() => toggleComplete(index)} />
            }
            <FiEdit2 className="edit-icon" onClick={() => setEditing(true)} />
            <FiTrash2 className="delete-icon" onClick={() => removeTask(index)} />
          </div>
        </>
      )}
    </div>
  );
}

export default Task;


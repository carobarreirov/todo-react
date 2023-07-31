import React, { useState, useEffect } from 'react';
import './App.css';
import Task from './Task';
import { FiPlus } from 'react-icons/fi';

function App() {
  const [todos, setTodos] = useState(JSON.parse(localStorage.getItem('todos')) || []);
  const [input, setInput] = useState('');
  const [filter, setFilter] = useState('All');

  const handleAddTask = () => {
    if (input !== '') {
      setTodos([...todos, { text: input, completed: false }]);
      setInput('');
    }
  };

  const handleRemoveTask = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  const handleUpdateTask = (index, newTask) => {
    const newTodos = [...todos];
    newTodos[index].text = newTask;
    setTodos(newTodos);
  };

  const handleToggleComplete = (index) => {
    const newTodos = [...todos];
    newTodos[index].completed = !newTodos[index].completed;
    setTodos(newTodos);
  };

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const filteredTodos = todos.filter(todo => {
    if (filter === 'All') return true;
    if (filter === 'Completed') return todo.completed;
    if (filter === 'Incomplete') return !todo.completed;
  });

  return (
    <div className="container">
      <h1>My To-Do List</h1>
      <div className="input-container">
  <input 
    value={input} 
    onChange={e => setInput(e.target.value)}
    onKeyPress={event => {if (event.key === 'Enter') handleAddTask()}}
    placeholder="Add a new task"
  />
  <FiPlus className="add-icon" onClick={handleAddTask} />
</div>
      <select 
        onChange={e => setFilter(e.target.value)}
        className="filter-select"
      >
        <option>All</option>
        <option>Completed</option>
        <option>Incomplete</option>
      </select>
      <ul className="task-list">
        {filteredTodos.map((todo, index) => (
          <Task
            key={index}
            index={index}
            task={todo}
            removeTask={handleRemoveTask}
            updateTask={handleUpdateTask}
            toggleComplete={handleToggleComplete}
          />
        ))}
      </ul>
      <footer>@carobarreirov</footer>
    </div>
  );
}

export default App;

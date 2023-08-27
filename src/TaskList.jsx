import React, { useState, useEffect } from 'react';
import './TaskList.css';



function TaskList({ username, darkMode, toggleDarkMode }) {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    if (tasks.length >= 5 && tasks.length === 1) {
      alert("Keep going, you're almost at the finish line!");
    }
  }, [tasks]);

  const handleAddTask = () => {
    if (newTask.trim() !== '' && dueDate.trim() !== '') {
      setTasks([...tasks, { text: newTask, checked: false, dueDate }]);
      setNewTask('');
      setDueDate('');
    }
  };

  const handleDeleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  const handleToggleCheck = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].checked = !updatedTasks[index].checked;
    setTasks(updatedTasks);
  };

  const calculateCompletedPercentage = () => {
    const completedTasks = tasks.filter((task) => task.checked);
    return (completedTasks.length / tasks.length) * 100;
  };

  const filteredTasks = tasks.filter((task) =>
    task.text.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className={`task-list ${darkMode ? 'dark-mode' : ''}`}>
      <h2>Welcome, {username}!</h2>
      <div className="tasks">
        <h3>Your Task List</h3>
        <input
          type="text"
          placeholder="Search tasks..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <div className="progress">
          <div
            className="progress-bar"
            style={{ width: `${calculateCompletedPercentage()}%` }}
          ></div>
        </div>
        <p className="progress-text">
          {Math.round(calculateCompletedPercentage())}% Completed
        </p>
        <ul>
          {filteredTasks.map((task, index) => (
            <li key={index} className={task.checked ? 'checked' : ''}>
              <input
                type="checkbox"
                checked={task.checked}
                onChange={() => handleToggleCheck(index)}
              />
              <span>{task.text}</span>
              <span className="due-date">Due: {task.dueDate}</span>
              <button onClick={() => handleDeleteTask(index)}>Delete</button>
            </li>
             
          ))}
          
        </ul>
        
      </div>
      
      <div className="add-task">
        <input
          type="text"
          placeholder="Add a new task"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <input
          type="date"
          placeholder="Due Date"
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
        />
        <button onClick={handleAddTask}>Add Task</button>
      </div>
      <div className="dark-mode-toggle">
        <label htmlFor="darkModeToggle">Dark Mode</label>
        <input
          type="checkbox"
          id="darkModeToggle"
          checked={darkMode}
          onChange={toggleDarkMode}
        />
      </div>
    </div>
  );
}

export default TaskList;

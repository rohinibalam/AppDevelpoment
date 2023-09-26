// Tasklist.jsx

import React, { useState } from 'react';
import '../assets/css/Tasklist.css';

const Tasklist = () => {
  const [task, setTask] = useState('');
  const [doorNo, setDoorNo] = useState('');
  const [tasks, setTasks] = useState([]);

  const handleTaskChange = (e) => {
    setTask(e.target.value);
  };

  const handleDoorNoChange = (e) => {
    setDoorNo(e.target.value);
  };

  const handleAssignTask = () => {
    if (task.trim() !== '' && doorNo.trim() !== '') {
      const newTask = `${task} (Assigned to: Door No ${doorNo})`;
      setTasks([...tasks, newTask]);
      setTask('');
      setDoorNo('');
    }
  };

  const handleRemoveTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };

  return (
    <div className="center-container">
      <div className="tasklist-container">
        <h1>Task List</h1>
        <div className="task-input-container">
          <form>
            <input
              type="text"
              placeholder="Enter a task"
              value={task}
              onChange={handleTaskChange}
              required // Make the task input required
            />
            <input
              type="text"
              placeholder="Enter door number"
              value={doorNo}
              onChange={handleDoorNoChange}
              required // Make the door number input required
            />
            <button className="assign-button" onClick={handleAssignTask}>
              Assign
            </button>
          </form>
        </div>
        <div className="task-list">
          <h2>Tasks:</h2>
          <ul>
            {tasks.map((taskText, index) => (
              <li key={index}>
                {taskText}
                <button
                  className="remove-button"
                  onClick={() => handleRemoveTask(index)}
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Tasklist;

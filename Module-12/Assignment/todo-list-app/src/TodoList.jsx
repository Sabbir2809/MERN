import React, { useState } from 'react';

const TodoList = () => {
  // Step 1: Set up the initial state with an empty array to store tasks.
  const [tasks, setTasks] = useState([]);
  // Step 2: Create a state to handle the new task.
  const [newTask, setNewTask] = useState('');

  // Step 3: Implement a function to handle adding tasks to the list.
  const handleAddTask = () => {
    if (newTask.trim() !== '') {
      setTasks([...tasks, newTask]);
      setNewTask('');
    }
  };
  // Step 4: Implement a function to handle deleting tasks from the list.
  const handleDeleteTask = (task) => {
    setTasks(tasks.filter((t) => t !== task));
  };

  return (
    <>
      <input
        onChange={(e) => {
          setNewTask(e.target.value);
        }}
        type='text'
        placeholder='Create New Task'
      />
      <button onClick={handleAddTask}>Add Task</button>
      <table>
        <thead>
          <tr>
            <th>Description</th>
            <th>Option</th>
          </tr>
        </thead>
        <tbody>
          {tasks.length !== 0 ? (
            tasks.map((task, index) => (
              <tr key={index}>
                <td>{task}</td>
                <td>
                  <button onClick={() => handleDeleteTask(task)}>Completer</button>
                </td>
              </tr>
            ))
          ) : (
            <tr></tr>
          )}
        </tbody>
      </table>
    </>
  );
};

export default TodoList;

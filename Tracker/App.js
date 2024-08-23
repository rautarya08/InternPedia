import React, { useState } from 'react';
import Header from './components/Header';
import TaskList from './components/TaskList';
import AddTask from './components/AddTask';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([
    { id: 1, text: 'Doctor Appointment', day: 'Aug 25th at 7:30pm', reminder: true },
    { id: 2, text: 'Meeting at College', day: 'Aug 23th at 12:30pm', reminder: true },
    { id: 3, text: 'Grocery Shopping', day: 'Aug 7th at 10:30am', reminder: false },
  ]);

  // Add Task
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1;
    const newTask = { id, ...task };
    setTasks([...tasks, newTask]);
  };

  // Delete Task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  // Toggle Reminder
  const toggleReminder = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    );
  };

  return (
    <div className='container'>
      <Header />
      <AddTask onAdd={addTask} />
      {tasks.length > 0 ? (
        <TaskList tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
      ) : (
        'No Tasks To Show'
      )}
    </div>
  );
}

export default App;

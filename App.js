import React, { useState, useEffect } from 'react';
import AddTask from './components/AddTask';
import TaskList from './components/TaskList';
import EditTaskModal from './components/EditTaskModal';

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [currentTask, setCurrentTask] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    setTasks(savedTasks);
  }, []);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (task) => setTasks([...tasks, task]);

  const editTask = (updatedTask) => {
    const updatedTasks = tasks.map((task, index) =>
      index === currentTask ? updatedTask : task
    );
    setTasks(updatedTasks);
    setIsEditing(false);
  };

  const deleteTask = (index) => {
    if (window.confirm('Are you sure?')) {
      setTasks(tasks.filter((_, i) => i !== index));
    }
  };

  return (
    <div>
      <h1>Task Manager</h1>
      <AddTask onAdd={addTask} />
      <TaskList tasks={tasks} onEdit={(index) => { setCurrentTask(index); setIsEditing(true); }} onDelete={deleteTask} />
      {isEditing && (
        <EditTaskModal
          task={tasks[currentTask]}
          onSave={editTask}
          onClose={() => setIsEditing(false)}
        />
      )}
    </div>
  );
};

export default App;

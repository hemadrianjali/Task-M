import React from 'react';

const EditTaskModal = ({ task, onSave, onClose }) => {
  const [updatedTask, setUpdatedTask] = React.useState(task);

  const handleSave = () => {
    onSave(updatedTask);
    onClose();
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <input
          type="text"
          value={updatedTask.title}
          onChange={(e) => setUpdatedTask({ ...updatedTask, title: e.target.value })}
        />
        <textarea
          value={updatedTask.description}
          onChange={(e) => setUpdatedTask({ ...updatedTask, description: e.target.value })}
        />
        <input
          type="date"
          value={updatedTask.dueDate}
          onChange={(e) => setUpdatedTask({ ...updatedTask, dueDate: e.target.value })}
        />
        <select
          value={updatedTask.status}
          onChange={(e) => setUpdatedTask({ ...updatedTask, status: e.target.value })}
        >
          <option>Pending</option>
          <option>In Progress</option>
          <option>Completed</option>
        </select>
        <button onClick={handleSave}>Save</button>
        <button onClick={onClose}>Cancel</button>
      </div>
    </div>
  );
};

export default EditTaskModal;

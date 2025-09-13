import { useState } from 'react';
import '../styles/tasks.styles.css';

interface TaskFormProps {
  onAdd: (taskText: string) => void;
}

const TaskForm = ({ onAdd }: TaskFormProps) => {
  // State for new task input
  const [newTask, setNewTask] = useState('');
  // State for validation error
  const [error, setError] = useState('');

  // Handle adding a new task
  const handleAddTask = () => {
    const trimmed = newTask.trim();
    if (!trimmed) {
      setError('Please enter a task.');
      return;
    }

    onAdd(trimmed);
    setNewTask('');
    setError('');
  };

  return (
    <>
      {/* Show validation error above input */}
      {error && (
        <p className='error-message' role='alert'>
          {error}
        </p>
      )}
      <form
        className='task-form'
        onSubmit={(e) => {
          e.preventDefault();
          handleAddTask();
        }}
      >
        <input
          type='text'
          placeholder='Add a new task'
          value={newTask}
          onChange={(e) => {
            setNewTask(e.target.value);
            if (error) setError(''); // Clear error on typing
          }}
          className='task-input'
        />
        <button type='submit' className='task-button'>
          Add
        </button>
      </form>
    </>
  );
};

export default TaskForm;

import { useState } from 'react';
import '../styles/tasks.styles.css';

interface Task {
  id: number;
  text: string;
}

interface TaskListProps {
  tasks: Task[];
  onDelete: (id: number) => void;
  onEdit: (updatedTask: Task) => void;
}

const TaskList = ({ tasks, onDelete, onEdit }: TaskListProps) => {
  // State to track currently editing task
  const [editingTaskId, setEditingTaskId] = useState<number | null>(null);
  // State for the text being edited
  const [editingText, setEditingText] = useState('');
  // State for validation errors during editing
  const [editError, setEditError] = useState('');

  // Start editing a task
  const handleEditTask = (task: Task) => {
    setEditingTaskId(task.id);
    setEditingText(task.text);
  };

  // Save edited task
  const handleSaveEdit = (id: number) => {
    const trimmed = editingText.trim();
    if (!trimmed) {
      setEditError('Task cannot be empty.');
      return;
    }
    onEdit({ id, text: trimmed });
    setEditingTaskId(null);
    setEditingText('');
    setEditError('');
  };

  return (
    <ul className='tasks-list'>
      {tasks.map((task) => (
        <li key={task.id} className='task-item'>
          {editingTaskId === task.id ? (
            // Editing mode
            <div className='task-edit-wrapper'>
              {/* Show validation error above input */}
              {editError && (
                <p className='error-message' role='alert'>
                  {editError}
                </p>
              )}
              <form
                className='task-form'
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSaveEdit(task.id);
                }}
              >
                <input
                  type='text'
                  value={editingText}
                  onChange={(e) => {
                    setEditingText(e.target.value);
                    if (editError) setEditError(''); // Clear error on typing
                  }}
                  className='task-input'
                  autoFocus
                />
                <button type='submit' className='task-button'>
                  Save
                </button>
              </form>
            </div>
          ) : (
            // Display mode
            <>
              <span className='task-text' onClick={() => handleEditTask(task)}>
                {task.text}
              </span>
              <span
                className='task-delete'
                onClick={() => {
                  // Confirm before deleting
                  if (
                    window.confirm('Are you sure you want to delete this task?')
                  ) {
                    onDelete(task.id);
                  }
                }}
              >
                Delete
              </span>
            </>
          )}
        </li>
      ))}
    </ul>
  );
};

export default TaskList;

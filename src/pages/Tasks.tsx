import { useState } from 'react';
import '../styles/tasks.styles.css';
import TaskList from '../components/TaskList';
import TaskForm from '../components/TaskForm';

interface Task {
  id: number;
  text: string;
}

const Tasks = () => {
  // State to hold the list of tasks
  const [tasks, setTasks] = useState<Task[]>([]);

  return (
    <div className='tasks-container'>
      <h1 className='tasks-title'>To Do List</h1>

      {/* Task List Component */}
      {/* Pass tasks and handlers for deleting and editing */}
      <TaskList
        tasks={tasks}
        onDelete={(id) => setTasks(tasks.filter((t) => t.id !== id))}
        onEdit={(updatedTask) =>
          setTasks(
            tasks.map((t) => (t.id === updatedTask.id ? updatedTask : t))
          )
        }
      />

      {/* Task Form Component */}
      {/* Pass handler to add a new task */}
      <TaskForm
        onAdd={(text) => setTasks([...tasks, { id: Date.now(), text }])}
      />
    </div>
  );
};

export default Tasks;

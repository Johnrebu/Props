import { useState } from 'react';

export default function ToDoList() { // ✅ Default export
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState('');

  return (
    <div>
      <input 
        value={input} 
        onChange={(e) => setInput(e.target.value)} 
      />
      <button onClick={() => {
        setTasks([...tasks, input]);
        setInput('');
      }}>
        Add Task
      </button>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>{task}</li>
        ))}
      </ul>
    </div>
  );
}
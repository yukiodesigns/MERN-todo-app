import React, { useState, useEffect } from 'react';
import './App.css';
import TodoItem from './TodoItem';

const API_BASE = 'http://localhost:4001/todo';

function App() {
  const [items, setItems] = useState([]);
  const [input, setInput] = useState('');

  useEffect(() => {
    getTodos();
  }, []);

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const getTodos = () => {
    fetch(API_BASE)
      .then((res) => {
        if (!res.ok) {
          throw new Error('Failed to fetch todos');
        }
        return res.json();
      })
      .then((data) => setItems(data))
      .catch((error) => console.error('Error fetching todos:', error));
  };

  const addItem = async () => {
    try {
      const response = await fetch(API_BASE + '/new', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: input,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to add todo');
      }

      await getTodos();
      setInput('');
    } catch (error) {
      console.error('Error adding todo:', error);
    }
  };

  return (
    <div className="container">
      <div className="heading">
        <h1>TO-DO-APP</h1>
      </div>

      <div className="form">
        <input type="text" value={input} onChange={handleChange} />
        <button onClick={addItem}>
          <span>ADD</span>
        </button>
      </div>

      <div className="todolist">
        {items.map((item) => (
          <TodoItem key={item._id} name={item.name} id={item._id} setItems={setItems} />
        ))}
      </div>
    </div>
  );
}

export default App;

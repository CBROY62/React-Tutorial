import './App.css'
import React, { useState, useMemo, useCallback } from "react";

const TodoApp = () => {
  const [todos, setTodos] = useState([]);
  const [count, setCount] = useState(0);

  // Memoized function to add a new todo
  const addTodo = useCallback(() => {
    setTodos((prevTodos) => [...prevTodos, `New Task ${prevTodos.length + 1}`]);
  }, [todos]);

  // Expensive calculation (simulated delay)
  const expensiveCalculation = (num) => {
    for (let i = 0; i < 1000000000; i++) {} // Simulate heavy computation
    return num * 2;
  };

  // Memoize the expensive calculation
  const computedValue = useMemo(() => expensiveCalculation(count), [count]);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Optimized Todo List</h1>
      <button onClick={addTodo}>Add Todo</button>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
      <hr />
      <h2>Expensive Computation</h2>
      <p>Count: {count}</p>
      <p>Computed Value: {computedValue}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};

export default TodoApp;

import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import ToDoList from './ToDoList';

function App() {
  const BASE_URL = 'https://jsonplaceholder.typicode.com/todos';
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchTodos = async () => {
    try {
      const response = await axios.get(`${BASE_URL}?_limit=10`)
      setTodos(response.data);
    } catch (error) {
      console.log("Fetch error:", error)  
    }
    finally {
      setLoading(false);
    }
  }

  const toggleComplete = (id) => {
   const updated =  todos.map((todo) => {
     if (todo.id === id) {
        return {...todo, completed : !todo.completed}
      }
      return todo;
    })
    setTodos(updated);
  }

  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <div className="App">
      <header>
        <h1>TO-DO LIST</h1>
        <p>Click on the checkbox to mark a task as completed</p>
      </header>
      {loading ? <div class="loader"></div> : <ToDoList todos = {todos} onToggle = {toggleComplete}></ToDoList> }
    </div>
  );
}

export default App;

import { useEffect, useState } from "react";
import "./App.css";
import { NewTodoForm } from "./Components/NewTodoForm";
import { TodoList } from "./Components/TodoList";
import React, { useContext } from "react";
import { ThemeContext } from "./ThemeContext";



export function App() {

  const { theme, toggleTheme } = useContext(ThemeContext);


  const [todos, setTodos] = useState(() => {
    const localVal = localStorage.getItem("ITEMS");
    if (localVal === null) return [];
    return JSON.parse(localVal);
  });

  useEffect(() => {
    localStorage.setItem("ITEM", JSON.stringify(todos));
  }, [todos]);

  const addTodo = (newItem) => {
    setTodos((currentTodos) => {
      return [
        ...currentTodos,
        { id: crypto.randomUUID(), title: newItem, completed: false },
      ];
    });
  };

  const toggleTodo = (id, completed) => {
    setTodos((currentTodos) => {
      return currentTodos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed };
        }
        return todo;
      });
    });
  };
  const delTodo = (id) => {
    setTodos((currentTodos) => {
      return currentTodos.filter((todo) => todo.id != id);
    });
  };
  return (
    <div className={`app ${theme}`}>
      <button className={`button ${theme}`} onClick={toggleTheme}>Toggle Theme</button>
      <NewTodoForm addTodo={addTodo} />
      <h1 className="header">Todo List</h1>
      <TodoList todos={todos} toggleTodo={toggleTodo} delTodo={delTodo} />
    </div>
  );
}

export default App;
import { useState } from "react";
import React, { useContext } from "react";
import { ThemeContext } from "../ThemeContext";

export function NewTodoForm({ addTodo }) {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [newItem, setNewItem] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (newItem === "") return;
    addTodo(newItem);
    setNewItem("");
  };

  return (
    <form className="new-item-form" onSubmit={handleSubmit}>
      <div className="row">
        <label htmlFor="item">Add your todos</label>
        <input
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
          type="text"
          id="item"
        />
      </div>
      <button className={`btn ${theme}`}>Add</button>
    </form>
  );
}

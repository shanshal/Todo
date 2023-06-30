import React from "react";
import { TodoItem } from "./TodoItem";

export  function TodoList({todos,toggleTodo, delTodo}){
    return(
        <ul className="list">
        {todos.length === 0 && "No Todos"}
        {todos.map((todo) => {
          return (
            <TodoItem {...todo} key={todo.id} toggleTodo={toggleTodo} delTodo={delTodo} />
          );
        })}
      </ul>
    )
}
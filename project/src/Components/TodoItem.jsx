export  function TodoItem({ completed, id, title, toggleTodo, delTodo}){
    return(
        <li>
              <label>
                <input type="checkbox" checked={completed} onChange={e => toggleTodo(id, e.target.checked)} />
                {title}
              </label>
              <button onClick={() => delTodo(id)}className="btn danger">Delete</button>
            </li>
    )
}
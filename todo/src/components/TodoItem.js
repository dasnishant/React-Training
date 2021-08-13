import React from "react";

function TodoItem({ todo, deleteTodo, checkedTodo }) {
  console.log("TodoItem");

  return (
    <div className="todoItem">
      <label onClick={checkedTodo(todo)}>
        {todo.completed && <span className="checkedTodo">✔️</span>}
      </label>

      <p className={`${todo.completed && "strikeThrough"}  `}>{todo.todo}</p>
      <span onClick={deleteTodo(todo)} className="deleteBtn">
        ❌
      </span>
    </div>
  );
}

export default TodoItem;

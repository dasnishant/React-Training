import React from "react";

function TodoItem({ todo, checkedTodoHandler, deleteTodoHandler }) {
  return (
    <div className="todoItem">
      <label onClick={checkedTodoHandler(todo)}>
        {todo.completed && <span className="checkedTodo">✔️</span>}
      </label>

      <p className={`${todo.completed && "strikeThrough"}  `}>{todo.todo}</p>
      <span onClick={deleteTodoHandler(todo)} className="deleteBtn">
        ❌
      </span>
    </div>
  );
}

export default TodoItem;

import React from "react";

function TodoItem({ todo, todos, settodos }) {
  console.log("TodoItem");

  function deleteTodo() {
    settodos(todos.filter((_todo) => _todo.id !== todo.id));
  }

  function checkedTodo() {
    let todosCopy = [...todos];
    todosCopy.map((_todo) => {
      if (_todo.id === todo.id) {
        _todo.completed ? (_todo.completed = false) : (_todo.completed = true);
      }
    });
    console.log(todosCopy);
    settodos(todosCopy);
  }

  return (
    <div className="todoItem">
      <label onClick={checkedTodo}>
        {todo.completed && <span className="checkedTodo">✔️</span>}
      </label>

      <p className={`${todo.completed && "strikeThrough"}  `}>{todo.todo}</p>
      <span onClick={deleteTodo} className="deleteBtn">
        ❌
      </span>
    </div>
  );
}

export default TodoItem;

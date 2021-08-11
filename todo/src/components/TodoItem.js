import React, { useState } from "react";

function TodoItem({ todo, todos, settodos }) {
  console.log("TodoItem");
  const [isDelete, setisDelete] = useState(false);

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
    <div
      className="todoItem"
      onMouseOver={() => setisDelete(true)}
      onMouseLeave={() => setisDelete(false)}
    >
      <label onClick={checkedTodo}>
        {todo.completed && <span className="checkedTodo">✔️</span>}
      </label>

      <p className={`${todo.completed && "strikeThrough"}  `}>{todo.todo}</p>
      {isDelete && <span onClick={deleteTodo}>❌</span>}
    </div>
  );
}

export default TodoItem;
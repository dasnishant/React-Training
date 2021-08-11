import TodoItem from "./TodoItem";

function TodoList({ todos, settodos, tab }) {
  console.log("TodoList");
  var todosCopy = todos;

  if (tab === "active") {
    todosCopy = todosCopy.filter((_todo) => !_todo.completed);
  } else if (tab === "completed") {
    todosCopy = todosCopy.filter((_todo) => _todo.completed);
  }

  return (
    <div id="todoList">
      {todosCopy.map((_todo) => {
        return (
          <TodoItem
            todo={_todo}
            todos={todos}
            settodos={settodos}
            key={_todo.id}
          />
        );
      })}
    </div>
  );
}

export default TodoList;

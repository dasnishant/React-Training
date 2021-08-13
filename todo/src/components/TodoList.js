import TodoItem from "./TodoItem";

function TodoList({ getTodos, deleteTodo, checkedTodo }) {
  console.log("TodoList");

  return (
    <div id="todoList">
      {getTodos().map((_todo) => {
        return (
          <TodoItem
            deleteTodo={deleteTodo}
            checkedTodo={checkedTodo}
            todo={_todo}
            key={_todo.id}
          />
        );
      })}
    </div>
  );
}

export default TodoList;

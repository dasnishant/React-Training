import TodoItem from "./TodoItem";

function TodoList({ todosCopy, checkedTodoHandler, deleteTodoHandler }) {
  return (
    <div id="todoList">
      {todosCopy.map((_todo) => {
        return (
          <TodoItem
            key={_todo.id}
            todo={_todo}
            checkedTodoHandler={checkedTodoHandler}
            deleteTodoHandler={deleteTodoHandler}
          />
        );
      })}
    </div>
  );
}

export default TodoList;

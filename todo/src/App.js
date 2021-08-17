import Input from "./components/Input";
import TodoList from "./components/TodoList";
import Footer from "./components/Footer";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import {
  addTodo,
  deleteTodo,
  checkedTodo,
  clearCompletedTodos,
  setTabToCompleted,
  setTabToActive,
  setTabToAll,
  toggleAllToCompleted,
  setInputSpecialCharError,
  setInputNumError,
  setInputTextError,
  setInputNoError,
} from "./actions";

function App() {
  console.log("App");

  const todoReducer = useSelector((state) => state.todoReducer.todos);
  const tabReducer = useSelector((state) => state.tabReducer);
  const errorReducer = useSelector((state) => state.errorReducer);

  const dispatch = useDispatch();

  function getTodos() {
    if (tabReducer === "Active") {
      return todoReducer.filter((_todo) => !_todo.completed);
    } else if (tabReducer === "Completed") {
      return todoReducer.filter((_todo) => _todo.completed);
    }
    return todoReducer;
  }

  function getCompletedTodosCount() {
    var completedTodo = 0;
    todoReducer.map((_todo) => {
      if (_todo.completed) {
        ++completedTodo;
      }
    });
    return completedTodo;
  }

  function validateInput(event) {
    let text = event.target;
    let numRegex = /\d/;
    let specialCharRegex = /[!@#$%^&*)(+=._-]/;
    if (numRegex.test(text.value)) {
      dispatch(setInputNumError());
    } else if (specialCharRegex.test(text.value)) {
      dispatch(setInputSpecialCharError());
    } else {
      dispatch(setInputNoError());
    }
  }

  function todoInput(event) {
    if (event.key === "Enter") {
      let text = event.target;
      let numRegex = /\d/;
      let specialCharRegex = /[!@#$%^&*)(+=._-]/;
      if (text.value.trim() === "") {
        dispatch(setInputTextError());
      } else if (numRegex.test(text.value)) {
        console.log("Numbers are not allowed");
      } else if (specialCharRegex.test(text.value)) {
        console.log("Special Characters are not allowed");
      } else {
        dispatch(addTodo(text.value));
        text.value = "";
      }
    }
  }

  const toggleAllToCompletedHandler = () => () => {
    dispatch(toggleAllToCompleted());
  };

  const checkedTodoHandler = (todo) => () => {
    dispatch(checkedTodo(todo));
  };

  const deleteTodoHandler = (todo) => () => {
    dispatch(deleteTodo(todo));
  };

  const tabAll = () => () => {
    dispatch(setTabToAll());
  };

  const tabActive = () => () => {
    dispatch(setTabToActive());
  };

  const tabCompleted = () => () => {
    dispatch(setTabToCompleted());
  };

  const clearCompleted = () => () => {
    dispatch(clearCompletedTodos());
  };

  return (
    <div className="app">
      <h1>todos</h1>
      <Input
        todoInput={todoInput}
        validateInput={validateInput}
        todoLength={todoReducer.length}
        toggleAllToCompletedHandler={toggleAllToCompletedHandler}
        error={errorReducer}
      />
      <TodoList
        todosCopy={getTodos()}
        checkedTodoHandler={checkedTodoHandler}
        deleteTodoHandler={deleteTodoHandler}
      />
      {todoReducer.length > 0 && (
        <Footer
          completedTodosCount={getCompletedTodosCount()}
          todoLength={todoReducer.length}
          tabAll={tabAll}
          tabActive={tabActive}
          tabCompleted={tabCompleted}
          clearCompleted={clearCompleted}
        />
      )}
    </div>
  );
}

export default App;

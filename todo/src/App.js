import { useState } from "react";
import Input from "./components/Input";
import TodoList from "./components/TodoList";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  const [todos, settodos] = useState([]);
  const [tab, settab] = useState("all");
  const [toggleAll, settoggleAll] = useState(false);

  function addTodo(event) {
    if (event.key === "Enter") {
      if (event.target.value.trim() === "") {
        alert("Enter some text in input field");
      } else {
        let todosCopy = [...todos];
        todosCopy.push({
          id: Date.now().toString(),
          todo: event.target.value,
          completed: false,
        });
        settodos(todosCopy);
        event.target.value = "";
      }
    }
  }

  function toggleAllToCompleted() {
    if (toggleAll) {
      let todosCopy = [...todos];
      todosCopy.map((_todo) => (_todo.completed = false));
      settodos(todosCopy);
    } else {
      let todosCopy = [...todos];
      todosCopy.map((_todo) => (_todo.completed = true));
      settodos(todosCopy);
    }
    settoggleAll(!toggleAll);
  }

  function deleteTodo(todo) {
    return () => settodos(todos.filter((_todo) => _todo.id !== todo.id));
  }

  function checkedTodo(todo) {
    return function () {
      let todosCopy = [...todos];
      todosCopy.map((_todo) => {
        if (_todo.id === todo.id) {
          _todo.completed
            ? (_todo.completed = false)
            : (_todo.completed = true);
        }
      });
      console.log(todosCopy);
      settodos(todosCopy);
    };
  }

  function clearCompleted() {
    settodos(todos.filter((_todo) => !_todo.completed));
  }

  const setTab = (val) => () => {
    settab(val);
  };

  function getCompletedTodoCount() {
    var completedTodo = 0;

    todos.map((_todo) => {
      if (_todo.completed) {
        completedTodo++;
      }
    });
    return completedTodo;
  }

  function getTodos() {
    var todosCopy = todos;
    if (tab === "active") {
      todosCopy = todosCopy.filter((_todo) => !_todo.completed);
    } else if (tab === "completed") {
      todosCopy = todosCopy.filter((_todo) => _todo.completed);
    }
    return todosCopy;
  }

  console.log("App");
  return (
    <div className="app">
      <h1>todos</h1>
      <Input
        todosLength={todos.length}
        addTodo={addTodo}
        toggleAllToCompleted={toggleAllToCompleted}
        toggleAll={toggleAll}
      />
      <TodoList
        todos={todos}
        tab={tab}
        deleteTodo={deleteTodo}
        checkedTodo={checkedTodo}
        getTodos={getTodos}
      />
      {todos.length > 0 && (
        <Footer
          todos={todos}
          clearCompleted={clearCompleted}
          setTab={setTab}
          getCompletedTodoCount={getCompletedTodoCount}
        />
      )}
    </div>
  );
}

export default App;

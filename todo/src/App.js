import { useState } from "react";
import Input from "./components/Input";
import TodoList from "./components/TodoList";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  const [todos, settodos] = useState([]);
  const [tab, settab] = useState("all");
  console.log("App");
  return (
    <div className="app">
      <h1>todos</h1>
      <Input todos={todos} settodos={settodos} />
      <TodoList todos={todos} settodos={settodos} tab={tab} settab={settab} />
      {todos.length > 0 && (
        <Footer todos={todos} settodos={settodos} tab={tab} settab={settab} />
      )}
    </div>
  );
}

export default App;

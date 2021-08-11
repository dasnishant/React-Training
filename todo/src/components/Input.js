import React, { useState } from "react";

function Input({ todos, settodos }) {
  console.log("Input");
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

  return (
    <>
      <div className="inputBox">
        {todos.length > 0 && (
          <div id="toggleAll">
            <span className="arrow down" onClick={toggleAllToCompleted}></span>
          </div>
        )}
        <input
          type="text"
          placeholder="What needs to be done?"
          id="todoInput"
          onKeyPress={addTodo}
        />
      </div>
    </>
  );
}

export default Input;

import React from "react";

function Input({ todosLength, toggleAllToCompleted, addTodo }) {
  console.log("Input");

  return (
    <>
      <div className="inputBox">
        {todosLength > 0 && (
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

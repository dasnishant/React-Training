import React from "react";

function Input({
  todoInput,
  validateInput,
  todoLength,
  toggleAllToCompletedHandler,
  error,
}) {
  return (
    <>
      <div className="inputBox">
        {todoLength > 0 && (
          <div id="toggleAll">
            <span
              className="arrow down"
              onClick={toggleAllToCompletedHandler()}
            ></span>
          </div>
        )}
        <input
          type="text"
          placeholder="What needs to be done?"
          id="todoInput"
          onKeyPress={todoInput}
          onChange={validateInput}
        />
      </div>
      {error && <p className="error">{error}</p>}
    </>
  );
}

export default Input;

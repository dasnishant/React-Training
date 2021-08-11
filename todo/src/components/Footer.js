import React from "react";

function Footer({ todos, settodos, settab }) {
  console.log("Footer");
  var completedTodo = 0;

  todos.map((_todo) => {
    if (_todo.completed) {
      completedTodo++;
    }
  });

  function clearCompleted() {
    settodos(todos.filter((_todo) => !_todo.completed));
  }

  return (
    <div id="footer">
      <div id="options">
        <p id="itemsLeft">{todos.length - completedTodo} items left</p>
        <div className="footerButtons">
          <button
            id="allButton"
            className="optionsButton"
            onClick={() => settab("all")}
          >
            All
          </button>
          <button
            id="activeButton"
            className="optionsButton"
            onClick={() => settab("active")}
          >
            Active
          </button>
          <button
            id="completedButton"
            className="optionsButton"
            onClick={() => settab("completed")}
          >
            Completed
          </button>
        </div>
        {completedTodo > 0 && (
          <p id="clearCompleted" onClick={clearCompleted}>
            Clear Completed
          </p>
        )}
      </div>
      <div className="small"></div>
      <div className="smaller"></div>
    </div>
  );
}

export default Footer;

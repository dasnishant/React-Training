import React from "react";

function Footer({ todos, setTab, clearCompleted, getCompletedTodoCount }) {
  console.log("Footer");

  return (
    <div id="footer">
      <div id="options">
        <p id="itemsLeft">
          {todos.length - getCompletedTodoCount()} items left
        </p>
        <div className="footerButtons">
          <button
            id="allButton"
            className="optionsButton"
            onClick={setTab("all")}
          >
            All
          </button>
          <button
            id="activeButton"
            className="optionsButton"
            onClick={setTab("active")}
          >
            Active
          </button>
          <button
            id="completedButton"
            className="optionsButton"
            onClick={setTab("completed")}
          >
            Completed
          </button>
        </div>
        {getCompletedTodoCount() > 0 && (
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

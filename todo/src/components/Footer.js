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

  const setTab = (val) => () => {
    settab(val);
  };

  // function setTab(val) {
  //   return () => {
  //     settab(val);
  //   };
  // }

  return (
    <div id="footer">
      <div id="options">
        <p id="itemsLeft">{todos.length - completedTodo} items left</p>
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

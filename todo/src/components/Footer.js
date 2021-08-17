import React from "react";

function Footer({
  completedTodosCount,
  todoLength,
  tabAll,
  tabActive,
  tabCompleted,
  clearCompleted,
}) {
  return (
    <div id="footer">
      <div id="options">
        <p id="itemsLeft">{todoLength - completedTodosCount} items left</p>
        <div className="footerButtons">
          <button id="allButton" className="optionsButton" onClick={tabAll()}>
            All
          </button>
          <button
            id="activeButton"
            className="optionsButton"
            onClick={tabActive()}
          >
            Active
          </button>
          <button
            id="completedButton"
            className="optionsButton"
            onClick={tabCompleted()}
          >
            Completed
          </button>
        </div>
        {completedTodosCount > 0 && (
          <p id="clearCompleted" onClick={clearCompleted()}>
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

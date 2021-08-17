export const todoReducer = (
  state = { todos: [], toggleAll: false },
  action
) => {
  switch (action.type) {
    case "ADD_TODO": {
      return {
        todos: [
          ...state.todos,
          {
            id: Date.now().toString(),
            todo: action.payload,
            completed: false,
          },
        ],
        toggleAll: state.toggleAll,
      };
    }
    case "DELETE_TODO": {
      return {
        todos: state.todos.filter((_todo) => _todo.id !== action.payload.id),
        toggleAll: state.toggleAll,
      };
    }
    case "CHECKED_TODO": {
      let todosCopy = [...state.todos];
      todosCopy.map((_todo) => {
        if (_todo.id === action.payload.id) {
          _todo.completed
            ? (_todo.completed = false)
            : (_todo.completed = true);
        }
      });
      return { todos: todosCopy, toggleAll: state.toggleAll };
    }
    case "CLEAR_COMPLETED_TODOS": {
      return {
        todos: state.todos.filter((_todo) => !_todo.completed),
        toggleAll: state.toggleAll,
      };
    }
    case "TOGGLE_ALL_TO_COMPLETED": {
      if (state.toggleAll) {
        let todosCopy = [...state.todos];
        todosCopy.map((_todo) => (_todo.completed = false));
        return { todos: todosCopy, toggleAll: false };
      } else {
        let todosCopy = [...state.todos];
        todosCopy.map((_todo) => (_todo.completed = true));
        return { todos: todosCopy, toggleAll: true };
      }
    }
    default:
      return state;
  }
};

export const tabReducer = (state = "All", action) => {
  switch (action.type) {
    case "ALL_TAB":
      return "All";
    case "ACTIVE_TAB":
      return "Active";
    case "COMPLETED_TAB":
      return "Completed";
    default:
      return state;
  }
};

export const errorReducer = (state = "", action) => {
  switch (action.type) {
    case "TEXT_ERROR":
      return "Enter text in input field";
    case "NUMBER_ERROR":
      return "Numbers are not allowed";
    case "SPECIAL_CHARACTER_ERROR":
      return "Special Characters are not allowed";
    case "NO_ERROR":
      return "";
    default:
      return state;
  }
};

export const addTodo = (text) => ({ type: "ADD_TODO", payload: text });
export const deleteTodo = (todo) => ({ type: "DELETE_TODO", payload: todo });
export const checkedTodo = (todo) => ({ type: "CHECKED_TODO", payload: todo });
export const clearCompletedTodos = () => ({ type: "CLEAR_COMPLETED_TODOS" });
export const toggleAllToCompleted = () => ({ type: "TOGGLE_ALL_TO_COMPLETED" });
export const setTabToAll = () => ({ type: "ALL_TAB" });
export const setTabToActive = () => ({ type: "ACTIVE_TAB" });
export const setTabToCompleted = () => ({ type: "COMPLETED_TAB" });
export const setInputTextError = (payload) => ({ type: "TEXT_ERROR", payload });
export const setInputNumError = () => ({ type: "NUMBER_ERROR" });
export const setInputSpecialCharError = () => ({
  type: "SPECIAL_CHARACTER_ERROR",
});
export const setInputNoError = () => ({ type: "NO_ERROR" });

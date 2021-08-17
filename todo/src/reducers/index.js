import { combineReducers } from "redux";
import { todoReducer } from "./todoReducer";
import { tabReducer } from "./todoReducer";
import { errorReducer } from "./todoReducer";

const rootReducer = combineReducers({ todoReducer, tabReducer, errorReducer });
export default rootReducer;

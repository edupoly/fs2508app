import { combineReducers, createStore } from "redux";
import todoReducer from "./todolist.reducer";
import counterReducer from "./counter.reducer";

var store = createStore(combineReducers({todoReducer,counterReducer}))

export default store;
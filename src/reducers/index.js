import { combineReducers } from "redux";
import { configureStore, applyMiddleware } from "@reduxjs/toolkit"
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from "redux-thunk";
import usersReducer from "./usersReducer";

const rootReducer = combineReducers({
    user: usersReducer
})

export const store = configureStore({ reducer: rootReducer }, composeWithDevTools(applyMiddleware(thunk)))
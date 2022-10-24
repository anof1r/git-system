import { combineReducers } from "redux";
import { configureStore, applyMiddleware } from "@reduxjs/toolkit"
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from "redux-thunk";
import usersReducer from "./usersReducer";
import reposReducer from "./reposReducer";

const rootReducer = combineReducers({
    user: usersReducer,
    repos: reposReducer
})

export const store = configureStore({ reducer: rootReducer }, composeWithDevTools(applyMiddleware(thunk)))
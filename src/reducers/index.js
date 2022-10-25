import { combineReducers } from "redux";
import { configureStore, applyMiddleware } from "@reduxjs/toolkit"
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from "redux-thunk";
import usersReducer from "./usersReducer";
import reposReducer from "./reposReducer";
import commitsReducer from "./commitsReducer"

const rootReducer = combineReducers({
    user: usersReducer,
    repos: reposReducer,
    commits: commitsReducer,
})

export const store = configureStore({ reducer: rootReducer }, composeWithDevTools(applyMiddleware(thunk)))
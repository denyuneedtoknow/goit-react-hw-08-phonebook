import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import { addUser } from "../Users/operations"


const initState = [];

const users = createReducer(initState, {
    'user/registration/fulfilled': (state, action) => {
        console.log(state);
        console.log(action);
        return [state]
    }
})

export default combineReducers({
    users,
})
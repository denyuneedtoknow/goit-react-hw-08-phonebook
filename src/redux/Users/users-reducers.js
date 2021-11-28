import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import { addUser } from "./users-operations"


const initState = [];

const users = createReducer(initState, {
    [addUser.fulfilled]: (state, action) => {
        console.log(state);
        console.log(action.payload.data);
        // return [state]
    }
})

export default combineReducers({
    users,
})
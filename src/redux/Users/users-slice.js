import { createSlice } from "@reduxjs/toolkit";
import { addUser } from "./users-operations"


const authSlice = createSlice({
    name: "auth",
    initialState: {
        user: { name: "", email: "" },
        token: "",
        error: null,
        isLoading: false,
        isAuth: false
    },
    reducers: {},
    extraReducers: {
        [addUser.pending](state, action) {
            return { ...state, isLoading: true }
        },
        [addUser.fulfilled](state, action) {
            return { ...state, isLoading: false, isAuth: true, user: action.payload.user, token: action.payload.token }
        },
        [addUser.rejected](state, action) {
            return {
                isLoading: false,
                error: action.payload,
            }
        }
    }
})

export default authSlice.reducer
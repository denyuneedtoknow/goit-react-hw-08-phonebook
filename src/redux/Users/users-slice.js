import { createSlice } from "@reduxjs/toolkit";
import { addUser, loginUser, currentUser, logoutUser } from "./users-operations"


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
            state.isLoading = true
        },
        [addUser.fulfilled](state, action) {
            state.isLoading = false
            state.isAuth = true
            state.user = action.payload.data.user
            state.token = action.payload.data.token
        },
        [addUser.rejected](state, action) {
            state.isLoading = false
            state.error = action.payload
        },
        [loginUser.fulfilled](state, action) {
            state.isLoading = false
            state.isAuth = true
            state.user = action.payload.data.user
            state.token = action.payload.data.token
            state.error = null
        },
        [loginUser.pending](state, action) {
            state.isLoading = true
        },
        [loginUser.rejected](state, action) {
            state.isLoading = false
            state.error = action.payload
            state.user = ''
            state.token = ''
        },
        [currentUser.pending](state, action) {
            state.isLoading = true

        },
        [currentUser.fulfilled](state, action) {
            state.isLoading = false
            state.user = action.payload.data
            state.isAuth = true
        },
        [currentUser.rejected](state, action) {
            state.isLoading = false
            state.user = ''
            state.token = ''
            state.isAuth = false
            state.error = action.payload
        },
        [logoutUser.pending](state, action) {
            state.isLoading = true

        },
        [logoutUser.fulfilled](state, action) {
            state.isLoading = false
            state.user = ''
            state.token = ''
            state.isAuth = false
        },
        [logoutUser.rejected](state, action) {
            state.isLoading = false
            state.isAuth = true
            state.error = action.payload
            // state.user = ''
            // state.token = ''
        },
    }
})

export default authSlice.reducer
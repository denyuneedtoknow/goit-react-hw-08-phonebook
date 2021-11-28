import { createSlice } from "@reduxjs/toolkit";


const authSlice = createSlice({
    name: "auth",
    initialState: { user: { user: "", email: "" }, token: "", error: null, isLoading: false, isAuth: false },
    reducers: {},
    extraReducers: {}
})

export default authSlice.reducer
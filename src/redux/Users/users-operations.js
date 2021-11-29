
import { createAsyncThunk, } from '@reduxjs/toolkit'
import * as userAPI from '../../Services/userAPI'
import axios from 'axios'


const token = {
    set(token) {
        axios.defaults.headers.common.Authorization = `Bearer ${token}`;
    },
    unset() {
        axios.defaults.headers.common.Authorization = '';
    },
};


export const addUser = createAsyncThunk(
    "user/registration",
    async ({ name, email, password }, { rejectWithValue }) => {
        try {
            const user = await userAPI.registerUser({ name, email, password })
            // console.log(user);
            return user;
        }
        catch (error) {
            return rejectWithValue(error.message)
        }
    }
);
export const loginUser = createAsyncThunk(
    "user/login",
    async ({ email, password }, { rejectWithValue }) => {
        try {
            const user = await userAPI.loginUser({ email, password },)
            return user;
        }
        catch (error) {
            return rejectWithValue(error.message)
        }
    }
);



export const currentUser = createAsyncThunk(
    "user/current",
    async (_, { rejectWithValue, getState }) => {
        const state = getState()

        const persistedToken = state.auth.token;
        if (persistedToken === null) {
            return rejectWithValue()
        }
        token.set(persistedToken);
        try {
            const user = await userAPI.currentUser()
            return user;
        }
        catch (error) {
            return rejectWithValue(error.message)
        }
    }
);


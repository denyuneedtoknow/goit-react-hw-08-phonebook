
import { createAsyncThunk, } from '@reduxjs/toolkit'
import * as userAPI from '../../Services/userAPI'

export const addUser = createAsyncThunk(
    "user/registration",
    async ({ name, email, password }) => {
        const user = await userAPI.registerUser({ name, email, password })
        return user;
    }
);


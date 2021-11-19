import axios from 'axios'
import { createAsyncThunk, } from '@reduxjs/toolkit'
import * as contactsAPI from '../../Services/contactsAPI'

axios.defaults.baseURL = 'https://6193c189d3ae6d0017da8819.mockapi.io'

export const addContact = createAsyncThunk(
    "contacts/addContact",
    async ({ name, number }) => {
        const contacts = await contactsAPI.addContactNew({ name, number })
        return contacts;
    }
);
export const deleteContact = createAsyncThunk(
    "contacts/deleteContacts",
    async (id) => {
        const data = await contactsAPI.deleteContactsNew(id)
        return data
    }
)

export const fetchContacts = createAsyncThunk(
    "contacts/fetchContacts",
    async () => {
        const contacts = await contactsAPI.fetchContactsNew()
        return contacts;
    }
);

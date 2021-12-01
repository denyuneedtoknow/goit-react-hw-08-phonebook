import { createAsyncThunk, } from '@reduxjs/toolkit'
import * as contactsAPI from '../../Services/contactsAPI'


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
        await contactsAPI.deleteContactsNew(id)


        return id
    }
)

export const fetchContacts = createAsyncThunk(
    "contacts/fetchContacts",
    async () => {
        const contacts = await contactsAPI.fetchContactsNew()
        return contacts;
    }
);


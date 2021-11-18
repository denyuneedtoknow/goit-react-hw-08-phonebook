import axios from 'axios'
import { createAsyncThunk, } from '@reduxjs/toolkit'
import * as actions from './actions'
import * as contactsAPI from '../../Services/contactsAPI'


axios.defaults.baseURL = 'https://6193c189d3ae6d0017da8819.mockapi.io'

export const addContact = ({ id, name, number }) => async dispatch => {
    const contact = { id, name, number };
    dispatch(actions.addContactRequest())
    try { axios.post('/contacts', contact).then(({ data }) => dispatch(actions.addContactSuccess(data))) } catch (error) { dispatch(actions.addContactFail(error)) }
}


export const deleteContact = (id) => async dispatch => {

    dispatch(actions.deleteContactRequest())
    try {
        axios
            .delete(`/contacts/${id.target.id}`)
            .then(() => dispatch(actions.deleteContactSuccess(id)))
    }
    catch (error) { dispatch(actions.deleteContactFail(error)) }
}


export const fetchContacts = () => dispatch => {
    dispatch(actions.fetchContactsRequest())
    try { axios.get('/contacts').then(({ data }) => dispatch(actions.fetchContactsSuccess(data))) }
    catch (error) { dispatch(actions.fetchContactsFail(error)) }
}

// export async function fetchContactsAPI() {
//     const { data } = await axios.get("/contacts");
//     return data;
// }

// export const fetchContactsOld = createAsyncThunk(
//     "contacts/fetchContacts",
//     async () => {
//         const contacts = await fetchContactsAPI();
//         return contacts;
//     }
// );

// const fetchContactsNew = createAsyncThunk(
//     '/contacts/fetchContacts',
//     async () => {
//         const data = await axios.get(`/contacts`)
//         return { data };
//     }
// )
// console.log(fetchContactsNew());
// console.log(fetchContactsOld());

export const fetchContactsNew = createAsyncThunk(
    "contacts/fetchContacts",
    async () => {
        const contacts = await contactsAPI.fetchContacts();
        console.log(contactsAPI.fetchContacts());
        return contacts;
    }
);

// console.log(fetchContactsNew());
fetchContactsNew()
import axios from 'axios'
import * as actions from './actions'
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

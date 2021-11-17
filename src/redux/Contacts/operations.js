import axios from 'axios'
import * as actions from './actions'

export const addContact = ({ id, name, number }) => dispatch => {
    const contact = { id, name, number };
    dispatch(actions.addContactRequest())
    axios.post('/contacts', contact).then(({ data }) => dispatch(actions.addContactSuccess(data))).catch(error => dispatch(actions.addContactFail(error)))
}

// export default addContact
export const deleteContact = ({ id }) => dispatch => {
    dispatch(actions.deleteContactRequest())
    axios.delete(`/contacts/${id}`).then(() => dispatch(actions.deleteContactSuccess(id))).catch(error => dispatch(actions.deleteContactFail(error)))
}
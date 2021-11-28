import axios from 'axios'

axios.defaults.baseURL = 'https://6193c189d3ae6d0017da8819.mockapi.io'



export async function fetchContactsNew() {
    const { data } = await axios.get('/contacts')
    return data
}

export async function addContactNew({ name, number }) {
    const contact = { name, number };
    const data = axios.post('/contacts', contact)
    return data
}

export async function deleteContactsNew(id) {
    const { data } = await axios.delete(`/contacts/${id.target.id}`);
    return data;
}


import axios from 'axios'

axios.defaults.baseURL = 'https://connections-api.herokuapp.com/'

export async function registerUser({ name, email, password }) {
    const user = { name, email, password };
    const data = axios.post('/users/signup', user)
    return data
}
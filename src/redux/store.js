import { createStore, } from 'redux'
import { contactReducer } from '../redux/Contacts/reducers'
import { composeWithDevTools } from 'redux-devtools-extension';



export const store = createStore(contactReducer, composeWithDevTools(

));



import { contactReducer } from "../redux/Contacts/reducers";
import { configureStore } from '@reduxjs/toolkit';


// export const store = createStore(contactReducer, composeWithDevTools());
export const store = configureStore({ reducer: contactReducer, devTools: process.env.NODE_ENV === 'development' })
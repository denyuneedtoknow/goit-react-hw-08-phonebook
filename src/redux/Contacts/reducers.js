import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import * as actions from "./actions";

import { addContactSuccess, addContactRequest, addContactFail, deleteContactRequest, deleteContactSuccess, deleteContactFail, fetchContactsRequest, fetchContactsSuccess, fetchContactsFail } from './actions'


const initState = [];



const contactList = createReducer(initState, {
  [addContactSuccess]: (state, action) => {
    if (
      state.find((contact) => {
        return contact.name === action.payload.name;
      })
    ) {
      alert(`Sorry, contact ${action.payload.name} already existing`);
      return state;
    } else {

      return [...state, action.payload];
    }
  },
  [deleteContactSuccess]: (state, action) => {
    // console.log(action);
    const newState = state.filter(
      (contact) => contact.id !== action.payload.target.id
    );

    return newState;
  },
});



const filter = createReducer("", {
  [actions.filter]: (_, action) => action.payload,
});

const loading = createReducer(false, { [addContactSuccess]: () => false, [addContactFail]: () => false, [addContactRequest]: () => true, [deleteContactSuccess]: () => false, [deleteContactFail]: () => false, [deleteContactRequest]: () => true, [fetchContactsSuccess]: () => false, [fetchContactsFail]: () => false, [fetchContactsRequest]: () => true, })
export default combineReducers({
  contacts: contactList,
  filter: filter,
  loading: loading,
});

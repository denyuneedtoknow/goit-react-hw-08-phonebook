import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import * as actions from "./actions";
import { fetchContacts, addContact, deleteContact } from "./operations"


const initState = [];



const contactList = createReducer(initState, {
  [fetchContacts.fulfilled]: (state, action) => {
    return action.payload
  },
  [addContact.fulfilled]: (state, action) => {
    // if (
    //   state.find((contact) => {
    //     return contact.name === action.payload.name;
    //   })
    // ) {
    //   alert(`Sorry, contact ${action.payload.name} already existing`);
    //   return state;
    // } else {

    return [...state, action.payload.data];

  },

  [deleteContact.fulfilled]: (state, action) => {
    const newState = state.filter(
      (contact) => contact.id !== action.payload.id
    );

    return newState;
  },
});


const filter = createReducer("", {
  [actions.filter]: (_, action) => action.payload,
});

const loading = createReducer(false, { [addContact.fulfilled]: () => false, [addContact.rejected]: () => false, [addContact.pending]: () => true, [deleteContact.fulfilled]: () => false, [deleteContact.rejected]: () => false, [deleteContact.pending]: () => true, [fetchContacts.fulfilled]: () => false, [fetchContacts.rejected]: () => false, [fetchContacts.pending]: () => true, })
export default combineReducers({
  contacts: contactList,
  filter: filter,
  loading: loading,
});

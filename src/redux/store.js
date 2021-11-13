import { createStore } from "redux";
import { contactReducer } from "../redux/Contacts/reducers";
import { composeWithDevTools } from "redux-devtools-extension";

const initState = {
  localstateContacts: JSON.parse(localStorage.getItem("contacts")),
  newContact: { name: "", number: "" },
};

export const store = createStore(contactReducer, composeWithDevTools());

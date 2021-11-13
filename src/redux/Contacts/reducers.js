import { combineReducers } from "redux";
import { addContact, deleteContact } from "./actions";
import { store } from "../store";

const initState = {
  localstateContacts: JSON.parse(localStorage.getItem("contacts")),
  newContact: { name: "", number: "" },
};

const contactList = (state = initState.localstateContacts, action) => {
  switch (action.type) {
    case "contacts/add":
      return [...state, action.payload];
    case "contacts/delete":
      return state.filter((contact) => contact.id !== action.payload.id);
    default:
      return state;
  }
};
const contactFilter = (state = "", action) => {
  return state;
};
const newContact = (state = initState.newContact, action) => {
  return state;
};

// const handleChange = (state = initState.newContact) => {
//   console.log({ [state.name]: state.value });
//   return { [e.target.name]: e.target.value };
// };

const consoling = (state = 0, action) => {
  switch (action.type) {
    case "contacts/consolingUp":
      state = state + action.payload;
      console.log(state);
      return state;
    case "contacts/consolingDown":
      state = state - action.payload;
      console.log(state);
      return state;
    default:
      return state;
  }
};

export const contactReducer = combineReducers({
  contacts: contactList,
  filter: contactFilter,
  consoling: consoling,
  newContact: newContact,
  //   handleChange: handleChange,
});

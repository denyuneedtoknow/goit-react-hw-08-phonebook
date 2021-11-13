import { combineReducers } from "redux";
import { addContact, deleteContact } from "./actions";

const initState = JSON.parse(localStorage.getItem("contacts"));

const contactList = (state = initState, action) => {
  //   switch (action.type) {
  //     case "product/add":
  //       return [...state, action.payload];
  //     case "product/delete":
  //       return state.filter((contact) => contact.id !== action.payload.id);
  //     default:
  //       return state;
  //   }
  console.log(action.payload);
  return state;
};
const contactFilter = (state = "", action) => {
  return state;
};
export const contactReducer = combineReducers({
  contacts: contactList,
  filer: contactFilter,
});

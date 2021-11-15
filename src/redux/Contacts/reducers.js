import { combineReducers } from "redux";




const initState = () => {
  if (localStorage.getItem("contacts")) {
    return JSON.parse(localStorage.getItem("contacts"))
  }
  else { return [] }
}

const contactList = (state = initState(), action) => {
  switch (action.type) {
    case "contacts/add":
      console.log(action.payload);
      const knownContact = state.find((contact) => {
        return contact.name === action.payload.name;
      });
      if (knownContact) {
        alert(`Sorry, contact ${action.payload.name} already existing`);
        return state
      } else {
        localStorage.setItem("contacts", JSON.stringify([...state, action.payload]))
        return [...state, action.payload];

      }

    case "contacts/delete":
      const newState = state.filter((contact) => contact.id !== action.payload.target.id);
      localStorage.setItem("contacts", JSON.stringify(newState))
      return newState;
    default:
      return state;
  }
};
const filter = (state = "", action) => {
  switch (action.type) {
    case "contacts/filter":
      return action.payload

    default: return state;
  };
}



export const contactReducer = combineReducers({
  contacts: contactList,
  filter: filter,
});

import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import * as actions from "./actions";

const initState = () => {
  if (localStorage.getItem("contacts")) {
    return JSON.parse(localStorage.getItem("contacts"));
  } else {
    return [];
  }
};

// const contactList = (state = initState(), action) => {
//   switch (action.type) {
//     case "contacts/add":
//       // const knownContact = state.find((contact) => {
//       //   return contact.name === action.payload.name;
//       // });
//       if (
//         state.find((contact) => {
//           return contact.name === action.payload.name;
//         })
//       ) {
//         alert(`Sorry, contact ${action.payload.name} already existing`);
//         return state;
//       } else {
//         localStorage.setItem(
//           "contacts",
//           JSON.stringify([...state, action.payload])
//         );
//         return [...state, action.payload];
//       }

//     case "contacts/delete":
//       const newState = state.filter(
//         (contact) => contact.id !== action.payload.target.id
//       );
//       localStorage.setItem("contacts", JSON.stringify(newState));
//       return newState;
//     default:
//       return state;
//   }
// };

const contactList = createReducer(initState(), {
  [actions.addContact]: (state, action) => {
    if (
      state.find((contact) => {
        return contact.name === action.payload.name;
      })
    ) {
      alert(`Sorry, contact ${action.payload.name} already existing`);
      return state;
    } else {
      localStorage.setItem(
        "contacts",
        JSON.stringify([...state, action.payload])
      );
      return [...state, action.payload];
    }
  },
  [actions.deleteContact]: (state, action) => {
    const newState = state.filter(
      (contact) => contact.id !== action.payload.target.id
    );
    localStorage.setItem("contacts", JSON.stringify(newState));
    return newState;
  },
});

// const filter = (state = "", action) => {
//   switch (action.type) {
//     case "contacts/filter":
//       return action.payload;

//     default:
//       return state;
//   }
// };
const filter = createReducer("", {
  [actions.filter]: (_, action) => action.payload,
});

// export const contactReducer = combineReducers({
//   contacts: contactList,
//   filter: filter,
// });
export default combineReducers({
  contacts: contactList,
  filter: filter,
});

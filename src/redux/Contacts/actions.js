import { createAction } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from "uuid";


// export const addContact = ({ name, number }) => ({
//   type: "contacts/add",
//   payload: { id: uuidv4(), name, number },
// });
// export const deleteContact = (contactId) => ({
//   type: "contacts/delete",
//   payload: contactId,
// });

// export const filter = (value) => ({
//   type: "contacts/filter",
//   payload: value,
// });


export const addContact = createAction("contacts/add", ({ name, number }) => ({
  payload: { id: uuidv4(), name, number }
}));
export const filter = createAction("contacts/filter")
export const deleteContact = createAction("contacts/delete")
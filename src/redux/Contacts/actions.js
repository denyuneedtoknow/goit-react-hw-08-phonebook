import { createAction } from '@reduxjs/toolkit';




// export const addContact = createAction("contacts/add", ({ name, number }) => ({
//   payload: { id: uuidv4(), name, number }
// }));

export const addContactRequest = createAction("contacts/addRequest")
export const addContactSuccess = createAction("contacts/addSuccess")
export const addContactFail = createAction("contacts/addFail")

export const deleteContactRequest = createAction("contacts/deleteRequest")
export const deleteContactSuccess = createAction("contacts/deleteSuccess")
export const deleteContactFail = createAction("contacts/deleteFail")




export const filter = createAction("contacts/filter")
export const deleteContact = createAction("contacts/delete")
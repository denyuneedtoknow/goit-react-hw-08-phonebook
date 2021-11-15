import { v4 as uuidv4 } from "uuid";


export const addContact = ({ name, number }) => ({
  type: "contacts/add",
  payload: { id: uuidv4(), name, number },
});
export const deleteContact = (contactId) => ({
  type: "contacts/delete",
  payload: contactId,
});
export const consolingUp = (value) => ({
  type: "contacts/consolingUp",
  payload: value,
});
export const consolingDown = (value) => ({
  type: "contacts/consolingDown",
  payload: value,
});
export const filter = (value) => ({
  type: "contacts/filter",
  payload: value,
});


export const addContact = (value) => ({
  type: "contacts/add",
  payload: { value },
});
export const deleteContact = (value) => ({
  type: "contacts/delete",
  payload: { text: value },
});
export const consolingUp = (value) => ({
  type: "contacts/consolingUp",
  payload: value,
});
export const consolingDown = (value) => ({
  type: "contacts/consolingDown",
  payload: value,
});

export const handleChange = (e) => ({
  type: "contacts/inputChange",
  payload: e,
});

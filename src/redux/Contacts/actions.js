export const addContact = (value) => ({
  type: "contacts/add",
  payload: { text: value },
});
export const deleteContact = (value) => ({
  type: "contacts/delete",
  payload: { text: value },
});

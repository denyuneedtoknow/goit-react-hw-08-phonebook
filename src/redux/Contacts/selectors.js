import { createSelector } from 'reselect'


export const getContacts = state => state.contacts
export const getFilter = state => state.filter
export const getLoading = state => state.loading



// export const normalizedContact = state => {
//     const filter = getFilter(state)
//     const contacts = getContacts(state)
//     const loweredFilter = filter.toLowerCase()
//     return contacts.filter((contact) =>
//         contact.name.toLowerCase().includes(loweredFilter))
// }


export const normalizedContact = createSelector([getFilter, getContacts], (filter, contacts) => {
    const loweredFilter = filter.toLowerCase()
    return contacts.filter((contact) =>
        contact.name.toLowerCase().includes(loweredFilter))
})
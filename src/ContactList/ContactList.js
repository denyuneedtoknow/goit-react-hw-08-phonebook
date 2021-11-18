import s from "./ContactList.module.css";
import { useEffect, } from 'react'
import { connect, } from "react-redux";
import Loader from "react-loader-spinner";
import { addContact, deleteContact, fetchContacts } from '../redux/Contacts/operations'


function ContactList({ contacts, deleteContact, fetchContacts, isLoading }) {


  useEffect(() => {
    fetchContacts()
  }, [fetchContacts]);

  return (
    <>
      {isLoading && <Loader type="Bars" color="#00008B" height={120} width={120} />}
      {contacts.map((contact) => (
        <div className={s.contacts} key={contact.id}>
          <p id={contact.id} className={s.contactName}>
            {contact.name}
          </p>
          <p className={s.contactNumber}>{contact.number}</p>
          <button className={s.addBtn} id={contact.id} onClick={deleteContact}>
            Delete
          </button>

        </div>
      ))}

    </>
  );
}

const normalizedFilter = (filter, contacts) => {
  const loweredFilter = filter.toLowerCase()
  return contacts.filter((contact) =>
    contact.name.toLowerCase().includes(loweredFilter))
}


const mapStateToProps = (state) => ({
  contacts: normalizedFilter(state.filter, state.contacts),
  isLoading: state.loading
});

const mapDispatchToProps = (dispatch) => ({
  addContact: () => dispatch(addContact()),
  deleteContact: (id) => dispatch(deleteContact(id)),
  fetchContacts: () => dispatch(fetchContacts())

});
export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
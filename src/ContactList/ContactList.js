import s from "./ContactList.module.css";
import { connect } from "react-redux";
import * as actions from "../redux/Contacts/actions";

function ContactList({ contacts, deleteContact }) {

  return (
    <>
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




const mapStateToProps = (state) => {
  const filter = state.filter
  const loweredFilter = filter.toLowerCase()
  return {
    contacts: state.contacts.filter((contact) =>
      contact.name.toLowerCase().includes(loweredFilter)),
  }
};

const mapDispatchToProps = (dispatch) => ({
  addContact: () => dispatch(actions.addContact()),
  deleteContact: (id) => dispatch(actions.deleteContact(id)),

});
export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
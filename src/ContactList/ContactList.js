import s from "./ContactList.module.css"

export default function ContactList({ contacts, handleBtn }) {
  return (
    <>
      {contacts.map((contact) => (
        <div className={s.contacts} key={contact.id}>
          <p id={contact.id} className={s.contactName}>{contact.name}</p>
          <p className={s.contactNumber}>{contact.number}</p>
          <button className={s.addBtn} id={contact.id} onClick={handleBtn}>
            Delete
          </button>
        </div>
      ))}
    </>
  );
}

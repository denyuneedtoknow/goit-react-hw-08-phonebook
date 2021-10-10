export default function ContactList({ contacts, handleBtn }) {
  return (
    <>
      {contacts.map((contact) => (
        <div key={contact.id}>
          <p id={contact.id}>Name{contact.name}</p>
          <p>Phone{contact.number}</p>
          <button id={contact.id} onClick={handleBtn}>
            Delete
          </button>
        </div>
      ))}
    </>
  );
}

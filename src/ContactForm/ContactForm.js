import { v4 as uuidv4 } from "uuid";

export default function ContactForm({
  name,
  number,
  handleSubmit,
  handleChange,
}) {
  const nameId = uuidv4();
  const numberId = uuidv4();
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor={nameId}>
        Name
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
          value={name}
          id={nameId}
          onChange={handleChange}
        ></input>
      </label>
      <label htmlFor={numberId}>
        Phone
        <input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
          required
          value={number}
          id={numberId}
          onChange={handleChange}
        ></input>
      </label>
      <button type="submit">Add contact</button>
    </form>
  );
}

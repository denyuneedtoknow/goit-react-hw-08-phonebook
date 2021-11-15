import { useState, } from "react";
import { v4 as uuidv4 } from "uuid";
import s from "./ContactForm.module.css";
import { connect } from "react-redux";
import * as actions from "../redux/Contacts/actions";

function ContactForm({ onSubmit }) {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [contact, setContact] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "name":
        setName(value);
        break;
      case "number":
        setNumber(value);
        break;
      default:
        return;
    }
  };

  const resetForm = () => {
    setName("");
    setNumber("");
  };

  const submit = (e) => {
    e.preventDefault();
    setContact({ id: uuidv4(), name, number });
    onSubmit({ name, number });
    resetForm();
  };

  const nameId = uuidv4();
  const numberId = uuidv4();

  return (
    <form className={s.form} onSubmit={submit}>
      <label className={s.label} htmlFor={nameId}>
        <p className={s.inputTitle}>Name</p>
        <input
          className={s.input}
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
      <label className={s.label} htmlFor={numberId}>
        <p className={s.inputTitle}>Phone</p>
        <input
          className={s.input}
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
      <button className={s.addBtn} type="submit">
        Add contact
      </button>
    </form>
  );
}

const mapDispatchToProps = (dispatch) => ({
  onSubmit: ({ name, number }) => dispatch(actions.addContact({ name, number })),
  deleteContact: (id) => dispatch(actions.deleteContact(id)),
});
export default connect(null, mapDispatchToProps)(ContactForm);

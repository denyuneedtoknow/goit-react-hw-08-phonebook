import React from "react";
import { v4 as uuidv4 } from "uuid";
import s from "./ContactForm.module.css";
import { connect } from "react-redux";
import * as actions from "../redux/Contacts/actions";

const ContactForm = ({ contact }) => {
  // state = {
  //   name: "",
  //   number: "",
  // };
  console.log(contact);
  const resetForm = () => {
    // return this.setState({ name: "", number: "" });
  };

  const handleChange = (e) => {
    // this.setState(() => ({
    //   [e.target.name]: e.target.value,
    // }));
  };

  const submit = (e) => {
    e.preventDefault();
    // const { props, state } = this;

    // props.handleSubmit(state);
    resetForm();
  };

  // render() {
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
          value={contact.name}
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
          value={contact.number}
          id={numberId}
          onChange={handleChange}
        ></input>
      </label>
      <button className={s.addBtn} type="submit">
        Add contact
      </button>
    </form>
  );
};
// }

const mapStateToProps = (state) => ({
  contact: state.newContact,
});

const mapDispatchToProps = (dispatch) => ({
  addContact: () => dispatch(actions.addContact()),
  deleteContact: () => dispatch(actions.deleteContact()),
  consolingUp: () => dispatch(actions.consolingUp(5)),
  consolingDown: () => dispatch(actions.consolingDown(5)),
  // handleChange: () => dispatch(actions.handleChange()),
});
export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);

import React from "react";
import { v4 as uuidv4 } from "uuid";
import s from "./ContactForm.module.css"


class ContactForm extends React.Component {

  state = {
    name: "",
    number: "",
    contact: null,

  }
  resetForm = () => {
    return this.setState({ name: "", number: "" });
  };

  handleChange = (e) => {
    this.setState(() => ({
      [e.target.name]: e.target.value,
    }));
  };

  submit = e => {
    e.preventDefault();
    const { props, state } = this;
    console.log(props);
    props.handleSubmit(state);
    this.resetForm();
  };

  render() {
    const nameId = uuidv4();
    const numberId = uuidv4();
    return (<form className={s.form} onSubmit={this.submit}>
      <label className={s.label} htmlFor={nameId}>
        <p className={s.inputTitle}>Name</p>
        <input className={s.input}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
          value={this.state.name}
          id={nameId}
          onChange={this.handleChange}
        ></input>
      </label>
      <label className={s.label} htmlFor={numberId}>
        <p className={s.inputTitle}>Phone</p>
        <input className={s.input}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
          required
          value={this.state.number}
          id={numberId}
          onChange={this.handleChange}
        ></input>
      </label>
      <button className={s.addBtn} type="submit">Add contact</button>
    </form>
    )
  }
}

export default ContactForm
import React from "react";
import { v4 as uuidv4 } from "uuid";


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
    return (<form className="form" onSubmit={this.submit}>
      <label htmlFor={nameId}>
        Name
        <input
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
      <label htmlFor={numberId}>
        Phone
        <input
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
      <button className="addBtn" type="submit">Add contact</button>
    </form>
    )
  }
}

export default ContactForm
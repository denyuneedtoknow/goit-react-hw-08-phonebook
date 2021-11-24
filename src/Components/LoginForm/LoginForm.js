import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import s from "./LoginForm.module.css";
import { connect } from "react-redux";
import { addContact, deleteContact } from '../../redux/Contacts/operations'
import { getContacts } from '../../redux/Contacts/selectors'

function LoginForm({ onSubmit, contacts }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");



  const handleChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "name":
        setName(value);
        break;
      case "email":
        setEmail(value);
        console.log(email);
        break;
      default:
        return;
    }
  };

  const resetForm = () => {
    setName("");
    setEmail("");
  };

  const submit = (e) => {
    e.preventDefault();
    onSubmit({ name, email });
    resetForm();
  }

  const nameId = uuidv4();
  const emailId = uuidv4();

  return (
    <form className={s.form} onSubmit={submit}>
      <label className={s.label} htmlFor={nameId}>
        <p className={s.inputTitle}>Name</p>
        <input
          className={s.input}
          type="text"
          name="name"
          // pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
          value={name}
          id={nameId}
          onChange={handleChange}
        ></input>
      </label>
      <label className={s.label} htmlFor={emailId}>
        <p className={s.inputTitle}>E-mail</p>
        <input
          className={s.input}
          type="text"
          name="email"
          // pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="e-mail"
          required
          value={email}
          id={emailId}
          onChange={handleChange}
        ></input>
      </label>
      <button className={s.addBtn} type="submit">
        Enter
      </button>
    </form>
  );
}
// const mapStateToProps = (state) => ({
//   contacts: getContacts(state)
// });

// const mapDispatchToProps = (dispatch) => ({
//   onSubmit: ({ name, number }) =>
//     dispatch(addContact({ name, number })),
//   deleteContact: (id) => dispatch(deleteContact(id))
// });
// export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
export default LoginForm


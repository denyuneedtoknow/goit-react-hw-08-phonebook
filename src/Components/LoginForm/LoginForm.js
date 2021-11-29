import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import s from "./LoginForm.module.css";
import { connect } from "react-redux";
import { loginUser, } from '../../redux/Users/users-operations'


function LoginForm({ onSubmit, contacts }) {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");



  const handleChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "password":
        setPassword(value);
        break;
      case "email":
        setEmail(value);
        break;
      default:
        return;
    }
  };

  const resetForm = () => {
    setPassword("");
    setEmail("");
  };

  const submit = (e) => {
    e.preventDefault();
    onSubmit({ email, password, });
    resetForm();
  }

  const passwordId = uuidv4();
  const emailId = uuidv4();

  return (
    <form className={s.form} onSubmit={submit}>
      <label className={s.label} htmlFor={emailId}>
        <p className={s.inputTitle}>E-mail</p>
        <input
          className={s.input}
          type="mail"
          name="email"

          title="e-mail"
          required
          value={email}
          id={emailId}
          onChange={handleChange}
        ></input>
      </label>
      <label className={s.label} htmlFor={passwordId}>
        <p className={s.inputTitle}>Password</p>
        <input
          className={s.input}
          type="password"
          name="password"

          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
          value={password}
          id={passwordId}
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

const mapDispatchToProps = (dispatch) => ({
  onSubmit: ({ email, password, }) =>
    dispatch(loginUser({ email, password, })),
  // deleteContact: (id) => dispatch(deleteContact(id))
});
export default connect(null, mapDispatchToProps)(LoginForm);
// export default LoginForm


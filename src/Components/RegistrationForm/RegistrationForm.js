import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import s from "./RegistrationForm.module.css";
import { connect } from "react-redux";
import { addUser, } from '../../redux/Users/users-operations'


const RegistrationForm = ({ onSubmit, }) => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    const handleChange = (e) => {
        const { name, value } = e.target;
        switch (name) {
            case "name":
                setName(value);
                break;
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
        setName("");
        setPassword("");
        setEmail("");
    };

    const submit = (e) => {
        e.preventDefault();
        onSubmit({ name, email, password });
        resetForm();
    }

    const nameId = uuidv4();
    const passwordId = uuidv4();
    const emailId = uuidv4();


    return (
        <>
            <form className={s.form} onSubmit={submit}>
                <label className={s.label} htmlFor={nameId}>
                    <p className={s.inputTitle}>Name</p>
                    <input
                        className={s.input}
                        type="text"
                        name="name"
                        // pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        // title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
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
                        type="mail"
                        name="email"
                        // pattern="[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?"
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
                        // pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                        // title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
                        required
                        value={password}
                        id={passwordId}
                        onChange={handleChange}
                    ></input>
                </label>
                <button className={s.addBtn} type="submit">
                    Register
                </button>
            </form></>
    )
}





// const mapStateToProps = (state) => ({
//     contacts: getContacts(state)
// });

const mapDispatchToProps = (dispatch) => ({
    onSubmit: ({ name, email, password }) =>
        dispatch(addUser({ name, email, password })),
    // deleteContact: (id) => dispatch(deleteContact(id))
});
export default connect(null, mapDispatchToProps)(RegistrationForm);



// export default RegistrationForm